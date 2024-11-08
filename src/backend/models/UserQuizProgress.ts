// models/UserQuizProgress.ts

import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database';
import User from './User';
import Quiz from './Quiz';

const UserQuizProgress = sequelize.define(
    'UserQuizProgress',
    {
        progress_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        user_id: {
            type: DataTypes.STRING( 250 ),
            allowNull: false,
            references: {
                model: 'users',
                key: 'user_id',
            },
        },
        title: {
            type: DataTypes.STRING( 100 ),
            allowNull: false,
            references: {
                model: 'quizzes',
                key: 'title',
            },
        },
        level: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 1,
        },
        current_question_index: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
        },
        score: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0,
        },
        completed: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        date_completed: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
        },
    },
    {
        tableName: 'user_quiz_progress',
        timestamps: false,
    }
);

// Associations
UserQuizProgress.belongsTo( User, { foreignKey: 'user_id', onDelete: 'CASCADE' } );
User.hasMany( UserQuizProgress, { foreignKey: 'user_id', onDelete: 'CASCADE' } );

UserQuizProgress.belongsTo( Quiz, { foreignKey: 'title', targetKey: 'title', onDelete: 'CASCADE' } );
Quiz.hasMany( UserQuizProgress, { foreignKey: 'title', sourceKey: 'title', onDelete: 'CASCADE' } );


export default UserQuizProgress;
