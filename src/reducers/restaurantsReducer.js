import {
  FETCH_RESTAURANTS_SUCCESS,
  SELECT_RESTAURANT,
  SUGGEST_RESTAURANT
} from '../actions/actionTypes'

const initialState = {
  restaurants       : [],
  selectedRestaurant: {},
  isLoading         : false
}

/**
 * Restaurants reducer
 *
 * @param state
 * @param action
 * @returns {Object}
 */
export default function restaurantsReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_RESTAURANTS_SUCCESS: 
      return Object.assign({}, state, {
        isLoading  : false,
        restaurants: action.payload
      })
    case SELECT_RESTAURANT: 
      return Object.assign({}, state, {
        selectedRestaurant: action.payload
      })
    case SUGGEST_RESTAURANT: 
      return Object.assign({}, state, {
        restaurants       : [action.payload],
        selectedRestaurant: action.payload
      })
    default: 
      break
  }

  return state
}