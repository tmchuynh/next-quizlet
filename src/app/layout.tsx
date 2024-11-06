// src/app/layout.tsx
"use client";

import React from "react";
import "./styles.css";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import Header from "./components/Header";
import Head from "next/head";
import { NotFoundProvider, useNotFound } from "../context/NotFoundContext";

export default function RootLayout( {
    children,
}: {
    children: React.ReactNode;
} ) {
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
                        <MainContent children={children} />
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
