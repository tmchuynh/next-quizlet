import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database';

class Quiz extends Model {
    public quiz_id!: number;
    public title!: string;
    public description!: string;
    public level!: number;
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
