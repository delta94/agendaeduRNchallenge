import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from './ducks';
import sagas from './sagas';

const sagaMonitor = __DEV__ ? console.tron.createSagaMonitor() : null;
const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

const middleware = [sagaMiddleware];

const composer = __DEV__
  ? compose(
    applyMiddleware(...middleware),
    console.tron.createEnhancer(),
	  )
  : applyMiddleware(...middleware);

const store = createStore(reducers, composer);

sagaMiddleware.run(sagas);

export default store;
