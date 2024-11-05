// app/quiz/page.tsx
"use client";


import React, { useEffect, useState } from 'react';
import { QuizOption, ProgressItem, Score } from '../types';

const quizOptions: QuizOption[] = [
    { id: 'quiz1', label: 'Math Quiz', category: 'Math' },
    { id: 'quiz2', label: 'Science Quiz', category: 'Math' },
    { id: 'quiz3', label: 'History Quiz', category: 'Math' },
    // Add other quiz options here
];

function sortQuizArrayByName( arr: QuizOption[] ): void {
    arr.sort( ( a, b ) => a.label.localeCompare( b.label ) );
}

const QuizSelectionPage: React.FC = () => {
    const [quizProgress, setQuizProgress] = useState<ProgressItem[]>( [] );
    const [sortedQuizOptions, setSortedQuizOptions] = useState<QuizOption[]>( [] );
    const [userScores, setUserScores] = useState<Score[]>( [] );

    useEffect( () => {
        // Sort quiz options by name initially
        const sortedOptions = [...quizOptions];
        sortQuizArrayByName( sortedOptions );
        setSortedQuizOptions( sortedOptions );

        // Load current user's progress and scores from localStorage
        const currentUserId = sessionStorage.getItem( 'currentUserId' );
        const userProgressKey = `quizProgress_${ currentUserId }`;
        const savedProgress = JSON.parse( localStorage.getItem( userProgressKey ) || '[]' );
        setQuizProgress( savedProgress );

        const userScoresKey = `quizScores_${ currentUserId }`;
        const savedScores = JSON.parse( localStorage.getItem( userScoresKey ) || '[]' );
        setUserScores( savedScores );
    }, [] );

    const handleQuizSelection = ( quizId: string ) => {
        sessionStorage.setItem( 'quizId', quizId );
        sessionStorage.setItem( 'quizType', quizOptions.find( q => q.id === quizId )?.label || '' );

        // Navigate to difficulty selection or next step
        // Here you could implement route navigation if you use React Router, for example.
        console.log( `Selected Quiz ID: ${ quizId }` );
    };

    const getButtonClass = ( quizId: string ): string => {
        const inProgress = quizProgress.some( item => item.quizId === quizId && item.currentQuestion > 0 );
        return inProgress
            ? 'bg-amber-700 hover:bg-amber-600'
            : 'bg-zinc-700 hover:bg-zinc-600';
    };

    return (
        <div className="flex flex-col min-h-full justify-center items-center px-6 py-4 lg:px-8 container border-4 border-gray-200 dark:border-gray-100 dark:bg-gray-800 dark:text-white rounded-2xl mx-auto my-4 w-full lg:w-11/12">
            <h2 className="text-center text-4xl py-5 font-extrabold dark:text-white">Select a Quiz</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-3 w-full">
                {sortedQuizOptions.map( ( quiz ) => (
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
