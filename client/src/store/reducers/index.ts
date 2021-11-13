import { combineReducers } from 'redux';
import { counterReducer } from './reducers';

export const createRootReducer = () => combineReducers({ reducers: counterReducer });
