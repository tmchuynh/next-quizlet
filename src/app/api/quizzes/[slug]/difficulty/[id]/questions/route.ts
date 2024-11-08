import { NextResponse } from 'next/server';
import Quiz from '../../../../../../../backend/models/Quiz';
import Question from '../../../../../../../backend/models/Question';

export async function GET( request, { params } ) {
    try {
        const { slug } = params;

        // Fetch the quiz to get the quiz_id
        const quiz = await Quiz.findOne( {
            where: { title: slug },
        } );

        if ( !quiz ) {
            return NextResponse.json( { error: 'Quiz not found.' }, { status: 404 } );
        }

        const quizId = quiz.quiz_id;

        const questions = await Question.findAll( {
            where: { quiz_id: quizId }
        } );

        return NextResponse.json( { questions } );
    } catch ( error ) {
        console.error( 'Error fetching questions:', error );
        return NextResponse.json( { error: 'Failed to fetch questions.' }, { status: 500 } );
    }
}
