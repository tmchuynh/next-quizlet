// src/app/complete-profile/page.tsx
'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import ProfileCompletionForm from './../components/ProfileCompletionForm';

const CompleteProfilePage = () => {
    const router = useRouter();

    const handleCompleteProfile = async ( data: { firstName: string; lastName: string; password: string; } ) => {
        const userId = sessionStorage.getItem( 'userId' ); // assuming user ID is stored in session storage

        const response = await fetch( '/api/complete-profile', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify( { ...data, userId } ),
        } );

        if ( response.ok ) {
            router.push( '/dashboard' );
        } else {
            console.error( 'Profile completion failed' );
        }
    };

    return (
        <div className="complete-profile-page">
            <h2>Complete Your Profile</h2>
            <ProfileCompletionForm onSubmit={handleCompleteProfile} />
        </div>
    );
};

export default CompleteProfilePage;
