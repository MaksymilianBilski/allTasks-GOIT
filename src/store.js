import { createStore } from 'redux';

const initialState = {
  tasks: {
    id: null,
    text: '',
    completed: false,
  },
};

const rootReducer = (state = initialState, action) => {
  return state;
};

const store = createStore(rootReducer);
