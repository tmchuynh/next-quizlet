import React from "react";

interface ScoresButtonsProps {
    onBackToSelection: () => void;
    onLogout: () => void;
    onViewScores: () => void;
    onViewLeaderboards: () => void;
}

const ScoresButtons: React.FC<ScoresButtonsProps> = ({ onBackToSelection, onLogout, onViewScores, onViewLeaderboards }) => {
    return (
        <section className="buttonGroup md:grid grid-cols-1 gap-1 mx-auto ...">
            <button
                id="viewScoresButton"
                className="text-white bg-emerald-700 ..."
                onClick={onViewScores}
            >
                View Past Scores
            </button>
            <button
                id="backToSelectionButton"
                className="text-white bg-amber-700 ..."
                onClick={onBackToSelection}
            >
                Select a Different Quiz
            </button>
            <button
                id="logoutButton"
                className="logout-button text-white bg-rose-700 ..."
                onClick={onLogout}
            >
                Logout
            </button>
            <button
                id="viewLeaderboardsButton"
                className="text-white bg-blue-700 ..."
                onClick={onViewLeaderboards}
            >
                View Leaderboards
            </button>
        </section>
    );
};

export default ScoresButtons;
