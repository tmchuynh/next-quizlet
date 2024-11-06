import bcrypt from 'bcrypt'; // Assuming bcrypt is used for password hashing
import { Request, Response } from 'express';
import User from '../models/User';
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

export async function registerUser(
    fields: { element: HTMLInputElement; }[]
): Promise<void> {
    // Hash the password before storing it
    const hashedPassword = await hashPassword( fields[4].element.value.trim() );

    const newUser = await User.create( {
        user_id: generateUniqueId(),
        first_name: toTitleCase( fields[0].element.value.trim() ),
        last_name: toTitleCase( fields[1].element.value.trim() ),
        username: fields[3].element.value.trim(),
        password_hash: hashedPassword, // Store the hashed password
        email: fields[2].element.value.trim(),
        created_at: new Date(),
    } );

    // Retrieve existing users from localStorage or initialize an empty array
    const users: User[] = JSON.parse( localStorage.getItem( "users" ) || "[]" );

    // Add the new user to the users array
    users.push( newUser );

    // Save the updated users array in localStorage
    localStorage.setItem( "users", JSON.stringify( users ) );

    // Update the UI to transition from registration to login
    const registerSection = document.getElementById(
        "registerSection"
    ) as HTMLElement;
    const loginSection = document.getElementById( "loginSection" ) as HTMLElement;
    registerSection.style.display = "none";
    loginSection.style.display = "block"; // Go to login after registration
}


export const loginUser = async ( req: Request, res: Response ) => {
    const { username, password } = req.body;

    try {
        const user = await User.findOne( { where: { username } } );

        if ( !user ) {
            return res.status( 404 ).json( { message: 'User not found' } );
        }

        // Assuming password_hash is stored in the user model
        const isPasswordValid = await bcrypt.compare( password, user.password_hash );

        if ( !isPasswordValid ) {
            return res.status( 401 ).json( { message: 'Incorrect password' } );
        }

        return res.status( 200 ).json( {
            message: 'Login successful',
            user: {
                user_id: user.user_id,
                username: user.username,
                email: user.email,
                firstName: toTitleCase( user.first_name ),
                lastName: toTitleCase( user.last_name ),
            },
        } );

    } catch ( error ) {
        console.error( 'Error logging in user:', error );
        return res.status( 500 ).json( { message: 'Internal server error' } );
    }
};
