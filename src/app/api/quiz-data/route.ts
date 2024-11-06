// src/app/api/quiz-data/route.ts
import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import User from '../../../backend/models/User';
import Quiz from '../../../backend/models/Quiz';
import UserQuizProgress from '../../../backend/models/UserQuizProgress';
import axios from 'axios';

export async function GET() {
    try {
        // Get the Auth0 session token from cookies
        const auth0Token = ( await cookies() ).get( 'auth0.is.authenticated' )?.value;

        // Ensure the token is available
        if ( !auth0Token ) {
            return NextResponse.json( { error: 'Unauthorized' }, { status: 401 } );
        }

        // Fetch user data from the Auth0 Management API
        const auth0UserResponse = await axios.get( `https://${ process.env.NEXT_PUBLIC_AUTH0_DOMAIN }/userinfo`, {
            headers: { Authorization: `Bearer ${ auth0Token }` },
        } );

        const auth0User = auth0UserResponse.data;
        const userId = auth0User.sub;

        // Fetch quizzes, user info, and progress data from the database
        const quizzes = await Quiz.findAll();
        const user = await User.findOne( { where: { user_id: userId } } );
        const progress = await UserQuizProgress.findAll( { where: { userId: user?.user_id } } );

        if ( !user ) {
            return NextResponse.json( { error: 'User not found' }, { status: 404 } );
        }

        return NextResponse.json( { quizzes, user, progress } );
    } catch ( error ) {
        console.error( 'Error retrieving quiz data:', error );
        return NextResponse.json( { error: 'Failed to retrieve data' }, { status: 500 } );
    }
}
