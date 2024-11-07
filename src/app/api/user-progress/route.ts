import type { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse } from 'next/server';
import UserQuizProgress from '../../../backend/models/UserQuizProgress';

// Export the POST method
export async function POST( req: Request ) {
    try {
        const body = await req.json(); // Parse the request body
        const { userId, quizId, currentQuestionIndex, score, completed } = body;

        if ( !userId || !quizId ) {
            return NextResponse.json( { error: 'User ID and Quiz ID are required' }, { status: 400 } );
        }

        // Find existing progress
        const progress = await UserQuizProgress.findOne( {
            where: {
                user_id: userId,
                quiz_id: parseInt( quizId, 10 ),
            },
        } );

        if ( progress ) {
            // Update existing progress
            await progress.update( { current_question_index: currentQuestionIndex, score, completed } );
            return NextResponse.json( { message: 'Progress updated successfully', progress }, { status: 200 } );
        } else {
            // Create new progress
            const newProgress = await UserQuizProgress.create( {
                user_id: userId,
                quiz_id: parseInt( quizId, 10 ),
                current_question_index: currentQuestionIndex,
                score,
                completed,
            } );
            return NextResponse.json( { message: 'Progress created successfully', progress: newProgress }, { status: 201 } );
        }
    } catch ( error ) {
        console.error( 'Error handling user progress:', error );
        return NextResponse.json( { error: 'Internal Server Error' }, { status: 500 } );
    }
}
