// userReducer.js

import {
    SAVE_USER_DATA_REQUEST,
    SAVE_USER_DATA_SUCCESS,
    SAVE_USER_DATA_FAILURE,
  } from '../constantss/emailConstant';
  
  const initialState = {
    data: null, // Store user data here
    loading: false,
    error: null,
  };
  
  export const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case SAVE_USER_DATA_REQUEST:
        return {
          ...state,
          loading: true,
          error: null,
        };
  
      case SAVE_USER_DATA_SUCCESS:
        return {
          ...state,
          data: action.payload, // Update user data with the response
          loading: false,
          error: null,
        };
  
      case SAVE_USER_DATA_FAILURE:
        return {
          ...state,
          data: null,
          loading: false,
          error: action.payload,
        };
  
      default:
        return state;
    }
  };
  
  