// src/components/Register.tsx

import { useState } from 'react';
import { validateRegistrationForm, generateUniqueId } from '../helpers/authHelpers';

interface RegisterFormProps {
    onRegisterSuccess: () => void;
}

const RegisterForm: React.FC<RegisterFormProps> = ( { onRegisterSuccess } ) => {
    const [formData, setFormData] = useState( {
        firstName: '',
        lastName: '',
        email: '',
        username: '',
        password: '',
        confirmPassword: '',
    } );
    const [errorMessage, setErrorMessage] = useState( '' );

    const handleChange = ( e: React.ChangeEvent<HTMLInputElement> ) => {
        const { id, value } = e.target;
        setFormData( ( prevData ) => ( { ...prevData, [id]: value } ) );
    };

    const handleSubmit = async ( e: React.FormEvent ) => {
        e.preventDefault();
        const isValid = await validateRegistrationForm( setErrorMessage, formData );
        if ( isValid ) {
            // Simulate user registration in local storage
            const newUser = { id: generateUniqueId(), ...formData };
            const users = JSON.parse( localStorage.getItem( 'users' ) || '[]' );
            users.push( newUser );
            localStorage.setItem( 'users', JSON.stringify( users ) );
            setErrorMessage( '' );
            onRegisterSuccess();
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <input id="firstName" onChange={handleChange} placeholder="First Name" />
            <input id="lastName" onChange={handleChange} placeholder="Last Name" />
            <input id="email" onChange={handleChange} placeholder="Email" />
            <input id="username" onChange={handleChange} placeholder="Username" />
            <input id="password" type="password" onChange={handleChange} placeholder="Password" />
            <input id="confirmPassword" type="password" onChange={handleChange} placeholder="Confirm Password" />
            {errorMessage && <p className="text-red-500">{errorMessage}</p>}
            <button type="submit" className="btn-primary">Register</button>
        </form>
    );
};

export default RegisterForm;
