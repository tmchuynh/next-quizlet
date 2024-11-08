// app/api/quizzes/[slug]/difficulty/[id]/questions/route.ts
import { NextResponse } from 'next/server';
import Question from '../../../../../../../backend/models/Question';
import Quiz from '../../../../../../../backend/models/Quiz';

export async function GET( { params }: { params: { slug: string; id: string; }; } ) {
    const { slug, id } = params;
    try {
        const quizTitle = slug.replaceAll( "%20", " " );
        const quizId = await Quiz.findOne( { where: { title: quizTitle } } );
        const questions = await Question.findAll( {
            where: {
                question_id: id,
                quiz_id: quizId
            }
        } );
        return NextResponse.json( { questions } );
    } catch ( error ) {
        return NextResponse.error();
    }
}
