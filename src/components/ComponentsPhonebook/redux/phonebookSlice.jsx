import { createSlice } from '@reduxjs/toolkit';

export const phonebookInitialState = { contacts: [], filter: '' };

export const phonebookSlice = createSlice({
  name: 'contacts',
  initialState: phonebookInitialState,
  reducers: {
    addContact(state, action) {
      state.contacts.push(action.payload);
    },
    deleteContact(state, action) {
      const tabIndex = state.contacts.find(el => el.id === action.payload);
      state.contacts.splice(tabIndex, 1);
    },
    addFilter(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { addContact, deleteContact, addFilter } = phonebookSlice.actions;
export const phonebookReducer = phonebookSlice.reducer;
