import {
    CREATE_VENDOR_REQUEST,
    CREATE_VENDOR_SUCCESS,
    CREATE_VENDOR_FAILURE,
    GET_ALL_VENDORS_REQUEST,
    GET_ALL_VENDORS_SUCCESS,
    GET_ALL_VENDORS_FAILURE,
    GET_VENDOR_BY_ID_REQUEST,
    GET_VENDOR_BY_ID_SUCCESS,
    GET_VENDOR_BY_ID_FAILURE,
    UPDATE_VENDOR_REQUEST,
    UPDATE_VENDOR_SUCCESS,
    UPDATE_VENDOR_FAILURE,
    DELETE_VENDOR_REQUEST,
    DELETE_VENDOR_SUCCESS,
    DELETE_VENDOR_FAILURE,
    FILTER_VENDOR_ITEMS_REQUEST,
    FILTER_VENDOR_ITEMS_SUCCESS,
    FILTER_VENDOR_ITEMS_FAILURE,
    CREATE_ADVERTISEMENT_REQUEST,
    CREATE_ADVERTISEMENT_SUCCESS,
    CREATE_ADVERTISEMENT_FAILURE,
    GET_ADVERTISEMENTS_REQUEST,
    GET_ADVERTISEMENTS_SUCCESS,
    GET_ADVERTISEMENTS_FAILURE,
  } from '../constantss/vendorConstant';
  

  const initialState = {
    vendors: [],
    vendor: null,
    filteredItemsv: [],
    loading: false,
    error: null,
    creatingAdvertisement: false,
    creatingAdvertisementError: null,
    advertisements: [],
    fetchingAdvertisements: false,
    fetchingAdvertisementsError: null,
  };


  
  export const vendorReducer = (state = initialState, action) => {
    switch (action.type) {
      case CREATE_VENDOR_REQUEST:
      case GET_ALL_VENDORS_REQUEST:
      case GET_VENDOR_BY_ID_REQUEST:
      case UPDATE_VENDOR_REQUEST:
      case DELETE_VENDOR_REQUEST:
        return {
          ...state,
          loading: true,
          error: null,
        };
  
      case CREATE_VENDOR_SUCCESS:
        return {
          ...state,
          loading: false,
          vendors: [...state.vendors, action.payload],
        };
  
      case GET_ALL_VENDORS_SUCCESS:
        return {
          ...state,
          loading: false,
          vendors: action.payload,
        };
  
      case GET_VENDOR_BY_ID_SUCCESS:
        return {
          ...state,
          loading: false,
          vendor: action.payload,
        };
  
      case UPDATE_VENDOR_SUCCESS:
        return {
          ...state,
          loading: false,
          VENDOR: action.payload,
        };
  
      case DELETE_VENDOR_SUCCESS:
        return {
          ...state,
          loading: false,
          vendors: state.vendors.filter((rest) => rest._id !== action.payload.id),
        };
  
      case CREATE_VENDOR_FAILURE:
      case GET_ALL_VENDORS_FAILURE:
      case GET_VENDOR_BY_ID_FAILURE:
      case UPDATE_VENDOR_FAILURE:
      case DELETE_VENDOR_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.error,
        };
  
      default:
        return state;
    }
  };
  

 
 
  
  export const filterItemsReducervendor = (state = initialState, action) => {
    switch (action.type) {
      case FILTER_VENDOR_ITEMS_REQUEST:
        return {
          ...state,
          loading: true,
          error: null,
        };
      case FILTER_VENDOR_ITEMS_SUCCESS:
        return {
          ...state,
          loading: false,
          filteredItemsv: action.payload.data,
        };
      case FILTER_VENDOR_ITEMS_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.error,
        };
      default:
        return state;
    }
  };
  


  // reducer.js

  export const advertisementReducer = (state = initialState, action) => {
    switch (action.type) {
      case CREATE_ADVERTISEMENT_REQUEST:
        return {
          ...state,
          creatingAdvertisement: true,
          creatingAdvertisementError: null,
        };
      case CREATE_ADVERTISEMENT_SUCCESS:
        return {
          ...state,
          creatingAdvertisement: false,
          advertisements: [...state.advertisements, action.payload],
        };
      case CREATE_ADVERTISEMENT_FAILURE:
        return {
          ...state,
          creatingAdvertisement: false,
          creatingAdvertisementError: action.payload,
        };
      case GET_ADVERTISEMENTS_REQUEST:
        return {
          ...state,
          fetchingAdvertisements: true,
          fetchingAdvertisementsError: null,
        };
      case GET_ADVERTISEMENTS_SUCCESS:
        return {
          ...state,
          fetchingAdvertisements: false,
          advertisements: action.payload.data.data, // Updated property name
        };
      case GET_ADVERTISEMENTS_FAILURE:
        return {
          ...state,
          fetchingAdvertisements: false,
          fetchingAdvertisementsError: action.payload,
        };
      default:
        return state;
    }
  };
  