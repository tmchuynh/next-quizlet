import { DataTypes, Model, Association } from 'sequelize';
import sequelize from '../config/database';
import Quiz from './Quiz';

class Score extends Model {
    public score_id!: number;
    public user_id!: string;
    public quiz_id!: number;
    public score!: number;
    public total_questions!: number;
    public quiz_date!: Date;
    public Quiz?: Quiz;

    public static associations: {
        quiz: Association<Score, Quiz>;
    };
}

Score.init(
    {
        score_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        user_id: {
            type: DataTypes.STRING,
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

// Define the association
Score.belongsTo( Quiz, {
    foreignKey: 'quiz_id',
    as: 'Quiz',
} );

export default Score;
