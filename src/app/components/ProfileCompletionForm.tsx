// src/components/ProfileCompletionForm.tsx

'use client';
import React, { useState } from 'react';

interface ProfileCompletionFormProps {
    onSubmit: ( data: { firstName: string; lastName: string; password: string; } ) => void;
}

const ProfileCompletionForm: React.FC<ProfileCompletionFormProps> = ( { onSubmit } ) => {
    const [firstName, setFirstName] = useState( '' );
    const [lastName, setLastName] = useState( '' );
    const [password, setPassword] = useState( '' );

    const handleSubmit = ( e: React.FormEvent ) => {
        e.preventDefault();
        onSubmit( { firstName, lastName, password } );
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <input
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={( e ) => setFirstName( e.target.value )}
                required
                className="input-field"
            />
            <input
                type="text"
                placeholder="Last Name"
                value={lastName}
                onChange={( e ) => setLastName( e.target.value )}
                required
                className="input-field"
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={( e ) => setPassword( e.target.value )}
                required
                className="input-field"
            />
            <button type="submit" className="submit-button">
                Complete Profile
            </button>
        </form>
    );
};

export default ProfileCompletionForm;
