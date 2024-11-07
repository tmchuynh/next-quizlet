import { Association, DataTypes, Model } from 'sequelize';
import sequelize from '../config/database';
import Score from './Score';

class Quiz extends Model {
    public quiz_id!: number;
    public title!: string;
    public level!: number;
    public description?: string;

    public static associations: {
        quiz: Association<Score, Quiz>;
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
            type: DataTypes.STRING,
            allowNull: false,
        },
        level: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
    },
    {
        sequelize,
        modelName: 'Quiz',
        tableName: 'quizzes',
        timestamps: false,
    }
);

Quiz.hasMany( Score, { foreignKey: 'quiz_id', as: 'Score' } );

export default Quiz;
