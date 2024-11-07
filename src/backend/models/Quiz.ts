import { DataTypes, Model, Association } from 'sequelize';
import sequelize from '../config/database';
import Score from './Score';

class Quiz extends Model {
    public quiz_id!: number;
    public title!: string;
    public description!: string;
    public level!: number;

    public static associations: {
        scores: Association<Quiz, Score>;
    };
}

Quiz.init(
    {
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
        },
        level: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },
    {
        sequelize,
        modelName: 'Quiz',
        tableName: 'quizzes',
        timestamps: false,
    }
);

export default Quiz;
