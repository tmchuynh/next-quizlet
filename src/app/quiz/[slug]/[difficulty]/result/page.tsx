// app/quiz/[slug]/[difficulty]/result/page.tsx

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Score } from '../../../../types';

const ResultPage: React.FC = () => {
    const router = useRouter();
    const { slug, difficulty } = router.query;
    const [score, setScore] = useState( 0 );
    const [totalQuestions, setTotalQuestions] = useState( 0 );

    useEffect( () => {
        if ( !slug || !difficulty ) return;
        const quizData = JSON.parse( sessionStorage.getItem( 'currentQuizData' ) || '[]' );
        const questions = quizData[parseInt( difficulty as string )] || [];
        setTotalQuestions( questions.length );

        const currentUserId = sessionStorage.getItem( 'currentUserId' );
        const pastScoresKey = `quizScores_${ currentUserId }`;
        const userScores: Score[] = JSON.parse( localStorage.getItem( pastScoresKey ) || '[]' );

        // Calculate and store final score
        const finalScore = sessionStorage.getItem( 'finalScore' );
        if ( finalScore ) {
            setScore( parseInt( finalScore ) );
        }

        // Save the score in localStorage
        const newScore: Score = {
            score: parseInt( finalScore || '0' ),
            total: questions.length,
            quiz: slug as string,
            difficultyLevel: parseInt( difficulty as string ),
            date: new Date(),
        };

        localStorage.setItem( pastScoresKey, JSON.stringify( [...userScores, newScore] ) );
    }, [slug, difficulty] );

    return (
        <div className="result-page flex flex-col justify-center items-center px-6 py-4 lg:px-8 bg-gray-800 text-white">
            <h2 className="text-3xl font-bold mb-4 text-center">Quiz Results</h2>
            <p className="text-xl mb-4">You scored {score} out of {totalQuestions}</p>
            <button
                onClick={() => router.push( `/quiz/${ slug }` )}
                className="mt-4 bg-blue-700 hover:bg-blue-800 text-white font-medium rounded-lg px-5 py-2"
            >
                Back to Quiz Selection
            </button>
        </div>
    );
};

export default ResultPage;
