import { configureStore } from '@reduxjs/toolkit';
import { tasksReducer } from 'components/ComponentsTaskManager/redux/tasksReducers';
import { filterReducer } from 'components/ComponentsTaskManager/redux/filterSlice';

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    filters: filterReducer,
  },
});
