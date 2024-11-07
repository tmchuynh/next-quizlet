// src/app/api/scores/route.ts
import { NextResponse } from 'next/server';
import Score from '../../../backend/models/Score';
import Quiz from '../../../backend/models/Quiz';

export async function GET( req: Request ) {
    const { searchParams } = new URL( req.url );
    const userId = searchParams.get( 'userId' );

    if ( !userId ) {
        return NextResponse.json( { error: 'User ID is required' }, { status: 400 } );
    }

    try {
        const scores = await Score.findAll();

        if ( !scores.length ) {
            return NextResponse.json( { message: 'No scores found' }, { status: 404 } );
        }

        const formattedScores = scores.map( ( score ) => ( {
            score: score.score,
            totalQuestions: score.total_questions,
            quizDate: score.quiz_date,
        } ) );

        return NextResponse.json( formattedScores, { status: 200 } );
    } catch ( error ) {
        console.error( 'Error fetching scores:', error );
        return NextResponse.json( { error: 'Failed to fetch scores' }, { status: 500 } );
    }
}
