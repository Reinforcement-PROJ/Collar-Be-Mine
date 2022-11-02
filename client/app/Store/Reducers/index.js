import { combineReducers } from '@reduxjs/toolkit';

import userReducer from './UserReducer.js';
import petReducer from './PetReducer.js';
const reducers = combineReducers({
  userReducer,
  petReducer

});

export default reducers;
