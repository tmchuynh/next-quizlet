// src/app/auth/page.tsx

"use client";

import { useState } from 'react';
import LoginForm from '../components/Login';
import RegisterForm from '../components/Register';
import { useUser } from '@auth0/nextjs-auth0/client';
import ProfileCompletionForm from '../components/ProfileCompletionForm';

const AuthPage = () => {
    const [view, setView] = useState<'login' | 'register'>( 'login' );
    const { user, error, isLoading } = useUser();

    if ( isLoading ) return <p>Loading...</p>;
    if ( error ) return <p>{error.message}</p>;

    const isProfileIncomplete = user && ( !user.given_name || !user.family_name );

    return (
        <div className="flex flex-col items-center space-y-4">
            <div className="space-x-4">
                <button onClick={() => setView( 'login' )} className="btn-primary">Login</button>
                <button onClick={() => setView( 'register' )} className="btn-primary">Register</button>
            </div>
            {isProfileIncomplete ? (
                <ProfileCompletionForm onSubmit={() => console.log( 'Profile completed' )} />
            ) : view === 'login' ? (
                <LoginForm onLoginSuccess={() => console.log( 'Logged in!' )} />
            ) : (
                <RegisterForm onRegisterSuccess={() => setView( 'login' )} />
            )}
        </div>
    );
};

export default AuthPage;
