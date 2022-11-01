import * as types from '../actionTypes';

const initialState = {
  display_name: '',
  userId: 0,
  email: '',
  match: [],
  convo: [],
  newUser: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_NAME: {
      return {
        ...state,
        display_name: action.payload,
      };
    }
    case types.SET_EMAIL: {
      return {
        ...state,
        email: action.payload,
      };
    }
    case types.SET_USERID: {
      return {
        ...state,
        userId: action.payload,
      };
    }
    case types.SET_NEWUSER: {
      return {
        ...state,
        newUser: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default userReducer;
