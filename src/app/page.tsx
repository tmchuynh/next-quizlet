"use client";

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useUser } from '@auth0/nextjs-auth0/client';

const AuthPage = () => {
    const router = useRouter();
    const { user, isLoading } = useUser();

    useEffect( () => {
        if ( isLoading ) return; // Wait until Auth0 finishes loading

        if ( user ) {
            // Redirect to the user's dashboard using their unique identifier
            router.push( `/${ user.sub }/dashboard` );
        } else {
            // If not logged in, direct to the login page
            router.push( '/api/auth/login' );
        }
    }, [router, user, isLoading] );

    return null; // No UI elements, immediate redirection
};

export default AuthPage;
