"use client";

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useUser } from '@auth0/nextjs-auth0/client';

const LeaderboardSelectionPage: React.FC = () => {
  const router = useRouter();
  const { user } = useUser();
  const [quizNames, setQuizNames] = useState<string[]>( [] );

  useEffect( () => {
    const fetchQuizNames = async () => {
      if ( user && user.sub ) {
        try {
          const response = await fetch( `/api/scores?userId=${ user.sub }` );
          if ( response.ok ) {
            const data = await response.json();
            setQuizNames( data );
          } else {
            console.error( 'Failed to fetch quiz names' );
          }
        } catch ( error ) {
          console.error( 'Error fetching quiz names:', error );
        }
      }
    };

    fetchQuizNames();
  }, [user] );

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
