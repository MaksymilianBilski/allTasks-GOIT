import AppHeader from '../ComponentsTaskManager/AppHeader/AppHeader';
import TasksList from '../ComponentsTaskManager/TasksList/TasksList';
import TaskForm from '../ComponentsTaskManager/TaskForm/TaskForm';

export const TaskManager = () => {
  return (
    <>
      <AppHeader />
      <TaskForm />
      <TasksList />
    </>
  );
};
