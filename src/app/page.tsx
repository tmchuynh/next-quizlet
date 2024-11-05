// app/page.tsx
"use client"; // Enables client-side behavior for this file

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
    const router = useRouter();

    useEffect( () => {
        router.push( '/auth' ); // Redirect to /auth
    }, [router] );

    return null; // Or add fallback content if needed
}
