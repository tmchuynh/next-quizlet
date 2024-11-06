import express from 'express';
import dotenv from 'dotenv';
import sequelize from './config/database';
import { sessionMiddleware } from './middleware/session';
import userRoutes from './routes/userRoutes';
import axios from 'axios';
import request from 'request';

dotenv.config();
console.log( "Loaded environment variable PORT:", process.env.PORT );
console.log( "Loaded environment variable PORT:", process.env.MYSQL_USER );

const app = express();
const PORT = process.env.PORT || 5000;

app.use( express.json() );
app.use( sessionMiddleware ); // Enable session handling

// Test database connection
sequelize
    .authenticate()
    .then( () => console.log( 'Database connected...' ) )
    .catch( ( err: Error ) => console.error( 'Database connection error:', err ) );

// Routes
app.use( '/api/users', userRoutes ); // Set up your API routes

// Function to retrieve Auth0 Management API Access Token
async function getAuth0Token() {
    console.log( "Requesting Auth0 token..." );
    try {
        var options = {
            method: 'POST',
            url: 'https://dev-gn623zdfoivws5w1.us.auth0.com/oauth/token',
            headers: { 'content-type': 'application/json' },
            body: '{"client_id":"RJQ1NUUkGnbPTuKan9apUf9lalI6v3FD","client_secret":"JV9LLlWLCFqXx3Lyj4YWmI-xi_FiSJlfKKsNqSVLlkxRtqaFOcuMXIbs72UOQ8X5","audience":"https://dev-gn623zdfoivws5w1.us.auth0.com/api/v2/","grant_type":"client_credentials"}'
        };

        request( options, function ( error: string | undefined, response: any, body: any ) {
            if ( error ) throw new Error( error );

            return JSON.parse( body ).access_token;
        } );
    } catch ( error ) {
        console.error( 'Failed to retrieve Auth0 token:', error );
        throw new Error( 'Unable to retrieve Auth0 token' );
    }
}


// Start server
app.listen( PORT, async () => {
    console.log( `Server running on http://localhost:${ PORT }` );

    try {
        const token = await getAuth0Token();
        console.log( 'Auth0 Token:', token );
    } catch ( error ) {
        console.error( 'Error fetching Auth0 token on startup:', error );
    }
} );
