import ActionTypes from '../constants/actions'

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
    case ActionTypes.FETCH_RESTAURANTS_REQUEST: 
      state = {
        ...state,
        isLoading: true
      };
      break;
    case ActionTypes.FETCH_RESTAURANTS_SUCCESS: 
      state = {
        ...state,
        isLoading: false
      };
      break;
    case ActionTypes.FETCH_RESTAURANTS_ERROR: 
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