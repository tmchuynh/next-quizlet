'use client';

import React, { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { QuizOption, ProgressItem } from '../../../types/index';
import { useUser } from '@auth0/nextjs-auth0/client';

const DifficultySelectionPage: React.FC = () => {
    const router = useRouter();
    const { quizId } = useParams();
    const { user } = useUser();

    console.log( 'Quiz ID:', quizId );
    console.log( 'User:', user );

    const [quizData, setQuizData] = useState<QuizOption | null>( null );
    const [userProgress, setUserProgress] = useState<ProgressItem | null>( null );

    useEffect( () => {
        if ( quizId && user ) {
            fetchQuizData();
            fetchUserProgress();
        }
    }, [quizId, user] );

    const fetchQuizData = async () => {
        try {
            const response = await fetch( `/api/quiz-details/${ quizId }` )
                .then( data => { console.log( data ); } );
            // if ( !response.ok ) throw new Error( 'Failed to fetch quiz data' );
            // const data = await response.json();

            // console.log( "Data", data );
            // setQuizData( data );
        } catch ( error ) {
            console.error( 'Error fetching quiz data:', error );
        }
    };

    const fetchUserProgress = async () => {
        try {
            const response = await fetch( `/api/user-progress?userId=${ encodeURIComponent( user!.sub! ) }&quizId=${ quizId }` );
            if ( !response.ok ) throw new Error( 'Failed to fetch user progress' );
            const data = await response.json();
            setUserProgress( data );
        } catch ( error ) {
            console.error( 'Error fetching user progress:', error );
        }
    };

    const handleLevelSelection = () => {
        if ( userProgress ) {
            // Use current_question_index from user progress for routing
            const currentQuestionId = userProgress.currentQuestion;
            router.push( `/quiz/${ quizId }/level/${ currentQuestionId }` );
        } else {
            // Default to the first question if no progress exists
            router.push( `/quiz/${ quizId }/level/1` );
        }
    };

    if ( !quizData ) {
        return <p>Loading...</p>;
    }

    return (
        <div className="flex flex-col min-h-full justify-center items-center px-6 py-4 lg:px-8 container border-4 border-gray-200 dark:border-gray-100 dark:bg-gray-800 dark:text-white rounded-2xl mx-auto my-4 w-full lg:w-11/12">
            <h2 className="text-center text-4xl py-5 font-extrabold dark:text-white">Select Difficulty for {quizData.label}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-3 w-full">
                {[...Array( userProgress?.level )].map( ( _, index ) => (
                    <button
                        key={index}
                        onClick={handleLevelSelection}
                        className="button text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none font-medium rounded-lg text-md w-full sm:w-auto px-5 py-2.5 text-center"
                    >
                        Level {index + 1}
                    </button>
                ) )}
            </div>
        </div>
    );
};

export default DifficultySelectionPage;
