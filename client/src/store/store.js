import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import thunkMiddleware from 'redux-thunk';
import logger from 'redux-logger';
import rootSaga from '../sagas';
import rootReducer from '../reducers/rootReducer';

const sagaMiddleware = createSagaMiddleware();

/**
 * Create redux store that holds the app state.
 */
const store = createStore(rootReducer, compose(
  applyMiddleware(thunkMiddleware, sagaMiddleware, logger)
));

sagaMiddleware.run(rootSaga);

export default store;
