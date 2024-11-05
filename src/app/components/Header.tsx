// app/components/Header.tsx
'use client';

import Link from 'next/link';
import { useUser } from '@auth0/nextjs-auth0/client';

const Header = () => {
    const { user } = useUser();

    return (
        <header className="p-4 bg-gray-900 text-white flex justify-between items-center">
            <h1 className="text-2xl">My App</h1>
            <nav>
                {user ? (
                    <>
                        <Link href="/profile" className="mr-4">Profile</Link>
                        <Link href="/api/auth/logout">Logout</Link>
                    </>
                ) : (
                    <Link href="/api/auth/login">Login</Link>
                )}
            </nav>
        </header>
    );
};

export default Header;
