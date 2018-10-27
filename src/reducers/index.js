import { combineReducers } from 'redux'

import restaurantReducer from './restaurantsReducer'
import uiReducer from './uiReducer'

/**
 * Application reducers
 */
export default combineReducers({
  uiStore        : uiReducer,
  restaurantStore: restaurantReducer
})