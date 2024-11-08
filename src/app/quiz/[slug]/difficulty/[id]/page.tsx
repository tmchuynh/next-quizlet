// quiz/[slug]/difficulty/[id]/page.tsx

"use client";

import { usePathname, useRouter } from 'next/navigation';
import { Answer, Question } from '../../../../types/index';
import { useEffect, useState } from 'react';
import { useUser } from '@auth0/nextjs-auth0/client';
import Quiz from '../../../../../backend/models/Quiz';


const QuizPage = () => {
    const router = useRouter();
    const pathname = usePathname();
    const { user } = useUser();

    const segments = pathname.split( '/' ).filter( Boolean );
    let currentTitle = segments.length > 1 ? decodeURIComponent( segments[1] ) : null;
    let current_question_index = parseInt( segments[3], 10 );

    const [questions, setQuestions] = useState<Question[]>( [] );
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState( 0 );
    const [shuffledQuestions, setShuffledQuestions] = useState<Question[]>( [] );
    const [answers, setAnswers] = useState<Answer[]>( [] );
    const [selectedAnswer, setSelectedAnswer] = useState<string | null>( null );
    const [userInput, setUserInput] = useState<string>( '' );
    const [result, setResult] = useState<string | null>( null );
    const [isSubmitting, setIsSubmitting] = useState( false );
    const [scoreId, setScoreId] = useState<number | null>( null );

    const quiz = Quiz.findOne( {
        where: { title: currentTitle },
    } );

    useEffect( () => {
        const fetchQuestions = async () => {
            if ( currentTitle && current_question_index ) {
                try {
                    // Fetch questions based on quiz_id from the database
                    const res = await fetch( `/api/quizzes/${ currentTitle }/difficulty/${ current_question_index }/questions` );
                    const data = await res.json();

                    console.log( "Fetched data:", data );

                    // Shuffle questions
                    const shuffled = data.questions.sort( () => Math.random() - 0.5 );
                    setShuffledQuestions( shuffled );
                    setQuestions( shuffled );

                    console.log( "Fetched questions:", data.questions );

                    // Fetch answers for the shuffled questions
                    const answersRes = await fetch( `/api/questions/${ shuffled.map( ( q: { question_id: any; } ) => q.question_id ).join( ',' ) }/answers` );
                    const answersData = await answersRes.json();

                    // Shuffle answers for each question
                    const shuffledAnswers = answersData.answers.map( ( answer: any[] ) => ( {
                        ...answer,
                        shuffled: answer.sort( () => Math.random() - 0.5 ),
                    } ) );

                    setAnswers( shuffledAnswers );
                } catch ( error ) {
                    console.error( "Error fetching data:", error );
                }
            }
            if ( shuffledQuestions.length > 0 && !scoreId ) {
                initializeScore();
            }
        };
        const initializeScore = async () => {
            try {
                const userId = user?.sub; // Implement this based on your auth system
                const quizId = quiz.quiz_id; // Implement based on your URL structure
                const totalQuestions = shuffledQuestions.length;

                const res = await fetch( '/api/scores/init', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify( { user_id: userId, quiz_id: quizId, total_questions: totalQuestions } ),
                } );

                const data = await res.json();
                setScoreId( data.score_id );
            } catch ( error ) {
                console.error( 'Failed to initialize score:', error );
            }
        };

        fetchQuestions();
    }, [currentTitle, current_question_index] );

    const handleAnswerSelect = ( answerId: string ) => {
        setSelectedAnswer( answerId );
    };

    const handleSubmitAnswer = async () => {
        setIsSubmitting( true );
        const currentQuestion = shuffledQuestions[currentQuestionIndex];
        const currentAnswers = answers[currentQuestionIndex];

        const selectedAnswerData = currentAnswers.find( answer => answer.id === selectedAnswer );

        if ( selectedAnswerData ) {
            const isCorrect = selectedAnswerData.is_correct;
            setResult( isCorrect ? "Correct!" : "Wrong answer." );

            // Update the score if the answer is correct
            if ( isCorrect && scoreId ) {
                await fetch( '/api/scores/update', {
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify( { score_id: scoreId, increment: 1 } ),
                } );
            }
        } else {
            setResult( "Please select an answer." );
        }

        setIsSubmitting( false );
    };

    const handleWrittenAnswerSubmit = async () => {
        const currentQuestion = shuffledQuestions[currentQuestionIndex];
        const correctAnswer = answers[currentQuestionIndex].find( answer => answer.is_correct );

        if ( correctAnswer && userInput.trim().toLowerCase() === correctAnswer.answer_text.trim().toLowerCase() ) {
            setResult( "Correct!" );
            // Update the score if the answer is correct
            if ( scoreId ) {
                await fetch( '/api/scores/update', {
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify( { score_id: scoreId, increment: 1 } ),
                } );
            }
        } else {
            setResult( "Wrong answer." );
        }
    };

    const goToNextQuestion = () => {
        setSelectedAnswer( null );
        setUserInput( '' );
        setResult( null );

        if ( currentQuestionIndex < shuffledQuestions.length - 1 ) {
            const nextQuestionIndex = currentQuestionIndex + 1;
            router.push( `/quiz/${ currentTitle }/difficulty/${ nextQuestionIndex }` );
        } else {
            // Quiz is finished
            router.push( `/quiz/${ currentTitle }/difficulty/result?scoreId=${ scoreId }` );
        }
    };

    if ( !questions.length ) return <div>Loading...</div>;

    return (
        {
            shuffledQuestions.forEach( questions => (
                <div>
                    <h1>{currentQuestion.text}</h1>
                    {
                        currentQuestion.question_type === 'multiple_choice' ? (
                            <div>
                                {currentAnswers.map( answer => (
                                    <button key={answer.id} onClick={() => handleAnswerSelect( answer.id )} disabled={isSubmitting}>
                                        {answer.text}
                                    </button>
                                ) )}
                                <button onClick={handleSubmitAnswer} disabled={isSubmitting}>Submit Answer</button>
                            </div>
                        ) : (
                            <div>
                                <input
                                    type="text"
                                    value={userInput}
                                    onChange={( e ) => setUserInput( e.target.value )}
                                    disabled={isSubmitting}
                                />
                                <button onClick={handleWrittenAnswerSubmit} disabled={isSubmitting}>Submit Answer</button>
                            </div>
                        )
                    }
                    {result && <div>{result}</div>}
                    <button onClick={goToNextQuestion} disabled={isSubmitting || !result}>
                        Next Question
                    </button>
                </div>
            )}

    );
};

export default QuizPage;