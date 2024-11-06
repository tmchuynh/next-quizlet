// src/middleware.ts
import { NextRequest, NextResponse } from 'next/server';
import { getSession } from '@auth0/nextjs-auth0';

export async function middleware( req: NextRequest ) {
    const res = NextResponse.next();

    // Avoid session checks for static files or 404 pages
    const { pathname } = req.nextUrl;
    if ( pathname.startsWith( '/_next' ) || pathname === '/404' ) {
        return res;
    }

    // Auth0 getSession call requires NextApiRequest, not NextRequest.
    const session = await getSession( req, res );

    // Redirect to login if no session exists
    if ( !session ) {
        const url = req.nextUrl.clone();
        url.pathname = '/auth';
        return NextResponse.redirect( url );
    }

    // Continue to the requested route if the user is authenticated
    return res;
}

export const config = {
    matcher: ['/dashboard/:path*', '/protected-path/:path*'], // Protected routes
};
