// models/Answer.ts

import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database';
import Question from './Question';

class Answer extends Model { }

Answer.init( {
    answer_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    question_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Question,
            key: 'question_id',
        },
        onDelete: 'CASCADE',
    },
    answer_text: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    is_correct: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
}, {
    sequelize,
    modelName: 'Answer',
    timestamps: false,
} );

export default Answer;
