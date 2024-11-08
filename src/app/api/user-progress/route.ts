import { NextResponse } from 'next/server';
import UserQuizProgress from '../../../backend/models/UserQuizProgress';
import { addUserToDatabase } from '../../../backend/controllers/userController';
import { Quiz, User } from '../../../backend/models/index';

export async function POST( request: Request ) {
    try {
        const body = await request.json();
        const { userId, quizId, currentQuestionIndex, score, completed } = body;

        // Validate required fields
        if ( !userId || !quizId ) {
            return NextResponse.json( { error: 'User ID and quiz ID are required' }, { status: 400 } );
        }

        // Check if the user exists
        let userExists = await User.findOne( {
            where: { user_id: userId },
        } );

        // If user doesn't exist, add the user to the database
        if ( !userExists ) {
            userExists = await addUserToDatabase( userId );
            if ( !userExists ) {
                return NextResponse.json( { error: 'User could not be created' }, { status: 500 } );
            }
        }

        // Check if user progress already exists
        const progress = await UserQuizProgress.findOne( {
            where: { user_id: userId, quiz_id: quizId },
        } );

        if ( progress ) {
            // Update existing progress
            await progress.update( {
                current_question_index: currentQuestionIndex,
                score,
                completed,
            } );
            return NextResponse.json( { message: 'Progress updated successfully', progress } );
        } else {
            // Create new progress entry
            const newProgress = await UserQuizProgress.create( {
                user_id: userId,
                quiz_id: quizId,
                current_question_index: currentQuestionIndex,
                score,
                completed,
            } );
            return NextResponse.json( { message: 'Progress created successfully', progress: newProgress } );
        }
    } catch ( error: any ) {
        console.error( 'Error processing user progress:', error );

        // Handle specific database errors if needed
        if ( error.code === 'ER_NO_REFERENCED_ROW_2' ) {
            return NextResponse.json( { error: 'Invalid user ID or quiz ID reference' }, { status: 400 } );
        }

        return NextResponse.json( { error: 'Internal Server Error' }, { status: 500 } );
    }
}


export async function GET( request: Request ) {
    const { searchParams } = new URL( request.url );
    const userId = searchParams.get( 'userId' );
    const title = searchParams.get( 'quizTitle' );

    console.log( "User ID:", userId );
    console.log( "Quiz Title:", title );

    if ( !userId || !title ) {
        return NextResponse.json( { error: 'User ID and quiz title are required' }, { status: 400 } );
    }

    try {
        const quiz = await Quiz.findOne( {
            where: { title },
        } );

        const quizId = quiz?.quiz_id;

        console.log( 'Quiz ID:', quizId );

        const progress = await UserQuizProgress.findAll( {
            where: {
                user_id: userId,
                quiz_id: quizId, // Ensure this matches your database schema
            },
        } );

        if ( !progress ) {
            return NextResponse.json( { error: 'Progress not found' }, { status: 404 } );
        }

        return NextResponse.json( progress );
    } catch ( error ) {
        console.error( 'Error fetching user progress:', error );
        return NextResponse.json( { error: 'Internal Server Error' }, { status: 500 } );
    }
}