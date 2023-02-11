import { configureStore } from '@reduxjs/toolkit';
import { tasksReducer } from 'components/ComponentsTaskManager/redux/tasksSlice';
import { filterReducer } from 'components/ComponentsTaskManager/redux/filterSlice';
import { combineReducers } from '@reduxjs/toolkit';
import { phonebookReducer } from 'components/ComponentsPhonebook/redux/phonebookSlice';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  tasks: tasksReducer,
  filters: filterReducer,
  phonebook: phonebookReducer,
});

const persisedtReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({ reducer: persisedtReducer });
const persistor = persistStore(store);

export { store, persistor };
