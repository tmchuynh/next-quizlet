// app/api/quizzes/[quizId]/questions/route.ts
import { NextResponse } from 'next/server';
import { Answer, Question, Quiz } from '../../../../../../../backend/models/';

export async function GET(
    request: Request, response: Response
) {

    console.log( response );
    try {
        console.log( 'Fetching quiz ID from request URL:', request.url );

        console.log( `Fetching questions for quiz "${ title }" (quizId: ${ quizId })` );

        const questions = await Question.findAll( {
            where: { quiz_id: quizId },
            include: [{ model: Answer, as: 'answers' }],
        } );

        return NextResponse.json( { questions } );
    } catch ( error ) {
        console.error( 'Error fetching questions:', error );
        return NextResponse.json( { error: 'Failed to fetch questions.' }, { status: 500 } );
    }
}
