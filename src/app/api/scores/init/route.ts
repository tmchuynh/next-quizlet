// app/api/scores/init/route.ts

import { NextResponse } from 'next/server';
import { Score } from '../../../../backend/models/index';

export async function POST( request: Request ) {
    try {
        const { user_id, quiz_id, total_questions, level } = await request.json();

        const existingScore = await Score.findOne( {
            where: { user_id, quiz_id, level },
        } );

        if ( existingScore ) {
            return NextResponse.json( { score_id: existingScore.score_id } );
        } else {
            const newScore = await Score.create( {
                user_id,
                quiz_id,
                score: 0,
                level,
                total_questions,
                quiz_date: new Date(),
            } );

            return NextResponse.json( { score_id: newScore.score_id } );
        }

    } catch ( error ) {
        console.error( 'Error initializing score:', error );
        return NextResponse.json( { error: 'Database insertion failed.' }, { status: 500 } );
    }
}
