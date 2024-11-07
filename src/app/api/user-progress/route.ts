// src/app/api/user-progress/route.ts
import { NextApiRequest, NextApiResponse } from 'next';
import UserQuizProgress from '../../../backend/models/UserQuizProgress';

export default async function handler( req: NextApiRequest, res: NextApiResponse ) {
    const { userId, quizId } = req.query;

    if ( !userId || !quizId ) {
        return res.status( 400 ).json( { error: 'User ID and Quiz ID are required' } );
    }

    try {
        const progress = await UserQuizProgress.findOne( {
            where: {
                user_id: userId as string,
                quiz_id: parseInt( quizId as string, 10 ),
            },
        } );

        res.status( 200 ).json( progress );
    } catch ( error ) {
        console.error( 'Error fetching user progress:', error );
        res.status( 500 ).json( { error: 'Failed to fetch user progress' } );
    }
}
