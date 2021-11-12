import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { counterReducer } from './reducers/reducers';

export const store = createStore(
  counterReducer,
  composeWithDevTools(applyMiddleware(logger, thunk)),
);
