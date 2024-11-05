// app/[id]/dashboard/page.tsx
'use client';

import React, { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { useUser } from '@auth0/nextjs-auth0/client';
import ColorPickerComponent from '../../components/ColorPicker'; // Updated import
import { formatDate } from "../../utils/formatUtils";


// Define user profile type
interface UserProfile {
    id: string;
    username: string;
    email: string;
    firstName: string;
    lastName: string;
}

const DashboardPage: React.FC = () => {
    const { user, isLoading } = useUser();
    const router = useRouter();
    const params = useParams();
    const [userProfile, setUserProfile] = useState<UserProfile | null>( null );
    const [baseColor, setBaseColor] = useState( '#6a40d4' );

    useEffect( () => {
        if ( !isLoading ) {
            if ( !user || user.sub !== params.id ) {
                router.push( '/auth' ); // Redirect to auth if unauthorized
            } else {
                loadUserProfile();
            }
        }
    }, [isLoading, user, params.id] );

    useEffect( () => {
        createContributionGrid( baseColor );
    }, [baseColor] );

    const loadUserProfile = () => {
        const username = sessionStorage.getItem( 'username' ) || '';
        const email = sessionStorage.getItem( 'email' ) || '';
        const firstName = sessionStorage.getItem( 'firstName' ) || '';
        const lastName = sessionStorage.getItem( 'lastName' ) || '';

        setUserProfile( { id: user!.sub!, username, email, firstName, lastName } );
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
            {/* Use the imported ColorPicker component */}
            <ColorPickerComponent onColorChange={setBaseColor} />
            <div id="contributionGrid" className="grid grid-cols-4 m-auto p-5 col-span justify-items-center"></div>
        </div>
    );
};

export const updateContributionGridColorTheme = ( baseColor: string ): void => {
    const gridContainer = document.getElementById( 'contributionGrid' );
    if ( gridContainer ) {
        gridContainer.remove(); // Remove the previous grid container if it exists
    }
    createContributionGrid( baseColor ); // Re-create the grid with the new color
};

// Function to create the contribution grid
const createContributionGrid = ( baseColor: string ) => {
    const gridContainer = document.getElementById( 'contributionGrid' );
    if ( !gridContainer ) return;

    const shades = generateColorShades( baseColor, 5 );
    gridContainer.innerHTML = ''; // Clear previous grid
    const currentDate = new Date(); // Get the current date
    currentDate.setDate( currentDate.getDate() + 7 );

    // Create a map to hold months and their respective weeks
    const months: { [key: string]: HTMLElement; } = {};
    const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    for ( let i = 0; i < 365; i++ ) {
        const dateForCell = new Date( currentDate );
        dateForCell.setDate( currentDate.getDate() - ( 364 - i ) ); // Calculate date
        const dateString = formatDate( dateForCell ); // Format: mm/dd/yyyy

        // Calculate month-year key for grouping
        const monthYear = `${ dateForCell.getFullYear() }-${ dateForCell.getMonth() + 1 }`;


        const cell = document.createElement( 'div' );
        cell.classList.add(
            'w-4',
            'h-4',
            "m-1",
            "aspect-square",
            'rounded',
            'transition-transform',
            'duration-200',
            'ease-in-out',
            'transform'
        );
        const level = Math.floor( Math.random() * shades.length );
        // const level = getContributionLevelForDate( dateString );
        cell.setAttribute( "data-popover-target", `popover-${ i }-${ level }` );
        cell.style.backgroundColor = shades[level];

        // Set the background color based on the level
        if ( level > 0 ) {
            cell.style.backgroundColor = shades[level]; // Use the appropriate shade
        } else {
            cell.style.backgroundColor = '#e0e0e0'; // Default color for no contributions
        }

        // Add date as a class
        cell.classList.add( `date-${ dateString }` );
        cell.classList.add( `level-${ level }` );

        cell.addEventListener( 'mouseenter', () => showPopover( cell, level ) );
        cell.addEventListener( 'mouseleave', hidePopover );

        // Check if the month container already exists
        if ( !months[monthYear] ) {
            // Create a new month container if it doesn't exist
            const monthContainer = document.createElement( 'div' );
            monthContainer.classList.add( 'month-container', 'flex', 'flex-col', 'm-5', "align-center" );

            const monthTitle = document.createElement( 'h3' );
            monthTitle.classList.add( 'text-lg', 'font-bold', 'mb-2', 'dark:text-white', "text-center" );
            monthTitle.textContent = `${ monthNames[dateForCell.getMonth()] } ${ dateForCell.getFullYear() }`;
            monthContainer.appendChild( monthTitle );

            // Create a container for the weeks in this month
            const weekContainer = document.createElement( 'div' );
            weekContainer.classList.add( 'week-container', 'flex', 'flex-col' );

            monthContainer.appendChild( weekContainer );
            months[monthYear] = monthContainer;

            // Append month container to the grid
            gridContainer.appendChild( monthContainer );
        }

        // Append the cell to the week container
        const weekContainer = months[monthYear].querySelector( '.week-container' );
        const currentWeekNumber = getDateWeek( dateForCell );
        let weekDiv = weekContainer?.querySelector( `.week-${ currentWeekNumber }` );

        // Create a new week div if it doesn't exist
        if ( !weekDiv ) {
            weekDiv = document.createElement( 'div' );
            weekDiv.classList.add( 'week', `week-${ currentWeekNumber }`, 'flex', 'flex-row' );
            weekContainer?.appendChild( weekDiv );
        }

        weekDiv.appendChild( cell );
    }

    const container = document.querySelector( '.dashboard-container' )!;
    container.appendChild( gridContainer ); // Append the grid to the specified container
};

function getDateWeek( date: Date | undefined ): number {
    const currentDate: Date = ( typeof date === 'object' ) ? date : new Date();
    const januaryFirst: Date = new Date( currentDate.getFullYear(), 0, 1 );
    const daysToNextMonday: number = ( januaryFirst.getDay() === 1 ) ? 0 : ( 7 - januaryFirst.getDay() ) % 7;
    const nextMonday: Date = new Date( currentDate.getFullYear(), 0, januaryFirst.getDate() + daysToNextMonday );

    return ( currentDate < nextMonday ) ? 52 : ( currentDate > nextMonday ? Math.ceil( ( currentDate.getTime() - nextMonday.getTime() ) / ( 24 * 3600 * 1000 ) / 7 ) : 1 );
}

// Function to generate a random contribution level based on stored quiz scores
// const getContributionLevelForDate = ( date: string ): number => {
//     const currentUserId = sessionStorage.getItem( "currentUserId" );
//     const userScores = JSON.parse( localStorage.getItem( `quizScores_${ currentUserId }` ) || "[]" );

//     const matchingScores = userScores.filter( ( score: Score ) => {
//         const searchingDate = formatDate( score.date );
//         return searchingDate === date; // Ensure we return the boolean expression
//     } );

//     return matchingScores.length; // Return the count of scores for the date
// };

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
    const rgb = hexToRgb( baseColor );
    const { c, m, y, k } = rgbToCmyk( rgb.r, rgb.g, rgb.b );
    const shades: string[] = [];

    const maxLevels = 20; // Maximum levels to create a threshold for adjustment
    const adjustmentFactor = levels < maxLevels ? ( maxLevels - levels ) / maxLevels : 0;

    for ( let i = 0; i < levels; i++ ) {
        const factor = i / ( levels + 1 ); // 0 to 1

        // Adjust the color mixing based on the number of levels and the adjustment factor
        const newK = Math.min( k + factor * ( 0.5 + adjustmentFactor ), 1.5 ); // Increase blackness for darker shades
        const newC = Math.max( c - factor * ( 1.5 - adjustmentFactor ), 0 ); // Decrease cyan for lighter shades
        const newM = Math.max( m - factor * ( 0.5 - adjustmentFactor ), 0 ); // Decrease magenta for lighter shades
        const newY = Math.max( y - factor * ( 1.5 - adjustmentFactor ), 0 ); // Decrease yellow for lighter shades

        const { r, g, b } = cmykToRgb( newC, newM, newY, newK );
        shades.push( rgbToHex( r, g, b ) ); // Convert RGB back to HEX
    }

    return shades;
};

// Function to convert hex to RGB
const hexToRgb = ( hex: string ): { r: number; g: number; b: number; } => {
    const bigint = parseInt( hex.slice( 1 ), 16 );
    return {
        r: ( bigint >> 16 ) & 255,
        g: ( bigint >> 8 ) & 255,
        b: bigint & 255,
    };
};

// Function to convert RGB to hex
const rgbToHex = ( r: number, g: number, b: number ): string => {
    const hex = ( ( 1 << 24 ) + ( r << 16 ) + ( g << 8 ) + b ).toString( 16 ).slice( 1 );
    return `#${ hex }`;
};

// Function to convert RGB to CMYK
const rgbToCmyk = ( r: number, g: number, b: number ): { c: number; m: number; y: number; k: number; } => {
    const rNorm = r / 255;
    const gNorm = g / 255;
    const bNorm = b / 255;

    const k = 1 - Math.max( rNorm, gNorm, bNorm );
    const c = ( 1 - rNorm - k ) / ( 1 - k ) || 0;
    const m = ( 1 - gNorm - k ) / ( 1 - k ) || 0;
    const y = ( 1 - bNorm - k ) / ( 1 - k ) || 0;

    return { c, m, y, k };
};

// Function to convert CMYK to RGB
const cmykToRgb = ( c: number, m: number, y: number, k: number ): { r: number; g: number; b: number; } => {
    const r = Math.round( 255 * ( 1 - c ) * ( 1 - k ) );
    const g = Math.round( 255 * ( 1 - m ) * ( 1 - k ) );
    const b = Math.round( 255 * ( 1 - y ) * ( 1 - k ) );
    return { r, g, b };
};

export default { DashboardPage, updateContributionGridColorTheme };
