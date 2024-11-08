import { NextResponse } from 'next/server';
import { Quiz } from '../../../backend/models/index';

/**
 * Fetches all quiz titles and descriptions.
 * @returns {Promise<{quiz_id: number, title: string, description: string}[]>}
 */
export async function GET() {
    try {
        const quizzes = await Quiz.findAll();

        return NextResponse.json( quizzes );
    } catch ( error ) {
        return NextResponse.json( { error: 'Failed to fetch quiz data' }, { status: 500 } );
    }
}
