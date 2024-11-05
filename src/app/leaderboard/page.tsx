// app/leaderboard/page.tsx

"use client";

import React from 'react';
import { useRouter } from 'next/navigation';

// Utility function to fetch quiz names
const getAllQuizNames = (): string[] => {
  const quizNamesSet = new Set<string>();
  for ( let i = 0; i < localStorage.length; i++ ) {
    const key = localStorage.key( i );
    if ( key && key.startsWith( "quizScores_" ) ) {
      const scores = JSON.parse( localStorage.getItem( key ) || "[]" );
      scores.forEach( ( score: { quiz: string; } ) => {
        quizNamesSet.add( score.quiz );
      } );
    }
  }
  return Array.from( quizNamesSet ).sort();
};

const LeaderboardSelectionPage: React.FC = () => {
  const router = useRouter();
  const quizNames = getAllQuizNames();

  const handleQuizSelection = ( quizName: string ) => {
    router.push( `/leaderboard/${ quizName }` );
  };

  return (
    <div className="leaderboard-selection flex flex-col justify-center items-center min-h-screen px-6 py-4 lg:px-8 bg-gray-800 text-white rounded-lg">
      <h2 className="text-4xl font-extrabold mb-5 text-center">Select a Quiz to View Leaderboard</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {quizNames.map( ( quizName ) => (
          <button
            key={quizName}
            onClick={() => handleQuizSelection( quizName )}
            className="text-white bg-green-700 hover:bg-green-800 rounded-lg px-5 py-2.5"
          >
            {quizName}
          </button>
        ) )}
      </div>
    </div>
  );
};

export default LeaderboardSelectionPage;
