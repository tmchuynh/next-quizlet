// app/api/questions/[id]/answers/route.ts
import { NextResponse } from 'next/server';
import Answer from '../../../../../../../backend/models/Answer';

export async function GET(
    request: Request,
    { params }: { params: { id: string; }; }
) {
    try {
        const { id } = params;

        const answers = await Answer.findAll( {
            where: { question_id: id },
        } );

        return NextResponse.json( { answers } );
    } catch ( error ) {
        console.error( 'Error fetching answers:', error );
        return NextResponse.json( { error: 'Failed to fetch answers.' }, { status: 500 } );
    }
}
