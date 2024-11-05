// app/[id]/dashboard/page.tsx

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import iro from '@jaames/iro';

// Define user profile type
interface UserProfile {
    id: string;
    username: string;
    email: string;
    firstName: string;
    lastName: string;
}

// Define the DashboardPage component
const DashboardPage: React.FC = () => {
    const router = useRouter();
    const { id } = router.query; // Get user ID from the URL
    const [userProfile, setUserProfile] = useState<UserProfile | null>( null );
    const [baseColor, setBaseColor] = useState( '#6a40d4' ); // Default color

    useEffect( () => {
        if ( id ) {
            loadUserProfile( id as string );
        }
    }, [id] );

    useEffect( () => {
        createContributionGrid( baseColor );
    }, [baseColor] );

    const loadUserProfile = ( userId: string ) => {
        const sessionUserId = sessionStorage.getItem( 'currentUserId' );
        if ( sessionUserId === userId ) {
            const username = sessionStorage.getItem( 'username' ) || '';
            const email = sessionStorage.getItem( 'email' ) || '';
            const firstName = sessionStorage.getItem( 'firstName' ) || '';
            const lastName = sessionStorage.getItem( 'lastName' ) || '';

            setUserProfile( { id: sessionUserId, username, email, firstName, lastName } );
        } else {
            // Redirect or show an error if the ID does not match the logged-in user
            console.error( "User ID mismatch or user not logged in" );
            router.push( '/login' ); // Or redirect as necessary
        }
    };

    return (
        <div className="dashboard-container flex flex-col items-center min-h-screen px-6 py-4 lg:px-8 bg-gray-800 text-white rounded-lg w-full lg:w-2/3">
            <h2 className="text-4xl font-extrabold mb-5">User Profile</h2>
            {userProfile && (
                <div className="profile-info space-y-4">
                    <p>ID: {userProfile.id}</p>
                    <p>Username: {userProfile.username}</p>
                    <p>Email: {userProfile.email}</p>
                    <p>First Name: {userProfile.firstName}</p>
                    <p>Last Name: {userProfile.lastName}</p>
                </div>
            )}
            <ColorPicker onColorChange={setBaseColor} />
            <div id="contributionGrid" className="mt-8"></div>
        </div>
    );
};

// Color Picker component using iro.js
const ColorPicker: React.FC<{ onColorChange: ( color: string ) => void; }> = ( { onColorChange } ) => {
    const pickerRef = React.useRef<HTMLDivElement>( null );

    useEffect( () => {
        const colorPicker = new iro.ColorPicker( pickerRef.current, {
            width: 200,
            color: '#6a40d4',
            handleRadius: 10,
            layout: [
                {
                    component: iro.ui.Slider,
                    options: {
                        sliderType: 'hue',
                    },
                },
            ],
        } );

        colorPicker.on( 'color:change', ( color ) => {
            onColorChange( color.hexString );
        } );

        return () => colorPicker.off( 'color:change' );
    }, [onColorChange] );

    return <div ref={pickerRef} className="color-picker mt-5"></div>;
};

// Function to create the contribution grid
const createContributionGrid = ( baseColor: string ) => {
    const gridContainer = document.getElementById( 'contributionGrid' );
    if ( !gridContainer ) return;

    const shades = generateColorShades( baseColor, 5 );
    gridContainer.innerHTML = ''; // Clear previous grid

    for ( let i = 0; i < 365; i++ ) {
        const cell = document.createElement( 'div' );
        const level = Math.floor( Math.random() * shades.length );
        cell.style.backgroundColor = shades[level];
        cell.className = 'w-4 h-4 m-1 rounded';

        cell.addEventListener( 'mouseenter', () => {
            showPopover( cell, level );
        } );
        cell.addEventListener( 'mouseleave', hidePopover );

        gridContainer.appendChild( cell );
    }
};

// Function to show the popover on hover
const showPopover = ( cell: HTMLElement, level: number ) => {
    const popover = document.createElement( 'div' );
    popover.className = 'popover';
    popover.textContent = `${ level } contributions`;
    document.body.appendChild( popover );

    cell.addEventListener( 'mousemove', ( event ) => {
        popover.style.top = `${ event.clientY + 10 }px`;
        popover.style.left = `${ event.clientX + 10 }px`;
    } );
};

// Function to hide the popover on mouse leave
const hidePopover = () => {
    document.querySelectorAll( '.popover' ).forEach( ( popover ) => popover.remove() );
};

// Generate color shades
const generateColorShades = ( baseColor: string, levels: number ): string[] => {
    const shades = [];
    for ( let i = 0; i < levels; i++ ) {
        const intensity = Math.floor( 255 - ( i * 255 ) / ( levels - 1 ) ).toString( 16 ).padStart( 2, '0' );
        shades.push( `#${ intensity }${ intensity }${ intensity }` );
    }
    return shades;
};

export default DashboardPage;
