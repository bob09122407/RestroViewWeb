import {
    CREATE_ADVERTISEMENT_REQUEST,
    CREATE_ADVERTISEMENT_SUCCESS,
    CREATE_ADVERTISEMENT_FAILURE,
    DELETE_ADVERTISEMENT_REQUEST,
    DELETE_ADVERTISEMENT_SUCCESS,
    DELETE_ADVERTISEMENT_FAILURE,
    GET_CAFE_ADVERTISEMENTS_SUCCESS,
    GET_CAFE_ADVERTISEMENTS_REQUEST,
    GET_CAFE_ADVERTISEMENTS_FAILURE,
    GET_RESTAURANT_ADVERTISEMENTS_REQUEST,
    GET_RESTAURANT_ADVERTISEMENTS_SUCCESS,
    GET_RESTAURANT_ADVERTISEMENTS_FAILURE
  } from '../constantss/advertisementConstant';
  
 // Initial state for advertisements
const initialStateAdvertisements = {
  advertisements: [],
  loading: false,
  error: null,
};

// Reducer for advertisements
export const advertisementReducer = (state = initialStateAdvertisements, action) => {
  switch (action.type) {
    case CREATE_ADVERTISEMENT_REQUEST:
    case DELETE_ADVERTISEMENT_REQUEST:
  
      return {
        ...state,
        loading: true,
        error: null,
      };
    case CREATE_ADVERTISEMENT_SUCCESS:
      return {
        ...state,
        loading: false,
        advertisements: [...state.advertisements, action.payload.data],
      };
    case DELETE_ADVERTISEMENT_SUCCESS:
      return {
        ...state,
        loading: false,
        advertisements: state.advertisements.filter((ad) => ad._id !== action.payload.id),
      };
    
    case CREATE_ADVERTISEMENT_FAILURE:
    case DELETE_ADVERTISEMENT_FAILURE:
   
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};

// Reducer for restaurant advertisements
const initialStateRestaurant = {
  advertisements: [],
  loading: false,
  error: null,
};

export const restaurantAdvertisementReducer = (state = initialStateRestaurant, action) => {
  switch (action.type) {
    case GET_RESTAURANT_ADVERTISEMENTS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case GET_RESTAURANT_ADVERTISEMENTS_SUCCESS:
      return {
        ...state,
        loading: false,
        advertisements: action.payload.data,
      };
    case GET_RESTAURANT_ADVERTISEMENTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};

// Reducer for cafe advertisements
const initialStateCafe = {
  advertisements: [],
  loading: false,
  error: null,
};

export const cafeAdvertisementReducer = (state = initialStateCafe, action) => {
  switch (action.type) {
    case GET_CAFE_ADVERTISEMENTS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case GET_CAFE_ADVERTISEMENTS_SUCCESS:
      return {
        ...state,
        loading: false,
        advertisements: action.payload.data,
      };
    case GET_CAFE_ADVERTISEMENTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};
