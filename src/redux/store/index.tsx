import {Action, configureStore, ThunkAction} from '@reduxjs/toolkit';
import {PersistConfig, persistReducer, persistStore} from 'redux-persist';
import {rootReducer, RootState} from '../reducers';
import {
  TypedUseSelectorHook,
  useDispatch as useReduxDispatch,
  useSelector as useReduxSelector,
} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfig: PersistConfig<RootState> = {
  key: 'root',
  storage: AsyncStorage,
  version: 1,
  timeout: 1000,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);

type AppDispatch = typeof store.dispatch;
export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;
export const useDispatch = () => useReduxDispatch<AppDispatch>();
export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;
