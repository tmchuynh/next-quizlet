'use client';

import React, { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { QuizOption, ProgressItem, Quiz } from '../../../types/index';
import { useUser } from '@auth0/nextjs-auth0/client';

interface QuizLevel {
    quiz_id: number;
    title: string;
    description: string;
    level: number;
}

const DifficultySelectionPage: React.FC = () => {
    const [isMounted, setIsMounted] = useState( false );
    const [quizData, setQuizData] = useState<QuizLevel[]>( [] );
    const [userProgress, setUserProgress] = useState<ProgressItem | null>( null );

    const router = useRouter();
    const pathname = usePathname();
    const segments = pathname.split( '/' ).filter( Boolean );
    let currentTitle = segments.length > 1 ? decodeURIComponent( segments[1] ) : null;

    const { user } = useUser();

    useEffect( () => {
        setIsMounted( true );
    }, [] );

    useEffect( () => {
        if ( currentTitle ) {
            fetchQuizDataByTitle( currentTitle );
        }
    }, [currentTitle] );

    useEffect( () => {
        if ( user && currentTitle ) {
            fetchUserProgress();
        }
    }, [user, currentTitle] );

    const fetchQuizDataByTitle = async ( title: string ) => {
        try {
            const response = await fetch( `/api/quiz-details?title=${ encodeURIComponent( title ) }` );
            if ( !response.ok ) throw new Error( 'Failed to fetch quiz data' );
            const data: QuizLevel[] = await response.json();
            console.log( 'Quiz data:', data );
            setQuizData( data );
        } catch ( error ) {
            console.error( 'Error fetching quiz data:', error );
        }
    };

    const fetchUserProgress = async () => {
        try {
            const response = await fetch( `/api/user-progress?userId=${ encodeURIComponent( user!.sub! ) }&quizTitle=${ encodeURIComponent( currentTitle! ) }` );
            if ( !response.ok ) throw new Error( 'Failed to fetch user progress' );
            const data = await response.json();
            setUserProgress( data );
            console.log( 'User progress:', data );
        } catch ( error ) {
            console.error( 'Error fetching user progress:', error );
        }
    };

    const handleLevelSelection = ( level: number ) => {
        if ( quizData.length > 0 ) {
            const quizId = quizData[0].quiz_id; // Use the first quiz's ID for routing (assuming same ID for levels)
            if ( userProgress ) {
                const currentQuestionId = userProgress.currentQuestion;
                router.push( `/quiz/${ quizId }/level/${ currentQuestionId }` );
            } else {
                router.push( `/quiz/${ quizId }/level/${ level }` );
            }
        }
    };

    if ( quizData.length === 0 ) {
        return <p>Loading...</p>;
    }

    return (
        <div className="flex flex-col min-h-full justify-center items-center px-6 py-4 lg:px-8 container border-4 border-gray-200 dark:border-gray-100 dark:bg-gray-800 dark:text-white rounded-2xl mx-auto my-4 w-full lg:w-11/12">
            <h2 className="text-center text-4xl py-5 font-extrabold dark:text-white">
                Select Difficulty for {quizData[0].title}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-3 w-full">
                {quizData.map( ( quiz, index ) => (
                    <button
                        key={quiz.quiz_id}
                        onClick={() => handleLevelSelection( quiz.level )}
                        className="button text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none font-medium rounded-lg text-md w-full sm:w-auto px-5 py-2.5 text-center"
                    >
                        Level {quiz.level}
                    </button>
                ) )}
            </div>
        </div>
    );
};

export default DifficultySelectionPage;
