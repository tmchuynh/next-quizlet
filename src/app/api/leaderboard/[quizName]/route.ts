import { NextApiRequest, NextApiResponse } from 'next';
import Score from '../../../../backend/models/Score';
import Quiz from '../../../../backend/models/Quiz';

export default async function handler( req: NextApiRequest, res: NextApiResponse ) {
    const { quizName } = req.query;

    if ( !quizName ) {
        return res.status( 400 ).json( { error: 'Quiz name is required' } );
    }

    try {
        const scores = await Score.findAll( {
            include: [
                {
                    model: Quiz,
                    where: { title: quizName },
                    attributes: ['quiz_id', 'title', 'level'],
                },
            ],
        } );

        const leaderboardData = scores.map( ( score ) => ( {
            user_id: score.user_id,
            quiz_id: score.quiz_id,
            score: ( score.score / score.total_questions ) * 100,
            level: score.Quiz?.level,
            date: score.quiz_date,
        } ) );

        return leaderboardData;
    } catch ( error ) {
        console.error( 'Error fetching leaderboard data:', error );
        res.status( 500 ).json( { error: 'Internal server error' } );
    }
}