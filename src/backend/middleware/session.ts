import session from 'express-session';
const SequelizeStore = require( 'connect-session-sequelize' )( session.Store );
import sequelize from '../config/database';

const secret = process.env.SECRET;


const SequelizeSessionStore = SequelizeStore( session.Store );
const store = new SequelizeSessionStore( {
    db: sequelize,
} );

export const sessionMiddleware = session( {
    secret: secret!, // Use a strong secret from your .env
    resave: false,
    saveUninitialized: false,
    store: store,
    cookie: {
        secure: process.env.NODE_ENV === 'production', // HTTPS only in production
        maxAge: 1000 * 60 * 60 * 24, // 1 day
    },
} );

store.sync(); // Sync session table with DB
