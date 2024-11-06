import React from "react";
import './styles.css';
import { UserProvider } from '@auth0/nextjs-auth0/client';
import Header from './components/Header';
import Script from 'next/script';

export const metadata = {
    title: 'Your App Title',
    description: 'Description of your app',
};


export default function RootLayout( {
    children,
}: {
    children: React.ReactNode;
} ) {
    return (
        <html lang="en">
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=DM+Serif+Text:ital@0;1&family=PT+Sans+Narrow:wght@400;700&family=Titan+One&display=swap" rel="stylesheet" />
                <title>My App</title>
            </head>
            <body>
                <UserProvider>
                    <Header />
                    {children}
                </UserProvider>
            </body>
        </html>
    );
}
