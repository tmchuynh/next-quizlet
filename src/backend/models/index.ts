// models/index.ts
import User from './User';
import Quiz from './Quiz';
import Question from './Question';
import Answer from './Answer';
import UserQuizProgress from './UserQuizProgress';
import Score from './Score';
import sequelize from '../config/database';

// User and UserQuizProgress
User.hasMany( UserQuizProgress, { foreignKey: 'user_id', onDelete: 'CASCADE' } );
UserQuizProgress.belongsTo( User, { foreignKey: 'user_id', onDelete: 'CASCADE' } );

// User and Score
User.hasMany( Score, { foreignKey: 'user_id', onDelete: 'CASCADE' } );
Score.belongsTo( User, { foreignKey: 'user_id', onDelete: 'CASCADE' } );

// Quiz and Question
Quiz.hasMany( Question, { foreignKey: 'quiz_id', onDelete: 'CASCADE' } );
Question.belongsTo( Quiz, { foreignKey: 'quiz_id', onDelete: 'CASCADE' } );

// Question and Answer
Question.hasMany( Answer, { foreignKey: 'question_id', onDelete: 'CASCADE' } );
Answer.belongsTo( Question, { foreignKey: 'question_id', onDelete: 'CASCADE' } );

// Quiz and UserQuizProgress
Quiz.hasMany( UserQuizProgress, { foreignKey: 'title', sourceKey: 'title', onDelete: 'CASCADE' } );
UserQuizProgress.belongsTo( Quiz, { foreignKey: 'title', targetKey: 'title', onDelete: 'CASCADE' } );

// Quiz and Score
Quiz.hasMany( Score, { foreignKey: 'quiz_id', onDelete: 'CASCADE' } );
Score.belongsTo( Quiz, { foreignKey: 'quiz_id', onDelete: 'CASCADE' } );

sequelize.sync().then( () => {
    console.log( 'Database & tables created!' );
} );


export {
    sequelize,
    User,
    Quiz,
    Question,
    Answer,
    UserQuizProgress,
    Score,
};

