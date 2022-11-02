import * as types from '../actionTypes';

const initialState = {
  location: "", 
  size: ""
};


const petReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_LOCATION: {
      return {
        ...state,
        location: action.payload,
      };
    }
    case types.SET_SIZE: {
      return {
        ...state,
        size: action.payload
      };
    }
    default: {
      return state;
    }
  };
}

export default petReducer;
