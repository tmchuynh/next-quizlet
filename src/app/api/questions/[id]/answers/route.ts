// app/api/questions/[id]/answers/route.ts
import { NextResponse } from 'next/server';
import Answer from '../../../../../backend/models/Answer';

export async function GET( { params }: { params: { question_id: string[]; }; } ) {
    const questionIds = Array.isArray( params.question_id ) ? params.question_id : [params.question_id];
    try {
        const answers: Answer[] = [];
        questionIds.forEach( async ( id ) => {
            const answer = await Answer.findOne( { where: { question_id: id } } ) || new Answer;
            answers.push( answer );
        } );

        return NextResponse.json( { answers } );
    } catch ( error ) {
        return NextResponse.error();
    }
}
