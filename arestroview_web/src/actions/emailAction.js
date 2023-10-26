// userActions.js

import {
    SAVE_USER_DATA_REQUEST,
    SAVE_USER_DATA_SUCCESS,
    SAVE_USER_DATA_FAILURE,
  } from '../constantss/emailConstant';
  
  import axios from 'axios'; // If using Axios for API requests
  
  export const saveUserData = (email, userId) => async (dispatch) => {
    dispatch({ type: SAVE_USER_DATA_REQUEST });
  
    try {
      // Make an API request to save user data (assuming a server API route)
      const response = await axios.post(`/api/v1/saveemail/${email}/${userId}`);
  
      dispatch({
        type: SAVE_USER_DATA_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: SAVE_USER_DATA_FAILURE,
        payload: error.message,
      });
    }
  };
  