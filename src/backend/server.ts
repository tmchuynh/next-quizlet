import express from 'express';
import dotenv from 'dotenv';
import sequelize from './config/database';
import { sessionMiddleware } from './middleware/session';
import userRoutes from './routes/userRoutes';

dotenv.config();

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

// Start server
app.listen( PORT, () => {
    console.log( `Server running on http://localhost:${ PORT }` );
} );
