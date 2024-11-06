"use client";

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const AuthPage = () => {
    const router = useRouter();

    useEffect( () => {
        router.push( '/api/auth/login' );
    }, [router] );

    return null; // No UI elements, immediate redirection
};

export default AuthPage;
