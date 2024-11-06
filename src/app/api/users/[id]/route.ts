import { NextResponse } from 'next/server';
import User from '../../../../backend/models/User';

export async function GET( req: Request, { params }: { params: { id: string; }; } ) {
    const userId = params.id;

    try {
        const user = await User.findOne( {
            where: { user_id: userId },
            attributes: ['id', 'username', 'email', 'firstName', 'lastName'],
        } );

        if ( !user ) {
            return NextResponse.json( { error: 'User not found' }, { status: 404 } );
        }

        return NextResponse.json( user );
    } catch ( error ) {
        console.error( error );
        return NextResponse.json( { error: 'Failed to fetch user' }, { status: 500 } );
    }
}
