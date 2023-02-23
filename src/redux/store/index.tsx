import {applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import {PersistConfig, persistReducer, persistStore} from 'redux-persist';
import {
  TypedUseSelectorHook,
  useDispatch as useReduxDispatch,
  useSelector as useReduxSelector,
} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import logger from 'redux-logger';
import {rootReducer, RootState} from '../reducers';
import rootSaga from '../sagas';

const persistConfig: PersistConfig<RootState> = {
  key: 'root',
  storage: AsyncStorage,
  version: 1,
  timeout: 1000,
};

const sagaMiddleware = createSagaMiddleware();

const persistedReducer = persistReducer(persistConfig, rootReducer);
const middleware = [
  ...getDefaultMiddleware({
    thunk: false,
    immutableCheck: false,
    serializableCheck: false,
  }),
  sagaMiddleware,
];
const enhancer = applyMiddleware(...middleware);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: middleware,
  enhancers: [composeWithDevTools(enhancer)],
});

export const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

type AppDispatch = typeof store.dispatch;
export const useDispatch = () => useReduxDispatch<AppDispatch>();
export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;
