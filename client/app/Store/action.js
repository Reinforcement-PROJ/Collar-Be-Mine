import * as types from './actionTypes';

export const SET_NAME = (name) => ({
  type: types.SET_NAME,
  payload: name
});

export const SET_EMAIL = (email) => ({
  type: types.SET_EMAIL,
  payload: email
});

export const SET_USERID = (userId) => ({
  type: types.SET_USERID,
  payload: userId
});

export const SET_NEWUSER = (newUser) => ({
  type: types.SET_NEWUSER,
  payload: newUser
});
