// src/middleware.ts
import { NextRequest, NextResponse } from 'next/server';

export async function middleware( req: NextRequest ) {
    const { pathname } = req.nextUrl;

    // Allow static files, the 404 page, login page, and API routes to bypass middleware checks
    if ( pathname.startsWith( '/_next' ) || pathname === '/404' || pathname === '/login' ) {
        return NextResponse.next();
    }

    // Check if the request is an API route
    if ( pathname.startsWith( '/api/auth/' ) ) {
        // Custom handling for non-existent API routes
        try {
            // Attempt to fetch the API route to see if it exists
            const response = await fetch( new URL( pathname, req.url ), {
                method: req.method,
                headers: req.headers,
            } );
            if ( !response.ok ) {
                const html404 = `
                    <!DOCTYPE html>
                    <html lang="en">
                    <head>
                        <meta charset="UTF-8">
                        <meta name="viewport" content="width=device-width, initial-scale=1.0">
                        <title>404 - Page Not Found</title>
                        <style>
                            /* Inline styles based on not-found.module.css */
                            body {
                                font-family: "DM Serif Text", serif;
                                font-weight: 400;
                                font-style: normal;
                                display: flex;
                                align-items: center;
                                justify-content: center;
                                min-height: 100vh;
                                background-color: #2D3748;
                                color: white;
                            }

                            .not-found-container {
                                text-align: center;
                            }

                            .digit-container {
                                display: flex;
                                justify-content: center;
                                align-items: center;
                                margin-bottom: 20px;
                            }

                            .digit {
                                position: relative;
                                width: 90px;
                                height: 90px;
                                display: flex;
                                justify-content: center;
                                align-items: center;
                                font-size: 64px;
                                background-color: #3182ce;
                                color: white;
                                border-radius: 50%;
                                margin: 0 10px;
                                font-family: "Titan One", sans-serif;
                                font-weight: 400;
                                animation: roll 1.5s ease-out forwards;
                            }

                            .digit:first-child {
                                animation-delay: 0.3s;
                            }

                            .digit:nth-child(2) {
                                animation-delay: 0.6s;
                            }

                            .digit:last-child {
                                animation-delay: 0.9s;
                            }
                            
                            @keyframes roll {
                                0% {
                                    transform: translateY(100%);
                                }

                                20%,
                                80% {
                                    transform: translateY(0);
                                }

                                100% {
                                    transform: translateY(0);
                                }
                            }

                            .message {
                                font-size: 24px;
                                font-weight: 600;
                                font-family: "PT Sans Narrow", sans-serif;
                                margin-bottom: 16px;
                            }

                            .back-home-link {
                                padding: 10px 20px;
                                background-color: #4299e1;
                                color: white;
                                border-radius: 6px;
                                font-weight: 500;
                                text-decoration: none;
                                transition: background-color 0.3s ease;
                            }

                            .back-home-link:hover {
                                background-color: #0066cc;
                            }
                        </style>
                    </head>
                    <body>
                        <div class="not-found-container">
                            <div class="digit-container">
                                <span class="digit">4</span>
                                <span class="digit">0</span>
                                <span class="digit">4</span>
                            </div>
                            <p class="message">Oops! The page you're looking for doesn't exist.</p>
                            <a href="/" class="back-home-link">Go back to Home</a>
                        </div>
                    </body>
                    </html>
                    `;

                return new Response( html404, {
                    status: 404,
                    headers: { 'Content-Type': 'text/html' },
                } );
            }
        } catch ( error ) {
            // If the fetch fails, return a JSON error response as a fallback
            return NextResponse.json(
                { error: 'API route error' },
                { status: 500 }
            );
        }
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
