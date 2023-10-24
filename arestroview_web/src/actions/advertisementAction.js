// import axios from 'axios';
// import {

//   CREATE_ADVERTISEMENT_REQUEST,
//   CREATE_ADVERTISEMENT_SUCCESS,
//   CREATE_ADVERTISEMENT_FAILURE,
//   DELETE_ADVERTISEMENT_REQUEST,
//   DELETE_ADVERTISEMENT_SUCCESS,
//   DELETE_ADVERTISEMENT_FAILURE,
//   GET_ADVERTISEMENTS_REQUEST,
//   GET_ADVERTISEMENTS_SUCCESS,
//   GET_ADVERTISEMENTS_FAILURE,
// } from '../constantss/advertisementConstant';

// // Action creators
// export const createAdvertisement = (advertisementData) => async (dispatch) => {
//   dispatch({ type: CREATE_ADVERTISEMENT_REQUEST });

//   try {
//     const response = await axios.post(`api/v1/createAdvertisement`, advertisementData);

//     dispatch({
//       type: CREATE_ADVERTISEMENT_SUCCESS,
//       payload: response.data,
//     });
//   } catch (error) {
//     dispatch({ type: CREATE_ADVERTISEMENT_FAILURE, error: error.message });
//   }
// };

// export const deleteAdvertisement = (advertisementId) => async (dispatch) => {
//   dispatch({ type: DELETE_ADVERTISEMENT_REQUEST });

//   try {
//     const response = await axios.delete(`api/v1/delete/advertisement/${advertisementId}`);

//     dispatch({
//       type: DELETE_ADVERTISEMENT_SUCCESS,
//       payload: { id: advertisementId },
//     });
//   } catch (error) {
//     dispatch({ type: DELETE_ADVERTISEMENT_FAILURE, error: error.message });
//   }
// };

// export const getRestaurantAdvertisements = (city) => async (dispatch) => {
//   dispatch({ type: GET_ADVERTISEMENTS_REQUEST });

//   try {
//     const response = await axios.get(`/api/v1/getrestaurantadvertisementdetails?city=${city}`);

//     dispatch({
//       type: GET_ADVERTISEMENTS_SUCCESS,
//       payload: response.data,
//     });
//   } catch (error) {
//     dispatch({ type: GET_ADVERTISEMENTS_FAILURE, error: error.message });
//   }
// };

// export const getCafeAdvertisements = (city) => async (dispatch) => {
//   dispatch({ type: GET_ADVERTISEMENTS_REQUEST });

//   try {
//     const response = await axios.get(`/api/v1/getcafeadvertisementdetails?city=${city}`);

//     dispatch({
//       type: GET_ADVERTISEMENTS_SUCCESS,
//       payload: response.data,
//     });
//   } catch (error) {
//     dispatch({ type: GET_ADVERTISEMENTS_FAILURE, error: error.message });
//   }
// };


import axios from 'axios';
import {
  CREATE_ADVERTISEMENT_REQUEST,
  CREATE_ADVERTISEMENT_SUCCESS,
  CREATE_ADVERTISEMENT_FAILURE,
  DELETE_ADVERTISEMENT_REQUEST,
  DELETE_ADVERTISEMENT_SUCCESS,
  DELETE_ADVERTISEMENT_FAILURE,
  GET_RESTAURANT_ADVERTISEMENTS_REQUEST,
  GET_RESTAURANT_ADVERTISEMENTS_SUCCESS,
  GET_RESTAURANT_ADVERTISEMENTS_FAILURE,
  GET_CAFE_ADVERTISEMENTS_REQUEST,
  GET_CAFE_ADVERTISEMENTS_SUCCESS,
  GET_CAFE_ADVERTISEMENTS_FAILURE,
} from '../constantss/advertisementConstant';

// Action creators
export const createAdvertisement = (advertisementData) => async (dispatch) => {
  dispatch({ type: CREATE_ADVERTISEMENT_REQUEST });

  try {
    const response = await axios.post('/api/v1/createAdvertisement', advertisementData);

    dispatch({
      type: CREATE_ADVERTISEMENT_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({ type: CREATE_ADVERTISEMENT_FAILURE, error: error.message });
  }
};

export const deleteAdvertisement = (advertisementId) => async (dispatch) => {
  dispatch({ type: DELETE_ADVERTISEMENT_REQUEST });

  try {
    const response = await axios.delete(`/api/v1/deleteAdvertisement/${advertisementId}`);

    dispatch({
      type: DELETE_ADVERTISEMENT_SUCCESS,
      payload: { id: advertisementId },
    });
  } catch (error) {
    dispatch({ type: DELETE_ADVERTISEMENT_FAILURE, error: error.message });
  }
};

// export const getAdvertisements = (city, category) => async (dispatch) => {
//   dispatch({ type: GET_ADVERTISEMENTS_REQUEST });

//   try {
//     const response = await axios.get(`/api/v1/getadvertisementdetails?city=${city}&category=${category}`);

//     dispatch({
//       type: GET_ADVERTISEMENTS_SUCCESS,
//       payload: response.data,
//     });
//   } catch (error) {
//     dispatch({ type: GET_ADVERTISEMENTS_FAILURE, error: error.message });
//   }
// };

export const getRestaurantAdvertisements = (city) => async (dispatch) => {
  dispatch({ type: GET_RESTAURANT_ADVERTISEMENTS_REQUEST });

  try {
    const response = await axios.get(`/api/v1/getrestaurantadvertisementdetails?city=${city}`);

    dispatch({
      type: GET_RESTAURANT_ADVERTISEMENTS_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({ type: GET_RESTAURANT_ADVERTISEMENTS_FAILURE, error: error.message });
  }
};

export const getCafeAdvertisements = (city) => async (dispatch) => {
  dispatch({ type: GET_CAFE_ADVERTISEMENTS_REQUEST });

  try {
    const response = await axios.get(`/api/v1/getcafeadvertisementdetails?city=${city}`);

    dispatch({
      type: GET_CAFE_ADVERTISEMENTS_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({ type: GET_CAFE_ADVERTISEMENTS_FAILURE, error: error.message });
  }
};

