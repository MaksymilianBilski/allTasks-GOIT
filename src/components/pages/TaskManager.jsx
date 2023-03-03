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
import { NavLink } from 'react-router-dom';

export const TaskManager = () => {
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <>
      <NavLink to="/allTasks-GOIT">HOMEPAGE</NavLink>
      {error ? (
        <div>
          <Navigation />
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
