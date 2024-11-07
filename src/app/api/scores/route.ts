import { NextApiRequest, NextApiResponse } from 'next';
import Score from '../../../backend/models/Score'; // Adjust the path as necessary

export default async function handler( req: NextApiRequest, res: NextApiResponse ) {
    const { userId } = req.query; // Assume `userId` is passed as a query parameter

    if ( !userId ) {
        return res.status( 400 ).json( { error: 'User ID is required' } );
    }

    try {
        const scores = await Score.findAll( {
            where: { user_id: userId },
            attributes: ['quiz_id'],
            group: ['quiz_id'],
        } );

        const quizNames = scores.map( ( score ) => score.quiz_id );
        res.status( 200 ).json( quizNames );
    } catch ( error ) {
        console.error( 'Error fetching quiz names:', error );
        res.status( 500 ).json( { error: 'Internal server error' } );
    }
}
