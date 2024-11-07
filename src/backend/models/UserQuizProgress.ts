// models/UserQuizProgress.ts

import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database';
import User from './User';
import Quiz from './Quiz';

class UserQuizProgress extends Model {
    progress_id!: number;
    user_id!: number;
    quiz_id!: number;
    current_question_index!: number;
    score!: number;
    completed!: boolean;
    date_completed!: Date;
}

UserQuizProgress.init( {
    progress_id: {
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
    current_question_index: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
    },
    score: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
    },
    completed: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    date_completed: {
        type: DataTypes.DATE,
        allowNull: true,
    },
}, {
    sequelize,
    modelName: 'UserQuizProgress',
    timestamps: false,
} );

export default UserQuizProgress;
