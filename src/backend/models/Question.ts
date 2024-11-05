// models/Question.ts

import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database';
import Quiz from './Quiz';

class Question extends Model { }

Question.init( {
    question_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
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
    question_text: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    question_type: {
        type: DataTypes.ENUM( 'multiple_choice', 'true_false', 'written' ),
        allowNull: false,
    },
    level: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
}, {
    sequelize,
    modelName: 'Question',
    timestamps: false,
} );

export default Question;
