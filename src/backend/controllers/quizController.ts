import UserQuizProgress from '../models/UserQuizProgress';
import { Request, Response } from 'express';

/**
 * Adds or updates a quiz progress entry for a user.
 * @param userId The ID of the user.
 * @param quizId The ID of the quiz.
 * @param currentQuestionIndex The index of the current question.
 * @param score The user's score so far.
 * @param completed Whether the quiz is completed or not.
 * @param dateCompleted The date when the quiz was completed (if applicable).
 */
export const addOrUpdateQuizProgress = async (
    userId: string,
    quizId: string,
    currentQuestionIndex: number = 0,
    score: number = 0,
    completed: boolean = false,
    dateCompleted: Date | null = null
): Promise<void> => {
    try {
        // Check if a progress entry exists for the user and quiz
        const existingProgress = await UserQuizProgress.findOne( {
            where: {
                user_id: userId,
                quiz_id: quizId,
            },
        } );

        if ( existingProgress ) {
            // Update the existing progress entry
            await existingProgress.update( {
                current_question_index: currentQuestionIndex,
                score: score,
                completed: completed,
                date_completed: dateCompleted,
            } );
        } else {
            // Create a new progress entry
            await UserQuizProgress.create( {
                user_id: userId,
                quiz_id: quizId,
                current_question_index: currentQuestionIndex,
                score: score,
                completed: completed,
                date_completed: dateCompleted,
            } );
        }
    } catch ( error ) {
        console.error( 'Error adding or updating quiz progress:', error );
        throw new Error( 'Failed to add or update quiz progress' );
    }
};

// Handler for Express.js to use this function (optional if needed in an API route)
export const handleQuizProgressUpdate = async ( req: Request, res: Response ) => {
    const { userId, quizId, currentQuestionIndex, score, completed, dateCompleted } = req.body;

    if ( !userId || !quizId ) {
        return res.status( 400 ).json( { error: 'User ID and Quiz ID are required' } );
    }

    try {
        await addOrUpdateQuizProgress(
            userId,
            quizId,
            currentQuestionIndex,
            score,
            completed,
            dateCompleted ? new Date( dateCompleted ) : null
        );
        res.status( 200 ).json( { message: 'Quiz progress updated successfully' } );
    } catch ( error ) {
        res.status( 500 ).json( { error: 'Failed to update quiz progress' } );
    }
};
