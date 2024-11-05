// models/Quiz.ts

import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database';

class Quiz extends Model { }

Quiz.init( {
    quiz_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    title: {
        type: DataTypes.STRING( 100 ),
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    level: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    created_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
}, {
    sequelize,
    modelName: 'Quiz',
    timestamps: false,
} );

export default Quiz;
