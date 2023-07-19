import { QuizLayout } from 'components/ComponentsQuiz/QuizLayout/QuizLayout';
import ReturnHomepage from 'components/Navigation/ReturnHomepage';

export const Quiz = () => {
  
  return (
    <div>
      <ReturnHomepage text="back homepage" />
      <QuizLayout />
    </div>
  );
};
