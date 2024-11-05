"use client"
import React, { useState, useEffect } from "react";
import ActionButtons from "./ActionButtons";
import ScoresButtons from "./ScoresButtons";

const ButtonGroup: React.FC = () => {
    const [showScoresButtons, setShowScoresButtons] = useState(false);

    useEffect(() => {
        const hasQuizProgress = Boolean(localStorage.getItem("quizProgress"));
        setShowScoresButtons(hasQuizProgress);
    }, []);

    const handleBackToSelection = () => {
        // Add logic for back to selection
    };

    const handleLogout = () => {
        localStorage.removeItem("quizProgress");
        sessionStorage.clear();
        setShowScoresButtons(false);
    };

    const handleViewScores = () => {
        // Add logic for view scores
    };

    const handleViewLeaderboards = () => {
        // Add logic for view leaderboards
    };

    return (
        <>
            {showScoresButtons ? (
                <ScoresButtons
                    onBackToSelection={handleBackToSelection}
                    onLogout={handleLogout}
                    onViewScores={handleViewScores}
                    onViewLeaderboards={handleViewLeaderboards}
                />
            ) : (
                <ActionButtons
                    onBackToSelection={handleBackToSelection}
                    onLogout={handleLogout}
                />
            )}
        </>
    );
};

export default ButtonGroup;
