// app/quiz/[slug]/difficulty/[level]/result/page.tsx

'use client';

import { useEffect, useState } from 'react';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';

const ResultPage = () => {
    const searchParams = useSearchParams();
    const router = useRouter();
    const pathname = usePathname();

    const segments = pathname.split( '/' ).filter( Boolean );
    const currentTitle = segments.length > 1 ? decodeURIComponent( segments[1] ) : null;
    const level = parseInt( segments[3], 10 );

    const [score, setScore] = useState<number>( 0 );
    const [totalQuestions, setTotalQuestions] = useState<number>( 0 );

    useEffect( () => {
        const fetchScore = async () => {
            const scoreId = searchParams.get( 'scoreId' );
            if ( !scoreId ) {
                console.error( 'Score ID is missing.' );
                return;
            }

            try {
                const res = await fetch( `/api/scores/${ scoreId }` );
                const data = await res.json();

                if ( res.ok ) {
                    setScore( data.score );
                    setTotalQuestions( data.total_questions );
                } else {
                    console.error( 'Failed to fetch score:', data.error );
                }
            } catch ( error ) {
                console.error( 'Error fetching score:', error );
            }
        };

        fetchScore();
    }, [] );

    return (
        <div className="flex flex-col min-h-full justify-center items-center px-6 py-4 lg:px-8 container border-4 border-gray-200 dark:border-gray-100 dark:bg-gray-800 dark:text-white rounded-2xl mx-auto my-4 w-full lg:w-11/12">
            <h1 className="text-center text-2xl py-5 font-extrabold dark:text-white">Quiz Completed!</h1>
            <p>Your Score: {score} out of {totalQuestions}</p>
            <button
                className="button text-white mx-3 flex-end bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-md px-5 py-2.5 text-center"
                onClick={() => router.push( '/quiz' )}
            >
                Return to Home
            </button>
        </div>
    );
};

export default ResultPage;
