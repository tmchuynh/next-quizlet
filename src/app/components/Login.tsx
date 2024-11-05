// src/components/Login.tsx

import { useState } from 'react';

interface LoginFormProps {
    onLoginSuccess: () => void;
}

const LoginForm: React.FC<LoginFormProps> = ( { onLoginSuccess } ) => {
    const [loginData, setLoginData] = useState( { username: '', password: '' } );
    const [errorMessage, setErrorMessage] = useState( '' );

    const handleChange = ( e: React.ChangeEvent<HTMLInputElement> ) => {
        const { id, value } = e.target;
        setLoginData( ( prevData ) => ( { ...prevData, [id]: value } ) );
    };

    const handleSubmit = ( e: React.FormEvent ) => {
        e.preventDefault();
        const users = JSON.parse( localStorage.getItem( 'users' ) || '[]' );
        const user = users.find(
            ( u: { username: string; password: string; } ) =>
                u.username === loginData.username && u.password === loginData.password
        );

        if ( user ) {
            onLoginSuccess();
        } else {
            setErrorMessage( "Invalid username or password." );
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <input id="username" onChange={handleChange} placeholder="Username" />
            <input id="password" type="password" onChange={handleChange} placeholder="Password" />
            {errorMessage && <p className="text-red-500">{errorMessage}</p>}
            <button type="submit" className="btn-primary">Login</button>
        </form>
    );
};

export default LoginForm;
