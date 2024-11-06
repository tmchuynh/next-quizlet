// src/app/(404)/layout.tsx
import React from 'react';

export default function NotFoundLayout( { children }: { children: React.ReactNode; } ) {
    return (
        <html>
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=DM+Serif+Text:ital@0;1&family=PT+Sans+Narrow:wght@400;700&family=Titan+One&display=swap" rel="stylesheet" />
            </head>
            <body>
                <div className="custom-404-layout">
                    <header>
                        <h2>Oops!</h2>
                    </header>
                    <main>{children}</main>
                    <footer>
                        <p>Need help? <a href="/">Return to homepage</a></p>
                    </footer>
                </div>
            </body>
        </html>
    );
}
