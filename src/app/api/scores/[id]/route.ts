// app/api/scores/[scoreId]/route.ts

import { NextResponse } from 'next/server';
import { Score } from '../../../../backend/models';

export async function GET(
    request: Request,
    { params }: { params: { scoreId: string; }; }
) {
    try {
        const { scoreId } = params;

        const score = await Score.findAll( {
            where: { score_id: scoreId },
        } );

        if ( !score ) {
            return NextResponse.json( { error: 'Score not found.' }, { status: 404 } );
        }

        return NextResponse.json( score );
    } catch ( error ) {
        console.error( 'Error fetching score:', error );
        return NextResponse.json( { error: 'Failed to fetch score.' }, { status: 500 } );
    }
}
