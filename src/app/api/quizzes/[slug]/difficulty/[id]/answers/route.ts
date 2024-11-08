import { NextResponse } from 'next/server';
import Answer from '../../../../../../../backend/models/Answer';

export async function GET( request: Request, { params }: { params: { id: string; }; } ) {
    try {
        const { id } = params;

        // Fetch answers for the given question_id
        const answers = await Answer.findAll( {
            where: { question_id: id },
        } );

        if ( !answers || answers.length === 0 ) {
            return NextResponse.json( { error: 'Answers not found.' }, { status: 404 } );
        }

        return NextResponse.json( { answers } );
    } catch ( error ) {
        console.error( 'Error fetching answers:', error );
        return NextResponse.json( { error: 'Failed to fetch answers.' }, { status: 500 } );
    }
}
