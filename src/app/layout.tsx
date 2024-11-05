import React from "react";
import './styles.css';


export default function RootLayout( {
    children,
}: {
    children: React.ReactNode;
} ) {
    return (
        <html lang="en">
            <head>
                <title>My App</title>
            </head>
            <body>
                {children}
            </body>
        </html>
    );
}
