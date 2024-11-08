// app/components/Header.tsx
'use client';

import Link from 'next/link';
import { useUser } from '@auth0/nextjs-auth0/client';
import "../styles.css";

const Header = () => {
    const { user } = useUser();

    return (
        <header className="p-4 bg-gray-900 text-white flex justify-between items-center">
            <h1 className="text-2xl col-span-9">My App</h1>
            <nav>
                {user ? (
                    <>
                        <Link className='p-7' href={`/${ user.sub }/dashboard`}>Profile</Link>
                        <Link className='p-7' href="/leaderboard">Leaderbord</Link>
                        <Link className='p-7' href="/quiz">Quiz</Link>
                        <Link className='p-7' href="/api/auth/logout">Logout</Link>
                    </>
                ) : (
                    <Link className='p-7' href="/api/auth/login">Login</Link>
                )}
            </nav>
        </header>
    );
};

export default Header;
