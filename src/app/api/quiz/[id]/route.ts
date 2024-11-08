import { NextResponse } from 'next/server';
import { Quiz } from '../../../../backend/models';

export async function GET( request: Request, props: { params: Promise<{ quizId: number; }>; } ) {

    const params = await props.params;
    try {
        const { quizId } = params;

        console.log( `Fetching quiz with ID: ${ quizId }` );

        // Fetch the quiz using the provided quizId
        // const quiz = await Quiz.findOne( {
        //     where: { quiz_id: quizId },
        // } );

        const quiz = Quiz.findByPk( quizId );

        if ( !quiz ) {
            return NextResponse.json( { error: 'Quiz not found.' }, { status: 404 } );
        }

        // If the quiz is found, return it as a JSON response
        return NextResponse.json( quiz );
    } catch ( error ) {
        console.error( 'Error fetching quiz:', error );
        return NextResponse.json( { error: 'Failed to fetch quiz.' }, { status: 500 } );
    }
}