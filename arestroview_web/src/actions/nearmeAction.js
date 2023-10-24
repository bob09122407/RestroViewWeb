import axios from 'axios';
import {
  FILTER_LOCATIONS_REQUEST,
  FILTER_LOCATIONS_SUCCESS,
  FILTER_LOCATIONS_FAILURE,
  OPEN_GOOGLE_MAPS_REQUEST,
  OPEN_GOOGLE_MAPS_SUCCESS,
  OPEN_GOOGLE_MAPS_FAILURE,
  FOLLOW_REQUEST,
  FOLLOW_SUCCESS,
  FOLLOW_FAIL,
  SEARCH_SUCCESS,
  SEARCH_FAILURE,
  SEARCH_REQUEST
} from '../constantss/nearmeConstant';

// Action to filter locations
export const filterLocations = (latitude, longitude, category) => async (dispatch) => {
  dispatch({ type: FILTER_LOCATIONS_REQUEST });

  try {
    const response = await axios.get(`/api/v1/filter/location`, {
      params: {
        latitude,
        longitude,
        category,
      },
    });

    dispatch({
      type: FILTER_LOCATIONS_SUCCESS,
      payload: response.data.data, // Assuming the API response has a 'data' field
    });
  } catch (error) {
    dispatch({
      type: FILTER_LOCATIONS_FAILURE,
      payload: error.response.data.message,
    });
  }
};

// mapActions.js

export const openGoogleMaps = (latitude, longitude) => async (dispatch) => {
  dispatch({ type: OPEN_GOOGLE_MAPS_REQUEST });

  try {
    if (!latitude || !longitude) {
      throw new Error('Please provide "latitude" and "longitude');
    }

    const googleMapsUrl = `https://www.google.com/maps?q=${latitude},${longitude}`;
    
    // Open Google Maps in a new window
    window.open(googleMapsUrl, '_blank');

    dispatch({ type: OPEN_GOOGLE_MAPS_SUCCESS });
  } catch (error) {
    dispatch({ type: OPEN_GOOGLE_MAPS_FAILURE, payload: error.message });
  }
};


export const followRestaurantOrCafe = (userId, restaurantOrCafeOrVendorId) => async (dispatch) => {
  try {
    dispatch({ type: FOLLOW_REQUEST });

    const response = await axios.post(`/api/v1/user/${userId}/follow/${restaurantOrCafeOrVendorId}`);
    console.log('Response:', response);

    if (response.data) {
      dispatch({ type: FOLLOW_SUCCESS, payload: response.data.message });
    } else {
      dispatch({ type: FOLLOW_FAIL, payload: 'Response data is missing' });
    }
  } catch (error) {
    console.error('Error:', error);
    dispatch({ type: FOLLOW_FAIL, payload: error.response ? error.response.data : 'Unknown error' });
  }
};


//search api
export const search = (name) => async (dispatch) => {
  dispatch({ type: SEARCH_REQUEST });
  
  try {
    const response = await axios.get(`/api/v1/search?name=${name}`);
    
    if (response.status === 200) {
      // Use response.data to access the JSON data
      const data = response.data;
      dispatch({ type: SEARCH_SUCCESS, payload: data });
    } else {
      // Handle non-successful responses
      dispatch({ type: SEARCH_FAILURE, payload: 'Non-successful response' });
    }
  } catch (error) {
    dispatch({ type: SEARCH_FAILURE, payload: error.message });
  }
};


