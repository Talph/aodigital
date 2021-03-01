import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import directoryReducer from './directory/directory.reducer';
import caseReducer from './cases/case.reducer';

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  directory: directoryReducer,
  caseItem: caseReducer
});

export default persistReducer(persistConfig, rootReducer);
