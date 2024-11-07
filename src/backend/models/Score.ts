import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database';
import Quiz from './Quiz'; // Ensure this path is correct

class Score extends Model {
    public score_id!: number;
    public user_id!: string;
    public quiz_id!: number;
    public score!: number;
    public total_questions!: number;
    public quiz_date!: Date;
}

Score.init(
    {
        score_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        user_id: {
            type: DataTypes.STRING( 250 ),
            allowNull: false,
        },
        quiz_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        score: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        total_questions: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        quiz_date: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
        },
    },
    {
        sequelize,
        modelName: 'Score',
        tableName: 'scores',
        timestamps: false,
    }
);

export default Score;
