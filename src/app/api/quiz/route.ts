import Quiz from '../../../backend/models/Quiz';
import UserQuizProgress from '../../../backend/models/UserQuizProgress';
import { NextResponse } from 'next/server';

/**
 * Fetches all quiz titles and descriptions.
 * @returns {Promise<{quiz_id: number, title: string, description: string}[]>}
 */
export async function GET() {
    try {
        const quizzes = await Quiz.findAll();

        return NextResponse.json( quizzes );
    } catch ( error ) {
        console.error( 'Error fetching quiz data:', error );
        return NextResponse.json( { error: 'Failed to fetch quiz data' }, { status: 500 } );
    }
}

function uniq<T extends Quiz | number>( a: T[] ): T[] {
    const prims: { [key: string]: { [key: string]: boolean; }; } = {
        boolean: {},
        number: {},
        string: {},
    };
    const objs: T[] = [];

    return a.filter( ( item: T ) => {
        const type = typeof item;
        if ( type in prims ) {
            return prims[type].hasOwnProperty( String( item ) ) ? false : ( prims[type][String( item )] = true );
        } else {
            return objs.indexOf( item ) >= 0 ? false : objs.push( item );
        }
    } );
}

/**
 * Fetches quiz progress for a specific user.
 * @param userId - The user ID for which to fetch progress.
 * @returns {Promise<{quiz_id: number, current_question_index: number, score: number, completed: boolean, date_completed: Date | null}[]>}
 */
export async function getUserQuizProgress( userId: string ): Promise<UserQuizProgress[]> {
    try {
        const progress = await UserQuizProgress.findAll( {
            where: { user_id: userId },
            attributes: ['quiz_id', 'current_question_index', 'score', 'completed', 'date_completed'], // Only fetch necessary columns
        } );
        return progress;
    } catch ( error ) {
        console.error( 'Error fetching user quiz progress:', error );
        throw new Error( 'Failed to fetch quiz progress' );
    }
}
