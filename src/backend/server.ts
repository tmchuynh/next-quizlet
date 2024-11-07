// src/backend/server.ts
import express from 'express';
import dotenv from 'dotenv';
import sequelize from './config/database';
import userRoutes from '../backend/routes/userRoutes';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use( express.json() );

// Database connection test
sequelize
    .authenticate()
    .then( () => console.log( 'Database connected...' ) )
    .catch( ( err: Error ) => console.error( 'Database connection error:', err ) );

// Attach routes
app.use( '/api/users', userRoutes );

// Start the server
app.listen( PORT, () => {
    console.log( `Server running on http://localhost:${ PORT }` );
} );
