import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import { User } from '../models/User';

// Register user
export const registerUser = async ( req: Request, res: Response ) => {
    try {
        const { username, email, password } = req.body;
        const hashedPassword = await bcrypt.hash( password, 10 );

        const user = await User.create( { username, email, password: hashedPassword } );
        res.status( 201 ).json( user );
    } catch ( error ) {
        res.status( 500 ).json( { message: 'Error registering user', error } );
    }
};

// Login user
export const loginUser = async ( req: Request, res: Response ) => {
    // Login logic here
};
