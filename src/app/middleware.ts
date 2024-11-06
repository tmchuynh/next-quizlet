// src/middleware.ts
import { NextRequest, NextResponse } from 'next/server';

export async function middleware( req: NextRequest ) {
    const { pathname } = req.nextUrl;

    // Allow static files and 404 pages to bypass middleware
    if ( pathname.startsWith( '/_next' ) || pathname === '/404' ) {
        return NextResponse.next();
    }

    // Custom 404 handling for API routes
    if ( pathname.startsWith( '/api' ) ) {
        // Check if the API route exists. If not, return a JSON 404 response.
        const response = NextResponse.next();
        response.headers.set( 'x-middleware-next', '1' ); // Allows non-existent API paths to return a 404
        return response;
    }

    // Check if user session exists via Auth0 cookie or redirect to login
    const authCookie = req.cookies.get( 'auth0.is.authenticated' );
    if ( !authCookie ) {
        const loginUrl = req.nextUrl.clone();
        loginUrl.pathname = '/login';
        return NextResponse.redirect( loginUrl );
    }

    // Continue with the requested route if authenticated
    return NextResponse.next();
}

// Specify routes to apply middleware to
export const config = {
    matcher: ['/dashboard/:path*', '/protected-path/:path*', '/api/:path*'],
};
