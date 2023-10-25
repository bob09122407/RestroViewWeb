import axios from 'axios';
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
  FILTER_ITEMS_CAFE_FAILURE,
  FILTER_ITEMS_CAFE_REQUEST,
  FILTER_ITEMS_CAFE_SUCCESS
} from '../constantss/cafeConstants';


export const createcafe = (cafeData) => async (dispatch) => {
  dispatch({ type: CREATE_CAFE_REQUEST });

  try {
    const response = await axios.post('api/v1/createCafes', cafeData);

    dispatch({
      type: CREATE_CAFE_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({ type: CREATE_CAFE_FAILURE, error: error.message });
  }
};

export const getAllcafes = () => async (dispatch) => {
  dispatch({ type: GET_ALL_CAFES_REQUEST });

  try {
    const response = await axios.get('api/v1/allCafes');

    dispatch({
      type: GET_ALL_CAFES_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({ type: GET_ALL_CAFES_FAILURE, error: error.message });
  }
};

export const getcafeById = (cafeId) => async (dispatch) => {
  dispatch({ type: GET_CAFE_BY_ID_REQUEST });

  try {
    console.log(cafeId);
    const response = await axios.get(`/api/v1/Cafes/${cafeId}`);
console.log(response);
    dispatch({
      type: GET_CAFE_BY_ID_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({ type: GET_CAFE_BY_ID_FAILURE, error: error.message });
  }
};

export const updateCAFE = (cafeId, updatedData) => async (dispatch) => {
  dispatch({ type: UPDATE_CAFE_REQUEST });

  try {
    const response = await axios.put(`api/v1/updateCafes/${cafeId}`, updatedData);

    dispatch({
      type: UPDATE_CAFE_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({ type: UPDATE_CAFE_FAILURE, error: error.message });
  }
};

export const deletecafe = (cafeId) => async (dispatch) => {
  dispatch({ type: DELETE_CAFE_REQUEST });

  try {
    await axios.delete(`api/v1/deleteCafes/${cafeId}`);

    dispatch({
      type: DELETE_CAFE_SUCCESS,
      payload: { id: cafeId },
    });
  } catch (error) {
    dispatch({ type: DELETE_CAFE_FAILURE, error: error.message });
  }
};


export const filterItemscafe = (city) => async (dispatch) => {
  dispatch({ type: FILTER_ITEMS_CAFE_REQUEST });

  try {
    const response = await axios.get(`/api/v1/filter/cafe?city=${city}`);

    dispatch({
      type: FILTER_ITEMS_CAFE_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({ type: FILTER_ITEMS_CAFE_FAILURE, error: error.message });
  }
};