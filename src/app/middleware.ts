// middleware.ts
import { withAuth } from '@auth0/nextjs-auth0/edge';

export default withAuth( {
    secret: process.env.AUTH0_SECRET,
    pages: {
        signIn: '/auth', // Redirect unauthenticated users here
    },
} );
