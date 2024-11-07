import { NextResponse } from 'next/server';
import UserQuizProgress from '../../../backend/models/UserQuizProgress';

// Export the POST method
export async function POST( request: Request ) {
    try {
        const body = await request.json();
        const { userId, quizId, currentQuestionIndex, score, completed } = body;

        // Validate required fields
        if ( !userId || !quizId ) {
            return NextResponse.json( { error: 'User ID and quiz ID are required' }, { status: 400 } );
        }

        // Process logic to create or update user progress
        const progress = await UserQuizProgress.findOne( {
            where: { user_id: userId },
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
    } catch ( error ) {
        console.error( 'Error processing user progress:', error );
        return NextResponse.json( { error: 'Internal Server Error' }, { status: 500 } );
    }
}