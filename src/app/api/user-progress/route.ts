import { NextResponse } from 'next/server';
import UserQuizProgress from '../../../backend/models/UserQuizProgress';
import User from '../../../backend/models/User';  // Assuming there is a User model for the `users` table

// Export the POST method
export async function POST( request: Request ) {
    try {
        const body = await request.json();
        const { userId, quizId, currentQuestionIndex, score, completed } = body;

        console.log( "UserId: ", userId, ", Quiz ID: ", quizId, ", Current Question Index: ", currentQuestionIndex, ", Score: ", score, ", Completed: ", completed );

        // Validate required fields
        if ( !userId || !quizId ) {
            return NextResponse.json( { error: 'User ID and quiz ID are required' }, { status: 400 } );
        }

        // Check if user exists to avoid foreign key constraint issues
        const userExists = await User.findOne( {
            where: { user_id: userId },
        } );

        if ( !userExists ) {
            return NextResponse.json( { error: 'User not found' }, { status: 404 } );
        }

        // Process logic to create or update user progress
        const progress = await UserQuizProgress.findOne( {
            where: { user_id: userId, quiz_id: quizId },
        } );

        if ( progress ) {
            await progress.update( { current_question_index: currentQuestionIndex, score, completed } );
            return NextResponse.json( { message: 'Progress updated successfully' } );
        } else {
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

        // Return specific error if it’s a foreign key constraint issue
        if ( error.code === 'ER_NO_REFERENCED_ROW_2' ) {
            return NextResponse.json( { error: 'Invalid user ID or quiz ID reference' }, { status: 400 } );
        }

        return NextResponse.json( { error: 'Internal Server Error' }, { status: 500 } );
    }
}
