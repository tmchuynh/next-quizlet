// src/components/Login.tsx

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useUser } from '@auth0/nextjs-auth0/client';

interface LoginFormProps {
    onLoginSuccess: () => void;
}

const LoginForm: React.FC<LoginFormProps> = ( { onLoginSuccess } ) => {
    const router = useRouter();
    const [loginData, setLoginData] = useState( { username: '', password: '' } );
    const [errorMessage, setErrorMessage] = useState( '' );

    const handleChange = ( e: React.ChangeEvent<HTMLInputElement> ) => {
        const { id, value } = e.target;
        setLoginData( ( prevData ) => ( { ...prevData, [id]: value } ) );
    };

    const handleAuth0Login = () => {
        router.push( '/api/auth/login' );
    };

    const handleSubmit = async ( e: React.FormEvent ) => {
        e.preventDefault();
        const users = JSON.parse( localStorage.getItem( 'users' ) || '[]' );
        const user = users.find(
            ( u: { username: string; password: string; } ) =>
                u.username === loginData.username && u.password === loginData.password
        );

        if ( user ) {
            onLoginSuccess();
        } else {
            setErrorMessage( 'Invalid username or password.' );
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input id="username" onChange={handleChange} placeholder="Username" />
                <input id="password" type="password" onChange={handleChange} placeholder="Password" />
                {errorMessage && <p className="text-red-500">{errorMessage}</p>}
                <button type="submit" className="btn-primary">Login</button>
            </form>
            <button onClick={handleAuth0Login} className="btn-primary mt-4">Login with Auth0</button>
        </div>
    );
};

export default LoginForm;
