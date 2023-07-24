import questions from '../data/questions_css';

const AnswerPanelBoolean = ({ handleClick }) => {
  return (
    <div>
      <button onClick={handleClick}>TRUE</button>
      <button onClick={handleClick}>FALSE</button>
    </div>
  );
};

const AnswerPanelMultiple = ({ handleClick, questionID }) => {
  const dupa = Object.keys(questions.Answers).map(el => el === questionID);
  console.log(dupa);
  return (
    <div>
      <button onClick={handleClick}>A: </button>
      <button onClick={handleClick}>B: </button>
      <button onClick={handleClick}>C: </button>
      <button onClick={handleClick}>D: </button>
    </div>
  );
};

export { AnswerPanelBoolean, AnswerPanelMultiple };
