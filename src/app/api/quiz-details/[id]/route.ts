// src/app/api/quiz-details/route.ts
import { NextResponse } from 'next/server';
import { QueryTypes } from 'sequelize';
import Quiz from '../../../../backend/models/Quiz';
import sequelize from '../../../../backend/config/database';

export async function GET( request: Request ) {
    const { searchParams } = new URL( request.url );
    const quizId = searchParams.get( 'quizId' );

    console.log( "QuizId: " + quizId );

    if ( !quizId ) {
        return NextResponse.json( { error: 'Quiz ID is required' }, { status: 400 } );
    }

    try {
        // Fetch the quiz details
        const quiz = await Quiz.findOne( {
            where: { quiz_id: quizId },
        } );

        if ( !quiz ) {
            return NextResponse.json( { error: 'Quiz not found' }, { status: 404 } );
        }

        // Fetch levels associated with the quiz
        const levels = await Quiz.findAndCountAll( {
            where: { quiz_id: quizId },
        } );

        console.log( 'Fetched quiz details:', quiz );

        return NextResponse.json( {
            quiz,
            levels.count
        } );
    } catch ( error ) {
        console.error( 'Error fetching quiz details:', error );
        return NextResponse.json( { error: 'Internal Server Error' }, { status: 500 } );
    }
}
