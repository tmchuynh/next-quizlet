import Score from './Score';
import Quiz from './Quiz';

const setupAssociations = () => {
    Quiz.hasMany( Score, { foreignKey: 'quiz_id', as: 'scores' } );
    Score.belongsTo( Quiz, { foreignKey: 'quiz_id', as: 'quiz' } );
};

export default setupAssociations;
