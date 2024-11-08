// src/routes/userRoutes.ts
import express, { Request, Response } from 'express';
import { useUser } from '@auth0/nextjs-auth0/client';
import { addUserToDatabase, getUserById, processUser } from '../controllers/userController';
import User from '../models/User';

const router = express.Router();

/**
 * Route to handle user registration:
 * - Checks if the user exists in Auth0 and in the database.
 * - If the user does not exist in the database, it adds them.
 */
router.post( '/register', async ( req: Request, res: Response ) => {
    const { auth0UserId } = req.body;

    if ( !auth0UserId ) {
        return res.status( 400 ).json( { error: 'Auth0 user ID is required.' } );
    }

    try {
        const user = await processUser( auth0UserId );

        if ( !user ) {
            addUserToDatabase( user!.user_id );

            return res.status( 404 ).json( { error: 'User not found or could not be added to the database.' } );
        }

        res.status( 201 ).json( { message: 'User processed successfully', user } );
    } catch ( error ) {
        console.error( 'Error during user registration:', error );
        res.status( 500 ).json( { error: 'Internal server error during registration.' } );
    }
} );

/**
 * Route to get user profile by ID.
 */
router.get( '/:id/dashboard', async ( req: Request, res: Response ) => {
    const userId = req.params.id;

    try {
        if ( !userId ) {
            addUserToDatabase( userId );
            return res.status( 404 ).json( { error: 'User not found' } );
        }

        const user = await getUserById( userId );

        res.json( {
            id: userId,
            createdAt: JSON.parse( user ).created_at,
        } );
    } catch ( error ) {
        console.error( 'Error retrieving user profile:', error );
        res.status( 500 ).json( { error: 'Internal server error retrieving user profile' } );
    }
} );

export default router;
