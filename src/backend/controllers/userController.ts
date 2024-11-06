import bcrypt from 'bcrypt'; // Assuming bcrypt is used for password hashing
import { Request, Response } from 'express';
import User from '../models/User';
import { getSession } from '@auth0/nextjs-auth0';
import { NextApiRequest, NextApiResponse } from 'next';
import { hashPassword } from '../utils/hashPassword';
import { toTitleCase } from '../utils/formatUtils';
import { generateUniqueId } from '../utils/uuid';

export const getUserProfile = async ( req: Request, res: Response ) => {
    try {
        const userId = parseInt( req.params.id );
        const user = await User.findByPk( userId );

        if ( !user ) {
            return res.status( 404 ).json( { error: 'User not found' } );
        }

        res.json( {
            id: user.user_id,
            username: user.username,
            email: user.email,
            createdAt: user.created_at,
        } );
    } catch ( error ) {
        res.status( 500 ).json( { error: 'Error retrieving user profile' } );
    }
};
// Register user with local credentials
export const registerUser = async ( req: Request, res: Response ): Promise<void> => {
    const { username, email, firstName, lastName, password } = req.body;

    try {
        // Hash the password before storing it
        const hashedPassword = await hashPassword( password );

        // Create a new user in the database
        const newUser = await User.create( {
            user_id: generateUniqueId(),
            first_name: toTitleCase( firstName ),
            last_name: toTitleCase( lastName ),
            username,
            password_hash: hashedPassword,
            email,
            created_at: new Date(),
        } );

        res.status( 201 ).json( { message: 'Registration successful', user: newUser } );
    } catch ( error ) {
        console.error( 'Error registering user:', error );
        res.status( 500 ).json( { message: 'Error registering user' } );
    }
};

// Additional Information for Social Sign-Ups
export const completeProfile = async ( req: Request, res: Response ): Promise<void> => {
    const { firstName, lastName, username, email } = req.body;
    const session = await getSession( req, res );

    try {
        // Update user with additional information
        const updatedUser = await User.update(
            { first_name: firstName, last_name: lastName, username, email },
            { where: { user_id: session?.user.sub } }
        );

        res.status( 200 ).json( { message: 'Profile completed', user: updatedUser } );
    } catch ( error ) {
        console.error( 'Error completing profile:', error );
        res;
    }
};


export const loginUser: ( req: Request, res: Response ) => Promise<void> = async ( req, res ) => {
    const { username, password } = req.body;

    try {
        const user = await User.findOne( { where: { username } } );
        if ( !user ) {
            res.status( 404 ).json( { message: 'User not found' } );
        }

        const isPasswordValid = await bcrypt.compare( password, user?.password_hash! );
        if ( !isPasswordValid ) {
            res.status( 401 ).json( { message: 'Unauthorized' } );
        }

        res.status( 200 ).json( { message: 'Login successful' } );
    } catch ( error ) {
        console.error( 'Error logging in user:', error );
        res.status( 500 ).json( { message: 'Internal server error' } );
    }
};

