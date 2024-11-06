"use client";

import React, { useState, useEffect, use } from 'react';
import { useRouter } from 'next/navigation'; // use `next/navigation` for App Router
import { QuizOption, ProgressItem, Score } from '../../types';

interface QuizDifficultyPageProps {
    params: {
        slug: string;
    };
}

const quizOptions: QuizOption[] = [
    { id: 'quiz1', label: 'Math Quiz', category: 'Math' },
    { id: 'quiz2', label: 'Science Quiz', category: 'Science' },
    { id: 'quiz3', label: 'History Quiz', category: 'History' },
];

const QuizDifficultyPage: React.FC<QuizDifficultyPageProps> = props => {
    const params = props.params; // Fix: Replace `use(props.params)` with `props.params`
    const { slug } = params;
    const router = useRouter();
    const [progress, setProgress] = useState<ProgressItem[]>( [] );
    const [userScores, setUserScores] = useState<Score[]>( [] );
    const [selectedQuiz, setSelectedQuiz] = useState<QuizOption | undefined>();
    const quizType = typeof window !== 'undefined' ? sessionStorage.getItem( 'quizType' ) : '';

    useEffect( () => {
        if ( typeof window === 'undefined' ) return;

        const quiz = quizOptions.find( ( q ) => q.label === slug );
        if ( quiz ) {
            setSelectedQuiz( quiz );
            sessionStorage.setItem( 'quizId', quiz.id );
        }

        const currentUserId = sessionStorage.getItem( 'currentUserId' );
        const progressKey = `quizProgress_${ currentUserId }`;
        const userProgress = JSON.parse( localStorage.getItem( progressKey ) || '[]' );
        setProgress( userProgress );

        const scoresKey = `quizScores_${ currentUserId }`;
        const scores = JSON.parse( localStorage.getItem( scoresKey ) || '[]' );
        setUserScores( scores );
    }, [slug] );

    const getButtonClass = ( level: number ): string => {
        const isInProgress = progress.some(
            ( item ) =>
                item.quizId === selectedQuiz?.id &&
                item.currentQuestion > 0 &&
                item.difficultyLevel === level
        );
        return isInProgress ? 'bg-amber-700 hover:bg-amber-600' : 'bg-zinc-700 hover:bg-zinc-600';
    };

    const handleDifficultySelection = ( level: number ) => {
        if ( !selectedQuiz?.id ) return;

        sessionStorage.setItem( 'difficultyLevel', level.toString() );
        setupQuizData( selectedQuiz.id, level );
    };

    const setupQuizData = ( quizId: string, difficultyLevel: number ) => {
        const quizData = JSON.parse( sessionStorage.getItem( 'currentQuizData' ) || '[]' );
        if ( !quizData || !quizData[difficultyLevel] ) return;

        const questions = quizData[difficultyLevel];
        const shuffledQuestions = questions.map( ( q: any ) => ( {
            ...q,
            answers: shuffle( q.answers ),
        } ) );

        sessionStorage.setItem( 'currentQuizData', JSON.stringify( shuffledQuestions ) );
        sessionStorage.setItem( 'totalQuestions', questions.length.toString() );

        router.push( `/quiz/${ slug }/questions` );
    };

    const shuffle = ( array: any[] ) => array.sort( () => Math.random() - 0.5 );

    const getHighestScoreForLevel = ( level: number ) => {
        return userScores
            .filter( ( score ) => score.quiz === selectedQuiz?.label && score.difficultyLevel === level )
            .reduce( ( max, score ) => Math.max( max, score.score ), 0 );
    };

    return (
        <div className="flex flex-col min-h-full justify-center px-6 py-4 lg:px-8 container border-4 border-gray-200 dark:border-gray-100 dark:bg-gray-800 dark:text-white rounded-2xl mx-auto my-4 w-full lg:w-11/12">
            <h2 className="text-center text-4xl py-5 font-extrabold dark:text-white">
                Select Difficulty Level for <br /> {quizType}
            </h2>
            <div id="difficultyOptions" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-3">
                {[1, 2, 3, 4, 5].map( ( level ) => (
                    <button
                        key={level}
                        onClick={() => handleDifficultySelection( level )}
                        className={`button text-white ${ getButtonClass( level ) } focus:ring-4 focus:outline-none font-medium rounded-lg text-md w-full sm:w-auto px-5 py-2.5 text-center`}
                    >
                        Level {level}
                        <div className="text-sm mt-1">
                            {getHighestScoreForLevel( level ) ? `High Score: ${ getHighestScoreForLevel( level ) }` : ''}
                        </div>
                    </button>
                ) )}
            </div>
        </div>
    );
};

export default QuizDifficultyPage;
