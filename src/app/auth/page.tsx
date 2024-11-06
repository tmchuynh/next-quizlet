// src/app/auth/page.tsx
"use client";

import { useState } from 'react';
import LoginForm from './../components/Login';
import RegisterForm from './../components/Register';

const AuthPage = () => {
    const [view, setView] = useState<'login' | 'register'>( 'login' );

    return (
        <div className="flex flex-col items-center space-y-4">
            <div className="space-x-4">
                <button onClick={() => setView( 'login' )} className="btn-primary">
                    Login
                </button>
                <button onClick={() => setView( 'register' )} className="btn-primary">
                    Register
                </button>
            </div>
            {view === 'login' ? (
                <LoginForm />
            ) : (
                <RegisterForm />
            )}
        </div>
    );
};

export default AuthPage;
