// app/leaderboard/[slug]/page.tsx

"use client";

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

type LeaderboardEntry = {
    username: string;
    score: number;
    date: string;
    level: number;
};

const getLeaderboardDataByLevel = ( quizName: string ): Map<number, LeaderboardEntry[]> => {
    const leaderboardDataByLevel = new Map<number, LeaderboardEntry[]>();
    const users = JSON.parse( localStorage.getItem( "users" ) || "[]" ) as { id: string; username: string; }[];

    const userIdToUsernameMap = new Map<string, string>();
    users.forEach( ( user ) => userIdToUsernameMap.set( user.id, user.username ) );

    for ( let i = 0; i < localStorage.length; i++ ) {
        const key = localStorage.key( i );
        if ( key && key.startsWith( "quizScores_" ) ) {
            const userId = key.replace( "quizScores_", "" );
            const scores = JSON.parse( localStorage.getItem( key ) || "[]" ) as { quiz: string; score: number; total: number; difficultyLevel: number; date: string; }[];

            const quizScores = scores.filter( ( score ) => score.quiz === quizName );
            if ( quizScores.length > 0 ) {
                const scoresByLevel = new Map<number, { score: number; date: string; }>();

                quizScores.forEach( ( s ) => {
                    const percentage = ( s.score / s.total ) * 100;
                    const existingEntry = scoresByLevel.get( s.difficultyLevel );
                    if ( !existingEntry || percentage > existingEntry.score ) {
                        scoresByLevel.set( s.difficultyLevel, { score: percentage, date: s.date } );
                    }
                } );

                const username = userIdToUsernameMap.get( userId ) || "Unknown User";

                scoresByLevel.forEach( ( value, level ) => {
                    const entry = { username, score: Math.round( value.score ), date: value.date, level };
                    if ( !leaderboardDataByLevel.has( level ) ) leaderboardDataByLevel.set( level, [] );
                    leaderboardDataByLevel.get( level )!.push( entry );
                } );
            }
        }
    }

    leaderboardDataByLevel.forEach( ( entries ) => entries.sort( ( a, b ) => b.score - a.score ) );
    return leaderboardDataByLevel;
};

const LeaderboardPage: React.FC = () => {
    const router = useRouter();
    const { slug } = router.query;
    const [leaderboardData, setLeaderboardData] = useState<Map<number, LeaderboardEntry[]>>( new Map() );

    useEffect( () => {
        if ( slug ) {
            const data = getLeaderboardDataByLevel( slug as string );
            setLeaderboardData( data );
        }
    }, [slug] );

    if ( !slug ) return <p>Loading...</p>;

    return (
        <div className="leaderboard-page flex flex-col justify-center items-center min-h-screen px-6 py-4 lg:px-8 bg-gray-800 text-white rounded-lg">
            <h2 className="text-4xl font-extrabold mb-5 text-center">Leaderboard for {slug}</h2>
            {[...leaderboardData.keys()].sort( ( a, b ) => a - b ).map( ( level ) => (
                <div key={level} className="w-full mb-6">
                    <h3 className="text-2xl mb-3">Level {level}</h3>
                    <table className="w-full text-left bg-gray-700 rounded-lg">
                        <thead>
                            <tr>
                                <th className="px-4 py-2">Rank</th>
                                <th className="px-4 py-2">User</th>
                                <th className="px-4 py-2">Score</th>
                                <th className="px-4 py-2">Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {leaderboardData.get( level )!.map( ( entry, index ) => (
                                <tr key={index} className="bg-gray-600 border-b">
                                    <td className="px-4 py-2 text-center">{index + 1}</td>
                                    <td className="px-4 py-2 text-center">{entry.username}</td>
                                    <td className="px-4 py-2 text-center">{entry.score}%</td>
                                    <td className="px-4 py-2 text-center">{new Date( entry.date ).toLocaleDateString()}</td>
                                </tr>
                            ) )}
                        </tbody>
                    </table>
                </div>
            ) )}
        </div>
    );
};

export default LeaderboardPage;
