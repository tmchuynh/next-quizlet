// models/Score.ts

import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database';
import User from './User';
import Quiz from './Quiz';

class Score extends Model { }

Score.init( {
    score_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: User,
            key: 'user_id',
        },
        onDelete: 'CASCADE',
    },
    quiz_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Quiz,
            key: 'quiz_id',
        },
        onDelete: 'CASCADE',
    },
    score: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    total_questions: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    date: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
}, {
    sequelize,
    modelName: 'Score',
    timestamps: false,
} );

export default Score;
