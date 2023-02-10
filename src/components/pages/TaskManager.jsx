import AppHeader from '../ComponentsTaskManager/AppHeader/AppHeader';
import TasksList from '../ComponentsTaskManager/TasksList/TasksList';
import TaskForm from '../ComponentsTaskManager/TaskForm/TaskForm';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor } from 'store';

export const TaskManager = () => {
  return (
    <>
      <PersistGate loading={null} persistor={persistor}>
        <AppHeader />
        <TaskForm />
        <TasksList />
      </PersistGate>
    </>
  );
};
