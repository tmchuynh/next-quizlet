// src/components/ProfileCompletionForm.tsx

import { useState } from 'react';

interface ProfileCompletionFormProps {
    onSubmit: ( data: { firstName: string; lastName: string; password: string; } ) => void;
}

const ProfileCompletionForm: React.FC<ProfileCompletionFormProps> = ( { onSubmit } ) => {
    const [profileData, setProfileData] = useState( {
        firstName: '',
        lastName: '',
        password: '', // Add password field for profile completion
    } );

    const handleChange = ( e: React.ChangeEvent<HTMLInputElement> ) => {
        const { id, value } = e.target;
        setProfileData( ( prevData ) => ( { ...prevData, [id]: value } ) );
    };

    const handleSubmit = ( e: React.FormEvent ) => {
        e.preventDefault();
        // Pass the form data to the onSubmit callback
        onSubmit( profileData );
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <input id="firstName" onChange={handleChange} value={profileData.firstName} placeholder="First Name" />
            <input id="lastName" onChange={handleChange} value={profileData.lastName} placeholder="Last Name" />
            <input
                id="password"
                type="password"
                onChange={handleChange}
                value={profileData.password}
                placeholder="Password"
            />
            <button type="submit" className="btn-primary">Complete Profile</button>
        </form>
    );
};

export default ProfileCompletionForm;
