import {
    FILTER_LOCATIONS_REQUEST,
    FILTER_LOCATIONS_SUCCESS,
    FILTER_LOCATIONS_FAILURE,
  } from '../constantss/nearmeConstant';
  
  // mapReducer.js
import {
  OPEN_GOOGLE_MAPS_REQUEST,
  OPEN_GOOGLE_MAPS_SUCCESS,
  OPEN_GOOGLE_MAPS_FAILURE,
  FOLLOW_REQUEST,
  FOLLOW_SUCCESS,
  FOLLOW_FAIL,
  SEARCH_FAILURE,
  SEARCH_REQUEST,
  SEARCH_SUCCESS,
  FETCH_FOLLOWING_FAIL,
  FETCH_FOLLOWING_REQUEST,
  FETCH_FOLLOWING_SUCCESS
} from '../constantss/nearmeConstant';

  const initialState = {
    locations: [],
    loading: false,
    error: null,
    results: null,
    followingList: [],
  };
  
  export const locationsReducer = (state = initialState, action) => {
    switch (action.type) {
      case FILTER_LOCATIONS_REQUEST:
        return {
          ...state,
          loading: true,
          error: null,
        };
  
      case FILTER_LOCATIONS_SUCCESS:
        return {
          ...state,
          locations: action.payload,
          loading: false,
        };
  
      case FILTER_LOCATIONS_FAILURE:
        return {
          ...state,
          locations: [],
          loading: false,
          error: action.payload,
        };
  
      default:
        return state;
    }
  };
  



export const mapReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_GOOGLE_MAPS_REQUEST:
      return { ...state, loading: true, error: null };

    case OPEN_GOOGLE_MAPS_SUCCESS:
      return { ...state, loading: false, error: null };

    case OPEN_GOOGLE_MAPS_FAILURE:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};





export const followReducer = (state = {}, action) => {
  switch (action.type) {
    case FOLLOW_REQUEST:
      return { loading: true };
    case FOLLOW_SUCCESS:
      return { loading: false, success: true, data: action.payload };
    case FOLLOW_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};




export const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_REQUEST:
      return { ...state, loading: true };
    case SEARCH_SUCCESS:
      return { ...state, loading: false, results: action.payload, error: null };
    case SEARCH_FAILURE:
      return { ...state, loading: false, results: null, error: action.payload };
    default:
      return state;
  }
};


export const followingReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_FOLLOWING_REQUEST:
      return { ...state, loading: true };
    case FETCH_FOLLOWING_SUCCESS:
      return { ...state, loading: false, followingList: action.payload, error: null };
    case FETCH_FOLLOWING_FAIL:
      return { ...state, loading: false, followingList: [], error: action.payload };
    default:
      return state;
  }
};

  