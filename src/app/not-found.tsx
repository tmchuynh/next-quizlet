// app/not-found.tsx
import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-white">
            <h1 className="text-6xl font-bold mb-4">404</h1>
            <p className="text-2xl mb-6">Oops! The page you’re looking for doesn’t exist.</p>
            <Link href="/" className="text-blue-500 hover:underline text-lg">
                Go back to Home
            </Link>
        </div>
    );
}
