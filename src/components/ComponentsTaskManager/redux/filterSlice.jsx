import { createSlice } from '@reduxjs/toolkit';
import { filters } from './tasksConstants';

const filtersInititalState = { status: filters.all };

const filterSlice = createSlice({
  name: 'filters',
  initialState: filtersInititalState,
  reducers: {
    setFilter(state, action) {
      state.status = action.payload;
    },
  },
});
export const filterReducer = filterSlice.reducer;
export const { setFilter } = filterSlice.actions;
export { filterSlice };
