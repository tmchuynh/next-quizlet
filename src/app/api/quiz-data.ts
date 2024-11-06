// pages/api/quiz-data.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from '@auth0/nextjs-auth0';
import User from '../../backend/models/User';
import Quiz from '../../backend/models/Quiz';
import Question from '../../backend/models/Question';
import Answer from '../../backend/models/Answer';
import UserQuizProgress from '../../backend/models/UserQuizProgress';
import UserActivity from '../../backend/models/UserActivity';
import Score from '../../backend/models/Score';

export default async function handler( req: NextApiRequest, res: NextApiResponse ) {
    const session = await getSession( req, res );
    if ( !session ) {
        return res.status( 401 ).json( { error: 'Unauthorized' } );
    }

    try {
        const userId = session.user.sub;

        // Fetch quizzes, user info, and progress data from the database
        const quizzes = await Quiz.findAll();
        const user = await User.findOne( { where: { user_id: userId } } );
        const progress = await UserQuizProgress.findAll( { where: { userId: user?.user_id } } );

        if ( !user ) {
            return res.status( 404 ).json( { error: 'User not found' } );
        }

        res.status( 200 ).json( { quizzes, user, progress } );
    } catch ( error ) {
        res.status( 500 ).json( { error: 'Failed to retrieve data' } );
    }
}
