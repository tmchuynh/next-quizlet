export interface User {
    id: string;
}

export interface ProgressItem {
    currentQuestion: number;
    score: number;
    quizId: string;
    difficultyLevel: number;
}

export interface Score {
    date: Date;
    quiz: string;
    difficultyLevel: number;
    score: number;
    total: number;
}

export interface LeaderboardEntry {
    username: string;
    score: number;
    date: Date;
    level: number;
}

export interface Answer {
    text: string;
    correct: boolean;
}

export interface Question {
    question: string;
    answers: Answer[];
}

// Define an export interface for the quiz data structure
export interface QuizData {
    chemistryQuizData: Question[];
    physicsQuizData: Question[];
    biologyQuizData: Question[];
    mathQuizData: Question[];
    englishQuizData: Question[];
    historyQuizData: Question[];
    geographyQuizData: Question[];
    computerScienceQuizData: Question[];
    literatureQuizData: Question[];
    philosophyQuizData: Question[];
    socialStudiesQuizData: Question[];
    politicsQuizData: Question[];
    economicsQuizData: Question[];
    psychologyQuizData: Question[];
    artQuizData: Question[];
    musicQuizData: Question[];
    sportsQuizData: Question[];
    engineeringQuizData: Question[];
    realEstateQuizData: Question[];
    healthCareQuizData: Question[];
    astrologyQuizData: Question[];
    animalQuizData: Question[];
    financeQuizData: Question[];
}

export interface QuizItem {
    id: string;
    data: Quiz;
}

export interface Quiz {
    [difficultyLevel: number]: Question[]; // Difficulty levels from 1 to 5
}

export interface QuizOption {
    id: string;
    label: string;
    category: string;
}
