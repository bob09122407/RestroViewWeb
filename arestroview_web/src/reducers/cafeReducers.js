import {
    CREATE_CAFE_REQUEST,
    CREATE_CAFE_SUCCESS,
    CREATE_CAFE_FAILURE,
    GET_ALL_CAFES_REQUEST,
    GET_ALL_CAFES_SUCCESS,
    GET_ALL_CAFES_FAILURE,
    GET_CAFE_BY_ID_REQUEST,
    GET_CAFE_BY_ID_SUCCESS,
    GET_CAFE_BY_ID_FAILURE,
    UPDATE_CAFE_REQUEST,
    UPDATE_CAFE_SUCCESS,
    UPDATE_CAFE_FAILURE,
    DELETE_CAFE_REQUEST,
    DELETE_CAFE_SUCCESS,
    DELETE_CAFE_FAILURE,
    FILTER_ITEMS_CAFE_REQUEST,
    FILTER_ITEMS_CAFE_SUCCESS,
    FILTER_ITEMS_CAFE_FAILURE,
  } from '../constantss/cafeConstants';
  

  const initialState = {
    cafes: [],
    cafe: null,
    filteredItemsc: [],
    loading: false,
    error: null,
  };


  
  export const cafeReducer = (state = initialState, action) => {
    switch (action.type) {
      case CREATE_CAFE_REQUEST:
      case GET_ALL_CAFES_REQUEST:
      case GET_CAFE_BY_ID_REQUEST:
      case UPDATE_CAFE_REQUEST:
      case DELETE_CAFE_REQUEST:
        return {
          ...state,
          loading: true,
          error: null,
        };
  
      case CREATE_CAFE_SUCCESS:
        return {
          ...state,
          loading: false,
          cafes: [...state.cafes, action.payload],
        };
  
      case GET_ALL_CAFES_SUCCESS:
        return {
          ...state,
          loading: false,
          cafes: action.payload,
        };
  
      case GET_CAFE_BY_ID_SUCCESS:
        return {
          ...state,
          loading: false,
          cafe: action.payload,
        };
  
      case UPDATE_CAFE_SUCCESS:
        return {
          ...state,
          loading: false,
          cafe: action.payload,
        };
  
      case DELETE_CAFE_SUCCESS:
        return {
          ...state,
          loading: false,
          cafes: state.cafes.filter((rest) => rest._id !== action.payload.id),
        };
  
      case CREATE_CAFE_FAILURE:
      case GET_ALL_CAFES_FAILURE:
      case GET_CAFE_BY_ID_FAILURE:
      case UPDATE_CAFE_FAILURE:
      case DELETE_CAFE_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.error,
        };
  
      default:
        return state;
    }
  };
  

 
 
  
  export const filterItemsReducercafe = (state = initialState, action) => {
    switch (action.type) {
      case FILTER_ITEMS_CAFE_REQUEST:
        return {
          ...state,
          loading: true,
          error: null,
        };
      case FILTER_ITEMS_CAFE_SUCCESS:
        return {
          ...state,
          loading: false,
          filteredItemsc: action.payload.data,
        };
      case FILTER_ITEMS_CAFE_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.error,
        };
      default:
        return state;
    }
  };
  