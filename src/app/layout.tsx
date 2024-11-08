// src/app/layout.tsx
"use client";

import React, { useEffect } from "react";
import "./styles.css";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import Header from "./components/Header";
import auth0 from 'auth0-js';
import dotenv from 'dotenv';
import Head from "next/head";
import { NotFoundProvider, useNotFound } from "../context/NotFoundContext";

export default function RootLayout( {
    children,
}: {
    children: React.ReactNode;
} ) {
    dotenv.config();

    const clientID = process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID || "";
    const domain = process.env.NEXT_PUBLIC_AUTH0_DOMAIN || "";
    const auth0Tenant = process.env.PUBLC_AUTH0_TENANT || "";
    const authorizationServer = {
        issuer: process.env.NEXT_PUBLIC_CUSTOM_DOMAIN || ""
    };

    console.log( `Client ID: ${ clientID }` );
    console.log( `Domain: ${ domain }` );
    console.log( `Auth0 Tenant: ${ auth0Tenant }` );
    console.log( `Authorization Server Issuer: ${ authorizationServer.issuer }` );

    useEffect( () => {
        const loadAuth0Script = () => {
            return new Promise<void>( ( resolve, reject ) => {
                if ( document.getElementById( "auth0-script" ) ) {
                    resolve(); // Script already loaded
                    return;
                }
                const script = document.createElement( "script" );
                script.id = "auth0-script";
                script.src = "https://cdn.auth0.com/js/auth0/9.18/auth0.min.js";
                script.async = true;
                script.onload = () => resolve();
                script.onerror = reject;
                document.head.appendChild( script );
            } );
        };

        loadAuth0Script()
            .then( () => {
                if ( window.auth0 ) {
                    const webAuth = new window.auth0.WebAuth( {
                        domain,
                        clientID,
                        redirectUri: `${ process.env.AUTH0_BASE_URL }/api/auth/callback`,
                        responseType: "token id_token",
                        scope: "openid profile email",
                        overrides: {
                            __tenant: "dev-gn623zdfoivws5w1",
                            __token_issuer: authorizationServer.issuer
                        },
                    } );

                    try {
                        webAuth.crossOriginAuthentication;
                    } catch ( error ) {
                        console.error( "Error executing crossOriginVerification:", error );
                    }
                } else {
                    console.error( "Auth0 script not loaded properly." );
                }
            } )
            .catch( ( error ) => {
                console.error( "Failed to load Auth0 script:", error );
            } );
    }, [domain, clientID] );

    return (
        <html lang="en">
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link
                    href="https://fonts.googleapis.com/css2?family=DM+Serif+Text:ital@0;1&family=PT+Sans+Narrow:wght@400;700&family=Titan+One&display=swap"
                    rel="stylesheet"
                />
                <title>My App</title>
            </Head>
            <body>
                <UserProvider>
                    <NotFoundProvider>
                        <MainContent>{children}</MainContent>
                    </NotFoundProvider>
                </UserProvider>
            </body>
        </html>
    );
}

// Separate main content with Header
const MainContent = ( {
    children,
}: {
    children: React.ReactNode;
} ) => {
    const { isNotFound } = useNotFound();
    return (
        <>
            {!isNotFound && <Header />}
            <main>{children}</main>
        </>
    );
};
