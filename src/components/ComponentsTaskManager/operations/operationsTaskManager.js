import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const tasksFind = axios.create({
  baseURL: 'https://63dcc7db2308e3e319ed88f4.mockapi.io/',
});

export const fetchTasks = createAsyncThunk(
  'tasks/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await tasksFind.get('tasks');
      return response.data;
    } catch (e) {
      throw thunkAPI.rejectWithValue(e);
    }
  }
);

export const addTask = createAsyncThunk(
  'tasks/addTask',
  async (text, thunkAPI) => {
    try {
      const response = await tasksFind.post('tasks', { text });
      return response.data;
    } catch (e) {
      throw thunkAPI.rejectWithValue(e);
    }
  }
);

export const deleteTask = createAsyncThunk(
  'tasks/deleteTask',
  async (id, thunkAPI) => {
    try {
      const response = await tasksFind.delete(`tasks/${id}`);
      return response.data;
    } catch (e) {
      throw thunkAPI.rejectWithValue(e);
    }
  }
);

export const toggleCompleted = createAsyncThunk(
  'tasks/toggleCompleted',
  async (task, thunkAPI) => {
    console.log(task);
    try {
      const response = await tasksFind.put(`tasks/${task.id}`, {
        isCompleted: !task.isCompleted,
      });
      return response.data;
    } catch (e) {
      throw thunkAPI.rejectWithValue(e);
    }
  }
);
