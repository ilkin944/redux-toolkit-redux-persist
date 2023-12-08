import { combineReducers } from '@reduxjs/toolkit';
import counterReducer from './counterReducer';
import todoReducer from './todoReducer';
import authReducer from './authReducer';

const rootReducer = combineReducers({
  counter: counterReducer,
  todo: todoReducer,
  auth: authReducer,
});

export default rootReducer;
