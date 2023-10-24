import axios from 'axios';
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
  FILTER_VENDOR_ITEMS_FAILURE,
  FILTER_VENDOR_ITEMS_REQUEST,
  FILTER_VENDOR_ITEMS_SUCCESS
} from '../constantss/vendorConstant';


export const createvendor = (vendorData) => async (dispatch) => {
  dispatch({ type: CREATE_VENDOR_REQUEST });

  try {
    const response = await axios.post('api/v1/createVendors', vendorData);

    dispatch({
      type: CREATE_VENDOR_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({ type: CREATE_VENDOR_FAILURE, error: error.message });
  }
};

export const getAllvendors = () => async (dispatch) => {
  dispatch({ type: GET_ALL_VENDORS_REQUEST });

  try {
    const response = await axios.get('api/v1/allVendors');

    dispatch({
      type: GET_ALL_VENDORS_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({ type: GET_ALL_VENDORS_FAILURE, error: error.message });
  }
};

export const getvendorById = (vendorId) => async (dispatch) => {
  dispatch({ type: GET_VENDOR_BY_ID_REQUEST });

  try {
    const response = await axios.get(`api/v1/Vendors/${vendorId}`);

    dispatch({
      type: GET_VENDOR_BY_ID_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({ type: GET_VENDOR_BY_ID_FAILURE, error: error.message });
  }
};

export const updatevendor = (vendorId, updatedData) => async (dispatch) => {
  dispatch({ type: UPDATE_VENDOR_REQUEST });

  try {
    const response = await axios.put(`api/v1/updateVendors/${vendorId}`, updatedData);

    dispatch({
      type: UPDATE_VENDOR_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({ type: UPDATE_VENDOR_FAILURE, error: error.message });
  }
};

export const deleteVENDOR = (vendorId) => async (dispatch) => {
  dispatch({ type: DELETE_VENDOR_REQUEST });

  try {
    await axios.delete(`api/v1/deleteVendors/${vendorId}`);

    dispatch({
      type: DELETE_VENDOR_SUCCESS,
      payload: { id: vendorId },
    });
  } catch (error) {
    dispatch({ type: DELETE_VENDOR_FAILURE, error: error.message });
  }
};


export const filterItemsvendor = (city) => async (dispatch) => {
  dispatch({ type: FILTER_VENDOR_ITEMS_REQUEST });

  try {
    const response = await axios.get(`/api/v1/filter/vendor?city=${city}`);

    dispatch({
      type: FILTER_VENDOR_ITEMS_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({ type: FILTER_VENDOR_ITEMS_FAILURE, error: error.message });
  }
};