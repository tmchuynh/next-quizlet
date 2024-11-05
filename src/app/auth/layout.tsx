// app/auth/layout.tsx
import React from "react";

export default function AuthLayout( {
    children,
    register,
    login,
}: {
    children: React.ReactNode;
    register: React.ReactNode;
    login: React.ReactNode;
} ) {
    return (
        <div>
            <header>
                <h1>Auth Section</h1>
            </header>
            <main>
                {children}
                <section>
                    <aside>{register}</aside>
                    <aside>{login}</aside>
                </section>
            </main>
        </div>
    );
}
