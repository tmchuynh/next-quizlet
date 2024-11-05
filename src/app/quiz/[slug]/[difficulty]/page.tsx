"use client";

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Question, ProgressItem } from '../../../types';
import shuffle from '../../../utils/shuffle';

const QuizPage: React.FC<{ params: Promise<{ slug: string; difficulty: string; }>; }> = ( { params } ) => {
    const router = useRouter();
    const [slug, setSlug] = useState<string | null>( null );
    const [difficulty, setDifficulty] = useState<string | null>( null );
    const [questions, setQuestions] = useState<Question[]>( [] );
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState( 0 );
    const [score, setScore] = useState( 0 );
    const [loaded, setLoaded] = useState( false );

    // Unwrap params and load quiz data once slug and difficulty are available
    useEffect( () => {
        const fetchParams = async () => {
            const unwrappedParams = await params;
            setSlug( unwrappedParams.slug );
            setDifficulty( unwrappedParams.difficulty );
        };
        fetchParams();
    }, [params] );

    useEffect( () => {
        if ( slug && difficulty ) {
            loadQuizData();
            loadProgress();
        }
    }, [slug, difficulty] );

    const loadQuizData = () => {
        if ( typeof window === 'undefined' ) return;

        const quizData = JSON.parse( sessionStorage.getItem( 'currentQuizData' ) || '[]' );
        const quizQuestions = quizData[parseInt( difficulty || "0", 10 )] || [];
        setQuestions( shuffle( quizQuestions ) );
        setLoaded( true );
    };

    const loadProgress = () => {
        if ( typeof window === 'undefined' ) return;

        const currentUserId = sessionStorage.getItem( 'currentUserId' );
        const progressData = JSON.parse( localStorage.getItem( `quizProgress_${ currentUserId }` ) || '[]' );
        const savedProgress = progressData.find(
            ( item: ProgressItem ) => item.quizId === slug && item.difficultyLevel === parseInt( difficulty || "0", 10 )
        );
        if ( savedProgress ) {
            setCurrentQuestionIndex( savedProgress.currentQuestion );
            setScore( savedProgress.score );
        }
    };

    const handleAnswerSelection = ( isCorrect: boolean ) => {
        if ( isCorrect ) setScore( score + 1 );
        saveProgress();
        if ( currentQuestionIndex < questions.length - 1 ) {
            setCurrentQuestionIndex( currentQuestionIndex + 1 );
        } else {
            router.push( `/quiz/${ slug }/${ difficulty }/result` );
        }
    };

    const saveProgress = () => {
        if ( typeof window === 'undefined' ) return;

        const currentUserId = sessionStorage.getItem( 'currentUserId' );
        const progressData: ProgressItem[] = JSON.parse( localStorage.getItem( `quizProgress_${ currentUserId }` ) || '[]' );
        const existingProgressIndex = progressData.findIndex(
            ( item ) => item.quizId === slug && item.difficultyLevel === parseInt( difficulty || "0", 10 )
        );

        const progressItem = {
            quizId: slug || '',
            currentQuestion: currentQuestionIndex + 1,
            score,
            difficultyLevel: parseInt( difficulty || "0", 10 ),
        };

        if ( existingProgressIndex !== -1 ) progressData[existingProgressIndex] = progressItem;
        else progressData.push( progressItem );

        localStorage.setItem( `quizProgress_${ currentUserId }`, JSON.stringify( progressData ) );
    };

    const getCurrentQuestion = () => questions[currentQuestionIndex];

    return (
        <div className="quiz-page flex flex-col justify-center items-center px-6 py-4 lg:px-8 bg-gray-800 text-white">
            <h2 className="text-3xl font-bold mb-4 text-center">Quiz: {slug} - Difficulty: {difficulty}</h2>
            {loaded && questions.length > 0 ? (
                <>
                    <p className="text-xl mb-4">Question {currentQuestionIndex + 1} of {questions.length}</p>
                    <div className="question-box mb-4">
                        <p>{getCurrentQuestion()?.question}</p>
                        <div className="answers-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 mt-4">
                            {getCurrentQuestion()?.answers.map( ( answer, index ) => (
                                <button
                                    key={index}
                                    className="answer-button bg-blue-700 hover:bg-blue-800 rounded-lg px-4 py-2"
                                    onClick={() => handleAnswerSelection( answer.correct )}
                                >
                                    {answer.text}
                                </button>
                            ) )}
                        </div>
                    </div>
                    <p className="text-md mt-4">Score: {score}</p>
                </>
            ) : (
                <p>Loading quiz...</p>
            )}
        </div>
    );
};

export default QuizPage;
