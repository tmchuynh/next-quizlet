// models/index.ts
import User from './User';
import Quiz from './Quiz';
import Question from './Question';
import Answer from './Answer';
import UserQuizProgress from './UserQuizProgress';
import UserActivity from './UserActivity';
import Score from './Score';
import sequelize from '../config/database';

// Define relationships
User.hasMany( UserQuizProgress, { foreignKey: 'user_id' } );
UserQuizProgress.belongsTo( User, { foreignKey: 'user_id' } );

User.hasMany( UserActivity, { foreignKey: 'user_id' } );
UserActivity.belongsTo( User, { foreignKey: 'user_id' } );

User.hasMany( Score, { foreignKey: 'user_id' } );
Score.belongsTo( User, { foreignKey: 'user_id' } );

Quiz.hasMany( Question, { foreignKey: 'quiz_id' } );
Question.belongsTo( Quiz, { foreignKey: 'quiz_id' } );

Question.hasMany( Answer, { foreignKey: 'question_id' } );
Answer.belongsTo( Question, { foreignKey: 'question_id' } );

Quiz.hasMany( UserQuizProgress, { foreignKey: 'quiz_id' } );
UserQuizProgress.belongsTo( Quiz, { foreignKey: 'quiz_id' } );

Quiz.hasMany( Score, { foreignKey: 'quiz_id' } );
Score.belongsTo( Quiz, { foreignKey: 'quiz_id' } );

Question.belongsTo( Quiz, { foreignKey: 'quiz_id', as: 'quiz' } );
Quiz.hasMany( Question, { foreignKey: 'quiz_id', as: 'questions' } );

Answer.belongsTo( Question, { foreignKey: 'question_id', as: 'question' } );
Question.hasMany( Answer, { foreignKey: 'question_id', as: 'answers' } );

Score.belongsTo( User, { foreignKey: 'user_id', as: 'user' } );
User.hasMany( Score, { foreignKey: 'user_id', as: 'scores' } );

Score.belongsTo( Quiz, { foreignKey: 'quiz_id', as: 'quiz' } );
Quiz.hasMany( Score, { foreignKey: 'quiz_id', as: 'scores' } );

sequelize.sync().then( () => {
    console.log( 'Database & tables created!' );
} );

export default { sequelize, User, Quiz, Question, Answer, UserQuizProgress, UserActivity, Score };
