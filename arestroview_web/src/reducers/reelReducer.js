// reducers.js

import {
    CREATE_REEL,
    DELETE_REEL,
    GET_ALL_REELS,
    ADD_COMMENT,
    UPDATE_LIKES_FAILURE,
    UPDATE_LIKES_REQUEST,
    UPDATE_LIKES_SUCCESS
  } from '../constantss/reelsConstant';
  
  const initialState = {
    reels: [],
    loading: false,
    success: false,
    error: null,
  };
  
  export function reelsReducer(state = initialState, action) {
    switch (action.type) {
      case CREATE_REEL:
        // Handle creating a new reel in the state
        return {
          ...state,
          reels: [...state.reels, action.payload],
        };
  
      case DELETE_REEL:
        // Handle deleting a reel by ID in the state
        return {
          ...state,
          reels: state.reels.filter((reel) => reel.id !== action.payload),
        };
  
      case GET_ALL_REELS:
        return {
          ...state,
          loading: false,
          reelall: action.payload,
        }; // In a real application, you would update the state with fetched data
  
      case ADD_COMMENT:
        // Handle adding a comment to a reel in the state
        return {
          ...state,
          reels: state.reels.map((reel) =>
            reel.id === action.payload.reelId
              ? {
                  ...reel,
                  comments: [...reel.comments, action.payload.comment],
                }
              : reel
          ),
        };
  
      default:
        return state;
    }
  }
  


  
 
  export const likesReducer = (state = initialState, action) => {
    switch (action.type) {
      case UPDATE_LIKES_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case UPDATE_LIKES_SUCCESS:
        return {
          ...state,
          loading: false,
          success: true,
        };
      case UPDATE_LIKES_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
 
  