// models/UserActivity.ts

import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database';
import User from './User';

class UserActivity extends Model {
    activity_id!: number;
    user_id!: number;
    date!: Date;
    quizzes_completed!: number;
    created_at!: Date;
}

UserActivity.init( {
    activity_id: {
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
    date: {
        type: DataTypes.DATEONLY,
        allowNull: false,
    },
    quizzes_completed: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
    },
    created_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
}, {
    sequelize,
    modelName: 'UserActivity',
    timestamps: false,
} );

export default UserActivity;
