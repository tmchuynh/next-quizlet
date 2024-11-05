import React from "react";

interface ActionButtonsProps {
    onBackToSelection: () => void;
    onLogout: () => void;
}

const ActionButtons: React.FC<ActionButtonsProps> = ({ onBackToSelection, onLogout }) => {
    return (
        <section className="buttonGroup md:grid grid-cols-1 gap-1 mx-auto ...">
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
        </section>
    );
};

export default ActionButtons;
