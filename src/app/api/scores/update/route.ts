// app/api/scores/update/route.ts

import { NextResponse } from 'next/server';
import { Score } from '../../../../backend/models/index';

export async function PUT( request: Request ) {
    try {
        const { score_id, increment } = await request.json();

        const score = await Score.findByPk( score_id );
        if ( !score ) {
            return NextResponse.json( { error: 'Score not found.' }, { status: 404 } );
        }

        score.score += increment;
        await score.save();

        return NextResponse.json( score );
    } catch ( error ) {
        console.error( 'Error updating score:', error );
        return NextResponse.json( { error: 'Failed to update score.' }, { status: 500 } );
    }
}
