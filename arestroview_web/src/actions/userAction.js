import axios from 'axios';
import {
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT,
  USER_DETAILS_REQUEST,
  USER_DETAILS_SUCCESS,
  USER_DETAILS_FAIL,
  USER_DETAILS_RESET,
  USER_UPDATE_PASSWORD_REQUEST,
  USER_UPDATE_PASSWORD_SUCCESS,
  USER_UPDATE_PASSWORD_FAIL,
  USER_ERROR_CLEAR,
} from '../constantss/userConstants';

export const register = (name, email, password) => async (dispatch) => {
  try {
    dispatch({ type: USER_REGISTER_REQUEST });

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const { data } = await axios.post('/api/v1/register', { name, email, password }, config);

    dispatch({
      type: USER_REGISTER_SUCCESS,
      payload: data.user,
    });

    // dispatch({
    //   type: USER_LOGIN_SUCCESS,
    //   payload: data,
    // });

    localStorage.setItem('userInfo', JSON.stringify(data.user));
  } catch (error) {
    dispatch({
      type: USER_REGISTER_FAIL,
      payload: error.response.data.message,
    });
  }
};

// userActions.js

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: USER_LOGIN_REQUEST });

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const { data } = await axios.post('/api/v1/login', { email, password }, config);

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data.user,
    });

    dispatch({ type: USER_ERROR_CLEAR }); // Clear any previous errors

    localStorage.setItem('userInfo', JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload: error.response ? error.response.data.message : 'Login failed. Please try again later.',
    });
  }
};


  // Logout User
  // export const logout = () => async (dispatch) => {
  //   try {
  //     await axios.get(`/api/v1/logout`);
  
  //     dispatch({ type: LOGOUT_SUCCESS });
  //   } catch (error) {
  //     dispatch({ type: LOGOUT_FAIL, payload: error.response.data.message });
  //   }
  // };
  
  export const getUserDetails = (userId) => async (dispatch) => {
    try {
      dispatch({ type: USER_DETAILS_REQUEST });
  
      const { data } = await axios.get(`/api/v1/me/${userId}`); // Update the route to match your API
  
      dispatch({
        type: USER_DETAILS_SUCCESS,
        payload: data.user, // Assuming the user data is in a 'user' field in the response
      });
    } catch (error) {
      dispatch({
        type: USER_DETAILS_FAIL,
        payload: error.response ? error.response.data.message : 'Unknown error',
      });
    }
  };

  
  
  
  
  

export const updatePassword = (oldPassword, newPassword, confirmPassword) => async (dispatch) => {
  try {
    dispatch({ type: USER_UPDATE_PASSWORD_REQUEST });

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    await axios.put('/api/v1/password/updatePassword', { oldPassword, newPassword, confirmPassword }, config);

    dispatch({ type: USER_UPDATE_PASSWORD_SUCCESS });
  } catch (error) {
    dispatch({
      type: USER_UPDATE_PASSWORD_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const clearUserError = () => (dispatch) => {
  dispatch({ type: USER_ERROR_CLEAR });
};
