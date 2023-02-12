import { createSlice } from '@reduxjs/toolkit';
import {
  fetchTasks,
  addTask,
  deleteTask,
  toggleCompleted,
} from '../operations/operationsTaskManager';

const tasksInitialState = { items: [], isLoading: null, error: null };
const tasksSlice = createSlice({
  name: 'tasks',
  initialState: tasksInitialState,
  extraReducers: {
    [fetchTasks.pending](state) {
      state.isLoading = true;
    },
    [fetchTasks.fulfilled](state, action) {
      state.isLoading = false;
      state.items = action.payload;
      state.error = null;
    },
    [fetchTasks.rejected](state, action) {
      state.error = action.payload;
      state.isLoading = null;
    },
    [addTask.pending](state) {
      state.isLoading = true;
    },
    [addTask.fulfilled](state, action) {
      console.log(state);
      state.isLoading = false;
      state.items.push(action.payload);
      state.error = null;
    },
    [addTask.rejected](state, action) {
      state.error = action.payload;
      state.isLoading = null;
    },
    [deleteTask.pending](state) {
      state.isLoading = true;
    },
    [deleteTask.fulfilled](state, action) {
      state.isLoading = false;
      const tabIndex = state.items.findIndex(el => el.id === action.payload.id);
      state.items.splice(tabIndex, 1);
      state.error = null;
    },
    [deleteTask.rejected](state, action) {
      state.error = action.payload;
      state.isLoading = null;
    },
    [toggleCompleted.pending](state) {
      state.isLoading = true;
    },
    [toggleCompleted.fulfilled](state, action) {
      state.isLoading = false;
      const tabIndex = state.items.findIndex(el => el.id === action.payload.id);
      state.items.splice(tabIndex, 1, action.payload);
    },
    [toggleCompleted.error](state, action) {
      state.error = action.payload;
      state.isLoading = null;
    },
  },
});

export const tasksReducer = tasksSlice.reducer;
export { tasksSlice };
