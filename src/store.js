import { configureStore } from '@reduxjs/toolkit';
import { tasksReducer } from 'components/ComponentsTaskManager/redux/tasksReducers';
import { filterReducer } from 'components/ComponentsTaskManager/redux/filterSlice';
import { persistReducer, persistStore } from 'redux-persist';
import { combineReducers } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  tasks: tasksReducer,
  filters: filterReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({ reducer: persistedReducer });
const persistor = persistStore(store);
export { store, persistor };
