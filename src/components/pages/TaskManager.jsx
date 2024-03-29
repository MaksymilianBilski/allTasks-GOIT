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
import Navigation from 'components/Navigation/Navigation';
import ReturnHomepage from 'components/Navigation/ReturnHomepage';

export const TaskManager = () => {
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <>
      <ReturnHomepage text="back homepage" />
      {error ? (
        <div>
          <Navigation />
          <span>something went wrong</span>
        </div>
      ) : (
        <div
          style={{
            border: '2px solid black',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <AppHeader />
          <TaskForm />
          {isLoading ? <Loader /> : <TasksList />}
        </div>
      )}
    </>
  );
};
