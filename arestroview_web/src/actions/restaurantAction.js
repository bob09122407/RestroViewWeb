import axios from 'axios';
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


export const createRestaurant = (restaurantData) => async (dispatch) => {
  dispatch({ type: CREATE_RESTAURANT_REQUEST });

  try {
    const response = await axios.post('api/v1/createRestaurants', restaurantData);

    dispatch({
      type: CREATE_RESTAURANT_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({ type: CREATE_RESTAURANT_FAILURE, error: error.message });
  }
};

export const getAllRestaurants = () => async (dispatch) => {
  dispatch({ type: GET_ALL_RESTAURANTS_REQUEST });

  try {
    const response = await axios.get('api/v1/allRestaurants');

    dispatch({
      type: GET_ALL_RESTAURANTS_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({ type: GET_ALL_RESTAURANTS_FAILURE, error: error.message });
  }
};
export const getRestaurantById = (restaurantId) => async (dispatch) => {
  dispatch({ type: GET_RESTAURANT_BY_ID_REQUEST });

  try {
    const response = await axios.get(`/api/v1/restaurants/${restaurantId}`);

    if (response.status === 200) {
      // The request was successful (status code 200)
      dispatch({
        type: GET_RESTAURANT_BY_ID_SUCCESS,
        payload: response.data,
      });
    } else {
      // Handle other HTTP status codes as needed
      console.error('Unexpected HTTP status:', response.status);
      dispatch({
        type: GET_RESTAURANT_BY_ID_FAILURE,
        error: 'Failed to fetch restaurant details',
      });
    }
  } catch (error) {
    console.error('Error fetching restaurant details:', error);
    dispatch({
      type: GET_RESTAURANT_BY_ID_FAILURE,
      error: 'Failed to fetch restaurant details',
    });
  }
};

export const updateRestaurant = (restaurantId, updatedData) => async (dispatch) => {
  dispatch({ type: UPDATE_RESTAURANT_REQUEST });

  try {
    const response = await axios.put(`api/v1/updateRestaurants/${restaurantId}`, updatedData);

    dispatch({
      type: UPDATE_RESTAURANT_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({ type: UPDATE_RESTAURANT_FAILURE, error: error.message });
  }
};

export const deleteRestaurant = (restaurantId) => async (dispatch) => {
  dispatch({ type: DELETE_RESTAURANT_REQUEST });

  try {
    await axios.delete(`api/v1/deleteRestaurants/${restaurantId}`);

    dispatch({
      type: DELETE_RESTAURANT_SUCCESS,
      payload: { id: restaurantId },
    });
  } catch (error) {
    dispatch({ type: DELETE_RESTAURANT_FAILURE, error: error.message });
  }
};



export const filterItemsres = ( city) => async (dispatch) => {
  dispatch({ type: FILTER_ITEMS_REQUEST });

  try {
    const response = await axios.get(`/api/v1/filter/res?city=${city}`);

    dispatch({
      type: FILTER_ITEMS_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({ type: FILTER_ITEMS_FAILURE, error: error.message });
  }
};



