import {
    CREATE_RESTAURANT_REQUEST,
    CREATE_RESTAURANT_SUCCESS,
    CREATE_RESTAURANT_FAILURE,
    GET_ALL_RESTAURANTS_REQUEST,
    GET_ALL_RESTAURANTS_SUCCESS,
    GET_ALL_RESTAURANTS_FAILURE,
    GET_RESTAURANT_BY_ID_REQUEST,
    GET_RESTAURANT_BY_ID_SUCCESS,
    GET_RESTAURANT_BY_ID_FAILURE,
    UPDATE_RESTAURANT_REQUEST,
    UPDATE_RESTAURANT_SUCCESS,
    UPDATE_RESTAURANT_FAILURE,
    DELETE_RESTAURANT_REQUEST,
    DELETE_RESTAURANT_SUCCESS,
    DELETE_RESTAURANT_FAILURE,
    FILTER_ITEMS_REQUEST,
    FILTER_ITEMS_SUCCESS,
    FILTER_ITEMS_FAILURE,
  } from '../constantss/restaurantConstant';
  

  const initialState = {
    restaurants: [],
    restaurant: null,
    filteredItems: [],
    loading: false,
    error: null,
  };


  
  export const restaurantReducer = (state = initialState, action) => {
    switch (action.type) {
      case CREATE_RESTAURANT_REQUEST:
      case GET_ALL_RESTAURANTS_REQUEST:
      case GET_RESTAURANT_BY_ID_REQUEST:
      case UPDATE_RESTAURANT_REQUEST:
      case DELETE_RESTAURANT_REQUEST:
        return {
          ...state,
          loading: true,
          error: null,
        };
  
      case CREATE_RESTAURANT_SUCCESS:
        return {
          ...state,
          loading: false,
          restaurants: [...state.restaurants, action.payload],
        };
  
      case GET_ALL_RESTAURANTS_SUCCESS:
        return {
          ...state,
          loading: false,
          restaurants: action.payload,
        };
  
      case GET_RESTAURANT_BY_ID_SUCCESS:
        return {
          ...state,
          loading: false,
          restaurant: action.payload,
        };
  
      case UPDATE_RESTAURANT_SUCCESS:
        return {
          ...state,
          loading: false,
          restaurant: action.payload,
        };
  
      case DELETE_RESTAURANT_SUCCESS:
        return {
          ...state,
          loading: false,
          restaurants: state.restaurants.filter((rest) => rest._id !== action.payload.id),
        };
  
      case CREATE_RESTAURANT_FAILURE:
      case GET_ALL_RESTAURANTS_FAILURE:
      case GET_RESTAURANT_BY_ID_FAILURE:
      case UPDATE_RESTAURANT_FAILURE:
      case DELETE_RESTAURANT_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.error,
        };
  
      default:
        return state;
    }
  };
  

 
 
  
  export const filterItemsReducerres = (state = initialState, action) => {
    switch (action.type) {
      case FILTER_ITEMS_REQUEST:
        return {
          ...state,
          loading: true,
          error: null,
        };
      case FILTER_ITEMS_SUCCESS:
        return {
          ...state,
          loading: false,
          filteredItems: action.payload.data,
        };
      case FILTER_ITEMS_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.error,
        };
      default:
        return state;
    }
  };

  
