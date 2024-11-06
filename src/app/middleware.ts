// src/middleware.ts
import { NextRequest, NextResponse } from 'next/server';
import { getSession } from '@auth0/nextjs-auth0';

export async function middleware( req: NextRequest ) {
    const res = NextResponse.next();
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
    matcher: ['/dashboard/:path*', '/protected-path/:path*'], // Add protected routes here
};
