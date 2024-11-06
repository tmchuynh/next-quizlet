// app/quiz/page.tsx
'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { QuizOption, ProgressItem } from '../types/index';

const QuizSelectionPage: React.FC = () => {
    const router = useRouter();
    const [quizOptions, setQuizOptions] = useState<QuizOption[]>( [] );
    const [quizProgress, setQuizProgress] = useState<ProgressItem[]>( [] );
    const [user, setUser] = useState<any>( null );
    const [isLoading, setIsLoading] = useState( true );

    useEffect( () => {
        const loadData = async () => {
            try {
                const response = await fetch( '/api/quiz-data' );
                if ( !response.ok ) throw new Error( 'Failed to fetch data' );
                const { quizzes, user, progress } = await response.json();

                setQuizOptions( quizzes );
                setQuizProgress( progress );
                setUser( user );
                setIsLoading( false );

                if ( !user ) {
                    router.push( '/login' );  // Redirect if no user data
                }
            } catch ( error ) {
                console.error( 'Error loading data:', error );
            }
        };

        loadData();
    }, [router] );


    const handleQuizSelection = ( quizId: string ) => {
        sessionStorage.setItem( 'quizId', quizId );
        const quizType = quizOptions.find( ( q ) => q.id === quizId )?.label || '';
        sessionStorage.setItem( 'quizType', quizType );

        // Navigate to the difficulty selection page
        router.push( `/quiz/${ quizId }/difficulty` );
    };

    const getButtonClass = ( quizId: string ): string => {
        const inProgress = quizProgress.some( ( item ) => item.quizId === quizId && item.currentQuestion > 0 );
        return inProgress ? 'bg-amber-700 hover:bg-amber-600' : 'bg-zinc-700 hover:bg-zinc-600';
    };

    if ( isLoading ) {
        return <p>Loading...</p>;
    }

    return (
        <div className="flex flex-col min-h-full justify-center items-center px-6 py-4 lg:px-8 container border-4 border-gray-200 dark:border-gray-100 dark:bg-gray-800 dark:text-white rounded-2xl mx-auto my-4 w-full lg:w-11/12">
            <h2 className="text-center text-4xl py-5 font-extrabold dark:text-white">Select a Quiz</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-3 w-full">
                {quizOptions.map( ( quiz ) => (
                    <button
                        key={quiz.id}
                        onClick={() => handleQuizSelection( quiz.id )}
                        className={`button text-white ${ getButtonClass( quiz.id ) } focus:ring-4 focus:outline-none font-medium rounded-lg text-md w-full sm:w-auto px-5 py-2.5 text-center`}
                    >
                        {quiz.label}
                    </button>
                ) )}
            </div>

            <div className="flex justify-center mt-5 space-x-4">
                <span className="flex items-center text-sm font-medium text-gray-900 dark:text-white">
                    <span className="flex w-4 h-4 bg-zinc-700 rounded-full mr-1.5 flex-shrink-0"></span>New
                </span>
                <span className="flex items-center text-sm font-medium text-gray-900 dark:text-white">
                    <span className="flex w-4 h-4 bg-amber-700 rounded-full mr-1.5 flex-shrink-0"></span>In Progress
                </span>
            </div>
        </div>
    );
};

export default QuizSelectionPage;
