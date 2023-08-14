import {
  AnswerPanelBoolean,
  AnswerPanelMultiple,
} from '../AnswerPanel/AnswerPanel';

const Question = ({ quizType, question }) => {
  return (
    <li>
      <header>
        <p> {quizType}</p>
        <h1>{question.text}</h1>
        {question.boolean === 'true' ? (
          <AnswerPanelBoolean />
        ) : (
          <AnswerPanelMultiple questionID={question.id} />
        )}
      </header>
    </li>
  );
};

export default Question;
