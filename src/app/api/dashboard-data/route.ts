// pages/api/dashboard-data.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { getSession, withApiAuthRequired, Session } from '@auth0/nextjs-auth0';
import User from '../../..//backend/models/User';  // Make sure this path points to your User model

export default withApiAuthRequired( async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    // Retrieve session info from Auth0
    const session = await getSession( req, res ) as Session;
    if ( !session || !session.user ) {
        return res.status( 401 ).json( { error: 'Unauthorized' } );
    }

    const userId = req.query.userId as string;
    if ( userId !== session.user.sub ) {
        return res.status( 403 ).json( { error: 'Forbidden' } );
    }

    try {
        // Fetch the dashboard data for the user
        const dashboardData = await fetchUserDashboardData( userId );
        return res.status( 200 ).json( dashboardData );
    } catch ( error ) {
        console.error( 'Error retrieving dashboard data:', error );
        return res.status( 500 ).json( { error: 'Failed to retrieve dashboard data' } );
    }
} );

async function fetchUserDashboardData(
    userId: string
): Promise<{ id: string; }> {
    // Query the User model for the user data
    const user = await User.findOne( {
        where: { user_id: userId },
        attributes: ['id'],
    } );

    if ( !user ) {
        throw new Error( `User with ID ${ userId } not found` );
    }

    // Return user data as dashboard data
    return {
        id: user.user_id,
    };
}
