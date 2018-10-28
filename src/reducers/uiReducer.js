import {
  FETCH_RESTAURANTS_REQUEST,
  FETCH_RESTAURANTS_SUCCESS,
  FETCH_RESTAURANTS_FAILURE
} from '../actions/actionTypes'

const initialState = {
  location : { lat: 35.648795, lng: 139.7000483 },
  isLoading: false,
  error    : {}
}

/**
 * UI reducer
 *
 * For managing UI state.
 *
 * @param state
 * @param action
 * @returns {Object}
 */
export default function uiReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_RESTAURANTS_REQUEST: 
      state = {
        ...state,
        isLoading: true
      };
      break;
    case FETCH_RESTAURANTS_SUCCESS: 
      state = {
        ...state,
        isLoading: false
      };
      break;
    case FETCH_RESTAURANTS_FAILURE: 
      state = {
        ...state,
        error    : action.payload.error,
        isLoading: false
      };
      break;
    default: 
      break;
  }
  return state;
}