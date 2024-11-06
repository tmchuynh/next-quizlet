import bcrypt from 'bcrypt'; // Assuming bcrypt is used for password hashing
import { Request, Response } from 'express';
import User from '../models/User';
import axios from 'axios';

export const getUserProfile = async ( req: Request, res: Response ) => {
    try {
        const userId = parseInt( req.params.id );
        const user = await User.findByPk( userId );

        if ( !user ) {
            return res.status( 404 ).json( { error: 'User not found' } );
        }

        res.json( {
            id: user.user_id,
            createdAt: user.created_at,
        } );
    } catch ( error ) {
        res.status( 500 ).json( { error: 'Error retrieving user profile' } );
    }
};

export async function getUserById( auth0UserId: string ) {
    const token = process.env.AUTH0_MGMT_API_ACCESS_TOKEN;

    if ( !process.env.NEXT_PUBLIC_AUTH0_ISSUER_BASE_URL ) {
        throw new Error( "The AUTH0_ISSUER_BASE_URL environment variable is not set correctly." );
    }

    const options = {
        method: 'GET',
        url: `${ process.env.NEXT_PUBLIC_AUTH0_ISSUER_BASE_URL }/api/v2/users/${ auth0UserId }`,
        headers: {
            authorization: `Bearer ${ token }`,
        },
    };

    try {
        const response = await axios.request( options );
        return response.data;
    } catch ( error ) {
        console.error( "Error retrieving user from Auth0:", error );
        throw error;
    }
}

export async function addUserToDatabase( user_id: any ) {
    try {
        // Check if user already exists in the database
        let user = await User.findOne( { where: { user_id } } );

        if ( !user ) {
            // If user doesn't exist, create a new entry
            const date = new Date();
            user = await User.create( { user_id, created_at: date } );
            console.log( "User added to database:", user );
        } else {
            console.log( "User already exists in database:", user );
        }

        return user;
    } catch ( error ) {
        console.error( "Error adding user to database:", error );
        throw error;
    }
}

export async function processUser( auth0UserId: any ) {
    try {
        // Step 1: Retrieve the user data from Auth0
        const auth0User = await getUserById( auth0UserId );
        if ( !auth0User ) {
            console.error( "User not found in Auth0." );
            return null;
        }

        // Step 2: Store or verify user in MySQL
        const user = await addUserToDatabase( auth0User.user_id );
        return user;
    } catch ( error ) {
        console.error( "Error processing user:", error );
    }
}