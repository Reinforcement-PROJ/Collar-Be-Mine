import { configureStore } from '@reduxjs/toolkit';
import reducer from './Reducers/index';
import { composeWithDevTools } from 'redux-devtools-extension';

export const store = configureStore({ reducer, devTools: true });
