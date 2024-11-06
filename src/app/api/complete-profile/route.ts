// src/app/api/complete-profile/route.ts
import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcrypt';
import User from '../../../backend/models/User';

export async function POST( req: NextRequest ) {
    const { userId, firstName, lastName, password } = await req.json();

    try {
        const user = await User.findByPk( userId );
        if ( !user ) {
            return NextResponse.json( { message: 'User not found' }, { status: 404 } );
        }

        // Update user profile with completed data
        user.first_name = firstName;
        user.last_name = lastName;
        user.password_hash = await bcrypt.hash( password, 10 );

        await user.save();

        return NextResponse.json( { message: 'Profile completed successfully' }, { status: 200 } );
    } catch ( error ) {
        console.error( 'Error completing profile:', error );
        return NextResponse.json( { message: 'Internal server error' }, { status: 500 } );
    }
}
