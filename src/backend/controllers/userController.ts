import { Request, Response } from 'express';
import User from '../models/User';
import querystring from 'querystring';
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


async function getAuth0Token() {
    try {
        // Debug: Log environment variables (ensure this is safe and won't expose secrets in production logs)
        console.log( 'Debug - Environment Variables:' );
        console.log( 'AUTH0_ISSUER_BASE_URL:', process.env.NEXT_PUBLIC_AUTH0_ISSUER_BASE_URL );
        console.log( 'AUTH0_CLIENT_ID:', process.env.AUTH0_CLIENT_ID );
        console.log( 'AUTH0_CLIENT_SECRET:', process.env.AUTH0_CLIENT_SECRET ? '*****' : 'Not Set' );

        // Prepare the payload
        const payload = {
            client_id: process.env.AUTH0_CLIENT_ID,
            client_secret: process.env.AUTH0_CLIENT_SECRET,
            audience: `${ process.env.NEXT_PUBLIC_AUTH0_ISSUER_BASE_URL }/api/v2/`,
            grant_type: 'client_credentials',
        };

        // Debug: Log payload
        console.log( 'Debug - Request Payload:', payload );

        // Make the request
        const response = await axios.post(
            `${ process.env.NEXT_PUBLIC_AUTH0_ISSUER_BASE_URL }/oauth/token`,
            querystring.stringify( payload ), // Convert payload to URL-encoded format
            {
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            }
        );

        console.log( "Auth0 token retrieved successfully." );
        return response.data.access_token;
    } catch ( error ) {
        if ( axios.isAxiosError( error ) && error.response ) {
            console.error( 'Failed to retrieve Auth0 token:', error.response.data );
        } else {
            console.error( 'Failed to retrieve Auth0 token:', error );
        }
        throw new Error( 'Unable to retrieve Auth0 token' );
    }
}


const getManagementApiToken = async () => {
    console.log( "Requesting Auth0 token..." );

    let data = JSON.stringify( {
        "client_id": `${ process.env.AUTH0_CLIENT_ID }`,
        "audience": `${ process.env.NEXT_PUBLIC_AUTH0_ISSUER_BASE_URL }/api/v2/`,
        "organization_usage": "deny",
        "allow_any_organization": false,
        "scope": [
            "read:users",
            "update:users",
            "delete:users",
            "read:user_metadata",
            "update:user_metadata",
            "delete:user_metadata",
        ]
    } );

    let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'https://login.auth0.com/api/v2/client-grants',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        data: data
    };

    axios.request( config )
        .then( ( response ) => {
            console.log( JSON.stringify( response.data ) );
        } )
        .catch( ( error ) => {
            console.log( error );
        } );
};

export async function getUserById( auth0UserId: string ) {
    getManagementApiToken();
    const token = await getAuth0Token();

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

export async function getUserByNickname( name: string ) {
    const token = await getAuth0Token(); // Assumes you have a function to get a valid Auth0 Management API token

    if ( !process.env.NEXT_PUBLIC_AUTH0_ISSUER_BASE_URL ) {
        throw new Error( "The AUTH0_ISSUER_BASE_URL environment variable is not set correctly." );
    }

    let options = {
        method: 'GET',
        url: `${ process.env.NEXT_PUBLIC_AUTH0_ISSUER_BASE_URL }/api/v2/users`,
        headers: {
            authorization: `Bearer ${ token }`,
            'Content-Type': 'application/json'
        },
        params: {
            q: `nickname:"${ name }"`,
            search_engine: 'v3'
        }
    };

    try {
        const response = await axios.request( options );
        if ( response.data.length === 0 ) {
            console.warn( 'No user found with the specified nickname.' );

            try {
                options = {
                    method: 'GET',
                    url: `${ process.env.NEXT_PUBLIC_AUTH0_ISSUER_BASE_URL }/api/v2/users`,
                    headers: {
                        authorization: `Bearer ${ token }`,
                        'Content-Type': 'application/json'
                    },
                    params: {
                        q: `username:"${ name }"`,
                        search_engine: 'v3',
                    },
                };

                const response = await axios.request( options );
                if ( response.data.length === 0 ) {
                    console.warn( 'No user found with the specified username.' );
                    return null;
                }
            }
            catch ( error ) {
                console.error( "Error retrieving user by username from Auth0:", error );
                throw error;
            }
        }
        return response.data;
    } catch ( error ) {
        console.error( "Error retrieving user by name from Auth0:", error );
        throw error;
    }
}

export async function addUserToDatabase( user_id: any ) {
    try {
        // If user doesn't exist, create a new entry
        const date = new Date();
        const user = await User.create( { user_id, created_at: date } );
        console.log( "User added to database:", user );

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