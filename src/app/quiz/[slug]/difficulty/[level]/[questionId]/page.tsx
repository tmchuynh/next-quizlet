// app/quiz/[slug]/difficulty/[id]/page.tsx

'use client';

import { useRouter, usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useUser } from '@auth0/nextjs-auth0/client';
import { Answer, Question } from '../../../../../types/index';

const QuizPage = () => {
    const router = useRouter();
    const pathname = usePathname();
    const { user } = useUser();

    const segments = pathname.split( '/' ).filter( Boolean );
    const currentTitle = segments.length > 1 ? decodeURIComponent( segments[1] ) : null;
    const level = parseInt( segments[3] );
    const question_id = parseInt( segments[4] );

    const [questions, setQuestions] = useState<Question[]>( [] );
    const [answers, setAnswers] = useState<Answer[]>( [] );
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState( 0 );
    const [shuffledQuestions, setShuffledQuestions] = useState<Question[]>( [] );
    const [shuffledAnswers, setShuffledAnswers] = useState<Answer[]>( [] );
    const [scoreId, setScoreId] = useState<number | null>( null );
    const [selectedAnswer, setSelectedAnswer] = useState<string | null>( null );
    const [userInput, setUserInput] = useState<string>( '' );
    const [result, setResult] = useState<string | null>( null );
    const [isSubmitting, setIsSubmitting] = useState( false );

    useEffect( () => {
        const fetchQuestionData = async () => {
            if ( currentTitle ) {
                try {
                    // Fetch quiz data to get quiz_id
                    const quizRes = await fetch( `/api/quizzes/${ currentTitle }` );
                    const quizData = await quizRes.json();


                    if ( quizData.error ) {
                        console.error( 'Error fetching quiz:', quizData.error );
                        return;
                    }

                    // Fetch questions for the quiz
                    const questionsRes = await fetch( `/api/quizzes/${ currentTitle }/difficulty/${ level }/questions` );
                    const questionsData = await questionsRes.json();

                    console.log( 'Questions:', questionsData );

                    if ( questionsData.error ) {
                        console.error( 'Error fetching questions:', questionsData.error );
                        return;
                    }

                    // Shuffle questions
                    const questionsShuffled = questionsData.questions.sort( () => Math.random() - 0.5 );
                    setShuffledQuestions( questionsShuffled );
                    setQuestions( questionsShuffled );


                    // Fetch questions for the quiz
                    const answersRes = await fetch( `/api/quizzes/${ currentTitle }/difficulty/${ level }/answers` );
                    const answersData = await answersRes.json();

                    console.log( 'Answers:', answersData );

                    if ( questionsData.error ) {
                        console.error( 'Error fetching questions:', answersData.error );
                        return;
                    }

                    // Shuffle questions
                    const answersShuffled = answersData.questions.sort( () => Math.random() - 0.5 );
                    setShuffledAnswers( answersShuffled );
                    setAnswers( answersShuffled );

                    // Initialize score
                    if ( questionsShuffled.length > 0 && !scoreId ) {
                        await initializeScore( quizData.quiz_id, questionsShuffled.length );
                    }
                } catch ( error ) {
                    console.error( 'Error fetching data:', error );
                }
            }
        };

        const initializeScore = async ( quizId: number, totalQuestions: number ) => {
            try {
                const userId = user?.sub;

                if ( !userId ) {
                    console.error( 'User ID is undefined.' );
                    return;
                }

                const res = await fetch( '/api/scores/init', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify( { user_id: userId, level, quiz_id: quizId, total_questions: totalQuestions } ),
                } );

                const data = await res.json();

                if ( res.ok ) {
                    setScoreId( data.score_id );
                } else {
                    console.error( 'Failed to initialize score:', data.error );
                }
            } catch ( error ) {
                console.error( 'Failed to initialize score:', error );
            }
        };



        fetchQuestionData();

    }, [currentTitle] );

    const currentQuestion = shuffledQuestions[currentQuestionIndex];
    if ( !currentQuestion ) return <div>Loading...</div>;
    console.log( currentQuestion );
    console.log( 'Question ID:', currentQuestion.question_id );
    console.log( 'Question Text:', currentQuestion.question_text );
    console.log( 'Question Type:', currentQuestion.question_type );


    const handleAnswerSelect = ( answerId: string ) => {
        setSelectedAnswer( answerId );
    };

    const handleSubmitAnswer = async () => {
        setIsSubmitting( true );

        const currentQuestion = shuffledQuestions[currentQuestionIndex];
        const selectedAnswerData = currentQuestion.answers.find(
            ( answer: Answer ) => answer.answer_id === parseInt( selectedAnswer || '', 10 )
        );

        if ( selectedAnswerData ) {
            const isCorrect = selectedAnswerData.is_correct;
            setResult( isCorrect ? 'Correct!' : 'Wrong answer.' );

            // Update the score if the answer is correct
            if ( isCorrect && scoreId ) {
                await fetch( '/api/scores/update', {
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify( { score_id: scoreId, increment: 1 } ),
                } );
            }
        } else {
            setResult( 'Please select an answer.' );
        }

        setIsSubmitting( false );
    };

    const handleWrittenAnswerSubmit = async () => {
        const currentQuestion = shuffledQuestions[currentQuestionIndex];
        const correctAnswer = currentQuestion.answers.find( ( answer: Answer ) => answer.is_correct );

        if (
            correctAnswer &&
            userInput.trim().toLowerCase() === correctAnswer.answer_text.trim().toLowerCase()
        ) {
            setResult( 'Correct!' );

            // Update the score if the answer is correct
            if ( scoreId ) {
                await fetch( '/api/scores/update', {
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify( { score_id: scoreId, increment: 1 } ),
                } );
            }
        } else {
            setResult( 'Wrong answer.' );
        }
    };


    const goToNextQuestion = () => {
        setSelectedAnswer( null );
        setUserInput( '' );
        setResult( null );

        if ( currentQuestionIndex < shuffledQuestions.length - 1 ) {
            setCurrentQuestionIndex( currentQuestionIndex + 1 );
        } else {
            // Quiz is finished
            router.push( `/quiz/${ currentTitle }/difficulty/result?scoreId=${ scoreId }` );
        }
    };


    return (
        <div className="flex flex-col min-h-full justify-center items-center px-6 py-4 lg:px-8 container border-4 border-gray-200 dark:border-gray-100 dark:bg-gray-800 dark:text-white rounded-2xl mx-auto my-4 w-full lg:w-11/12">
            <h1>{currentQuestion.question_type}</h1>
            {currentQuestion.question_type === 'multiple_choice' ? (
                <div>
                    <button
                        key={answer.answer_id}
                        onClick={() => handleAnswerSelect( answer.answer_id.toString() )}
                        disabled={isSubmitting}
                    >
                        {answer.text}
                    </button>
                    <button onClick={handleSubmitAnswer} disabled={isSubmitting}>
                        Submit Answer
                    </button>
                </div>
            ) : (
                <div>
                    <input
                        type="text"
                        value={userInput}
                        onChange={( e ) => setUserInput( e.target.value )}
                        disabled={isSubmitting}
                    />
                    <button onClick={handleWrittenAnswerSubmit} disabled={isSubmitting}>
                        Submit Answer
                    </button>
                </div>
            )}
            {result && <div>{result}</div>}
            <button onClick={goToNextQuestion} disabled={isSubmitting || !result}>
                Next Question
            </button>
        </div>
    );
};

export default QuizPage;
