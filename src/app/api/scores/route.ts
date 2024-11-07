import { NextApiRequest, NextApiResponse } from 'next';
import Score from '../../../backend/models/Score'; // Adjust the path as necessary

export default async function handler( req: NextApiRequest, res: NextApiResponse ) {
    if ( req.method !== 'GET' ) {
        return res.status( 405 ).json( { error: 'Method Not Allowed' } );
    }

    const { userId } = req.query;

    if ( !userId ) {
        return res.status( 400 ).json( { error: 'User ID is required' } );
    }

    try {
        const scores = await Score.findAll( {
            where: { user_id: userId },
            attributes: ['quiz_id'],
        } );

        const quizNames = scores.map( ( score ) => score.quiz_id );
        return quizNames;
    } catch ( error ) {
        console.error( 'Error fetching quiz names:', error );
        res.status( 500 ).json( { error: 'Internal server error' } );
    }
}
