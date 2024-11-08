// app/api/quizzes/[slug]/route.ts

import { NextResponse } from 'next/server';
import { Quiz } from '../../../../backend/models';

export async function GET(
    request: Request,
    { params }: { params: { slug: string; }; }
) {
    try {
        const { slug } = params;

        const quiz = await Quiz.findOne( {
            where: { title: slug },
        } );

        if ( !quiz ) {
            return NextResponse.json( { error: 'Quiz not found.' }, { status: 404 } );
        }

        return NextResponse.json( quiz );
    } catch ( error ) {
        console.error( 'Error fetching quiz:', error );
        return NextResponse.json( { error: 'Failed to fetch quiz.' }, { status: 500 } );
    }
}
