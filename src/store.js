import { configureStore } from '@reduxjs/toolkit';
import { tasksReducer } from 'components/ComponentsTaskManager/redux/tasksSlice';
import { filterReducer } from 'components/ComponentsTaskManager/redux/filterSlice';
import { combineReducers } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
  tasks: tasksReducer,
  filters: filterReducer,
});

const store = configureStore({ reducer: rootReducer });

export { store };
