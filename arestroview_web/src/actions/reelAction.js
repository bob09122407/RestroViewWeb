// actions.js

import axios from 'axios'; // Import Axios for making API requests

import {
  CREATE_REEL,
  DELETE_REEL,
  GET_ALL_REELS,
  ADD_COMMENT,
  UPDATE_LIKES_FAILURE,
  UPDATE_LIKES_SUCCESS,
  UPDATE_LIKES_REQUEST
} from '../constantss/reelsConstant';

// Action creators

export const createReel = (reelData) => {
  return async (dispatch) => {
    try {
      const response = await axios.post('/api/v1/createreels', reelData);
      dispatch({
        type: CREATE_REEL,
        payload: response.data, // Assuming the API returns the created reel
      });
    } catch (error) {
      // Handle error
    }
  };
};

export const deleteReel = (reelId) => {
  return async (dispatch) => {
    try {
      await axios.delete(`/api/v1/deletereels/${reelId}`);
      dispatch({
        type: DELETE_REEL,
        payload: reelId,
      });
    } catch (error) {
      // Handle error
    }
  };
};

export const getAllReels = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get('/api/v1/allreels');
      dispatch({
        type: GET_ALL_REELS,
        payload: response.data, // Assuming the API returns the list of reels
      });
    } catch (error) {
      // Handle error
    }
  };
};

export const addCommentToReel = (reelId, commentData) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(`/api/v1/reels/${reelId}/comments`, commentData);
      dispatch({
        type: ADD_COMMENT,
        payload: { reelId, commentData: response.data },
      });
    } catch (error) {
      // Handle error
    }
  };
};



// Action to update or increase likes
export const updateLikes = (reelId) => {
  return async (dispatch) => {
    dispatch({ type: UPDATE_LIKES_REQUEST });

    try {
      // Send a request to your backend API to update the likes
      const response = await axios.put(`/api/v1/reels/${reelId}/likes`);

      dispatch({
        type: UPDATE_LIKES_SUCCESS,
        payload: response.data, // Update the state with the new reel data
      });
    } catch (error) {
      dispatch({
        type: UPDATE_LIKES_FAILURE,
        payload: error.message, // Handle the error
      });
    }
  };
};

