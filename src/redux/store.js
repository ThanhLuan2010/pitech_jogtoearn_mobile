import {createStore, applyMiddleware} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import AsyncStorage from '@react-native-community/async-storage';
import {composeWithDevTools} from 'redux-devtools-extension';
import RootSaga from './sagas';
import promise from './sagas/promise';
import reducers from './reducers';

const sagaMiddleware = createSagaMiddleware();
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const middleWares = [sagaMiddleware, promise];
const persistedReducer = persistReducer(persistConfig, reducers);
if (__DEV__) {
  middleWares.push(logger);
}
const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(...middleWares)),
);
const persister = persistStore(store);
sagaMiddleware.run(RootSaga);
export {store, persister};
