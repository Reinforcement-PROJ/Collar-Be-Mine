import { combineReducers } from '@reduxjs/toolkit';

import userReducer from './UserReducer.js';

const reducers = combineReducers({
  user: userReducer,
});

export default reducers;
