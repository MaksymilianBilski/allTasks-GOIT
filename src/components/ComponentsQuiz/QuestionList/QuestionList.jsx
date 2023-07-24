import Question from '../Question/Question';
import questions from '../data/questions_css';

console.log(Object.values(questions.Questions));

const QuestionList = () => {
  return (
    <ul>
      {Object.values(questions.Questions).map(el => (
        <Question question={el} />
      ))}
    </ul>
  );
};

export default QuestionList;
