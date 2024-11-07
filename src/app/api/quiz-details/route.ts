// src/app/api/quiz-details/route.ts
import { NextResponse } from 'next/server';
import { QueryTypes } from 'sequelize';
import Quiz from '../../../backend/models/Quiz';
import sequelize from '../../../backend/config/database';

export async function GET( request: Request ) {
    const { searchParams } = new URL( request.url );
    const quizId = searchParams.get( 'quizId' );

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
        const levels = await sequelize.query(
            `SELECT DISTINCT level FROM questions WHERE quiz_id = :quizId ORDER BY level ASC`,
            {
                replacements: { quizId },
                type: QueryTypes.SELECT,
            }
        );

        return NextResponse.json( {
            quiz,
            levels: levels.map( ( lvl: any ) => lvl.level ),
        } );
    } catch ( error ) {
        console.error( 'Error fetching quiz details:', error );
        return NextResponse.json( { error: 'Internal Server Error' }, { status: 500 } );
    }
}
