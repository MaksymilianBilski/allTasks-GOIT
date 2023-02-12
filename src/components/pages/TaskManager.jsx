import AppHeader from '../ComponentsTaskManager/AppHeader/AppHeader';
import TasksList from '../ComponentsTaskManager/TasksList/TasksList';
import TaskForm from '../ComponentsTaskManager/TaskForm/TaskForm';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTasks } from 'components/ComponentsTaskManager/operations/operationsTaskManager';
import { useEffect } from 'react';
import {
  getError,
  getIsLoading,
} from 'components/ComponentsTaskManager/redux/tasksSelectors';
import { Loader } from 'components/ComponentsImagesFinder/Loader/Loader';

export const TaskManager = () => {
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  const dispatch = useDispatch();
  useEffect(() => {
    console.log('cos');
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <>
      {error ? (
        <div>
          <span>something went wrong</span>
        </div>
      ) : (
        <>
          <AppHeader />
          <TaskForm />
          {isLoading ? <Loader /> : <TasksList />}
        </>
      )}
    </>
  );
};
