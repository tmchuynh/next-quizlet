// app/api/quizzes/[quizSlug]/difficulty/[difficulty]/questions/route.ts

import { NextResponse } from 'next/server';
import Quiz from '../../../../../../../backend/models/Quiz';
import Question from '../../../../../../../backend/models/Question';
import Answer from '../../../../../../../backend/models/Answer';

export async function GET(
    { params }: { params: { quizSlug: string; difficulty: string; }; }
) {
    try {
        const { quizSlug, difficulty } = params;

        // Fetch the quiz based on the slug (you might need to adjust this based on your data)
        const quiz = await Quiz.findOne( {
            where: { title: quizSlug, level: parseInt( difficulty, 10 ) },
        } );

        if ( !quiz ) {
            return NextResponse.json( { error: 'Quiz not found.' }, { status: 404 } );
        }

        const questions = await Question.findAll( {
            where: { quiz_id: quiz.quiz_id },
            include: [{ model: Answer, as: 'answers' }],
        } );

        return NextResponse.json( { questions } );
    } catch ( error ) {
        console.error( 'Error fetching questions:', error );
        return NextResponse.json( { error: 'Failed to fetch questions.' }, { status: 500 } );
    }
}
