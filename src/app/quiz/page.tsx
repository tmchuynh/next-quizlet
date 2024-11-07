// app/quiz/page.tsx
'use client';

import React, { useEffect, useState } from 'react';
import { useUser } from '@auth0/nextjs-auth0/client';
import { useRouter } from 'next/navigation';
import { QuizOption, ProgressItem, Quiz } from '../types/index';

const QuizSelectionPage: React.FC = () => {
    const router = useRouter();
    const [quizOptions, setQuizOptions] = useState<Quiz[]>( [] );
    const [quizProgress] = useState<ProgressItem[]>( [] );
    const [quizNames, setQuizNames] = useState<string[]>( [] );
    const { user, isLoading } = useUser();

    useEffect( () => {
        const fetchQuizNames = async () => {
            if ( user && user.sub ) {
                try {
                    const response = await fetch( "/api/quiz" );
                    if ( response.ok ) {
                        const data: { title: string; }[] = await response.json();
                        console.log( 'Fetched quiz names:', data );

                        // Extract unique quiz titles using reduce
                        const uniqueTitles = data
                            .map( quiz => quiz.title )
                            .filter( ( title, index, self ) => self.indexOf( title ) === index );

                        console.log( 'Filtered quiz titles:', uniqueTitles );
                        setQuizNames( uniqueTitles );
                    } else {
                        console.error( 'Failed to fetch quiz names: HTTP status', response.status );
                    }
                } catch ( error ) {
                    console.error( 'Error fetching quiz names:', error );
                }
            }
        };

        fetchQuizNames();
    }, [user] );

    const handleQuizSelection = async ( quizName: string ) => {
        const quizId = quizOptions.find( ( quiz ) => quiz.title === quizName )?.quiz_id || '';

        try {
            const response = await fetch( '/api/user-progress', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify( {
                    userId: user?.sub,
                    quizId: quizId,
                    currentQuestionIndex: 0,
                    score: 0,
                    completed: false,
                } ),
            } );


            if ( !response.ok ) {
                throw new Error( 'Failed to update quiz progress' );
            }
        } catch ( error ) {
            console.error( 'Error updating quiz progress:', error );
        }

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
                {quizNames.map( ( quizName, index ) => (
                    <button
                        key={index}
                        onClick={() => handleQuizSelection( quizName )}
                        className={`button text-white ${ getButtonClass( quizName ) } focus:ring-4 focus:outline-none font-medium rounded-lg text-md w-full sm:w-auto px-5 py-2.5 text-center`}
                    >
                        {quizName}
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
