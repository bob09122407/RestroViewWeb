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



  export const userRegisterReducer = (state = { success: false }, action) => {
    switch (action.type) {
      case USER_REGISTER_REQUEST:
        return { ...state, loading: true };
      case USER_REGISTER_SUCCESS:
        return { ...state, loading: false, success: true, userInfo: action.payload };
      case USER_REGISTER_FAIL:
        return { ...state, loading: false, success: false, error: action.payload };
      default:
        return state;
    }
  };
  
  export const userLoginReducer = (state = { success: false }, action) => {
    switch (action.type) {
      case USER_LOGIN_REQUEST:
        return { ...state, loading: true };
      case USER_LOGIN_SUCCESS:
        return { ...state, loading: false, success: true, userInfo: action.payload };
      case USER_LOGIN_FAIL:
        return { ...state, loading: false, success: false, error: action.payload };
      case USER_LOGOUT:
        return { success: false };
      default:
        return state;
    }
  };

  // export const userLoginReducer = (state = {}, action) => {
  //   switch (action.type) {
  //     case USER_LOGIN_REQUEST:
  //       return { loading: true };
  //     case USER_LOGIN_SUCCESS:
  //       return { loading: false, success: true, userInfo: action.payload };
  //     case USER_LOGIN_FAIL:
  //       return { loading: false, success: false, error: action.payload };
  //     case USER_LOGOUT:
  //       return {};
  //     default:
  //       return state;
  //   }
  // };
  
  
  export const userDetailsReducer = (state = { user: {} }, action) => {
    switch (action.type) {
      case USER_DETAILS_REQUEST:
        return { ...state, loading: true };
      case USER_DETAILS_SUCCESS:
        return { loading: false, user: action.payload };
      case USER_DETAILS_FAIL:
        return { loading: false, error: action.payload };
      case USER_DETAILS_RESET:
        return { user: {} };
      default:
        return state;
    }
  };
  
  export const userUpdatePasswordReducer = (state = {}, action) => {
    switch (action.type) {
      case USER_UPDATE_PASSWORD_REQUEST:
        return { loading: true };
      case USER_UPDATE_PASSWORD_SUCCESS:
        return { loading: false, success: true };
      case USER_UPDATE_PASSWORD_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };
  
  // export const userErrorClearReducer = (state = {}, action) => {
  //   switch (action.type) {
  //     case USER_ERROR_CLEAR:
  //       return {};
  //     default:
  //       return state;
  //   }
  // };
  export const userErrorClearReducer = (state = {}, action) => {
    switch (action.type) {
      case USER_ERROR_CLEAR:
        return { ...state, error: null };
      default:
        return state;
    }
  };
