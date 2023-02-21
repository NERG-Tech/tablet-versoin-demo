import AsyncStorage from '@react-native-async-storage/async-storage';
import {combineReducers} from '@reduxjs/toolkit';
import {persistReducer} from 'redux-persist';

import {appReducer} from '../../modules/app/reducer';
const appPersistConfig = {
  storage: AsyncStorage,
  key: 'app',
};

export const reducers = {
  app: persistReducer(appPersistConfig, appReducer),
};

export const rootReducer = combineReducers(reducers);

export type RootState = ReturnType<typeof rootReducer>;