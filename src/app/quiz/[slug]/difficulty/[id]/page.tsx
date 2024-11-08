// quiz/[slug]/difficulty/[id]/page.tsx

"use client";

import { usePathname, useRouter } from 'next/navigation';
import { Answer, Question } from '../../../../types/index';
import { useEffect, useState } from 'react';


const QuizPage = () => {
    const router = useRouter();
    const pathname = usePathname();

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
        };

        fetchQuestions();
    }, [currentTitle, current_question_index] );

    const handleAnswerSelect = ( answerId: string ) => {
        setSelectedAnswer( answerId );
    };

    const handleSubmitAnswer = async () => {
        setIsSubmitting( true );
        const currentQuestion = questions[currentQuestionIndex];
        const currentAnswers = answers[currentQuestionIndex];

        console.log( "Selected answer:", selectedAnswer );
        console.log( "Current question:", currentQuestion );

        const selectedAnswerData = currentAnswers.find( ( answer: { id: string | null; } ) => answer.id === selectedAnswer );

        if ( selectedAnswerData ) {
            const isCorrect = selectedAnswerData.is_correct;
            setResult( isCorrect ? "Correct!" : "Wrong answer. Try again." );
        } else {
            setResult( "Please select an answer." );
        }

        setIsSubmitting( false );
    };

    const handleWrittenAnswerSubmit = () => {
        const currentQuestion = questions[currentQuestionIndex];
        const correctAnswer = answers[currentQuestionIndex].find( ( answer: { is_correct: any; } ) => answer.is_correct );

        if ( correctAnswer && userInput.trim().toLowerCase() === correctAnswer.text.trim().toLowerCase() ) {
            setResult( "Correct!" );
        } else {
            setResult( "Wrong answer. Try again." );
        }
    };

    const goToNextQuestion = () => {
        setSelectedAnswer( null );
        setUserInput( '' );
        setResult( null );
        if ( currentQuestionIndex < questions.length - 1 ) {
            setCurrentQuestionIndex( currentQuestionIndex + 1 );
        } else {
            // Quiz is finished
            alert( "Quiz completed!" );
            router.push( '/' ); // Redirect to home or summary page
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