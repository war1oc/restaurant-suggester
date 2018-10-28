import axios from 'axios'

import {
  FETCH_RESTAURANTS_REQUEST,
  FETCH_RESTAURANTS_SUCCESS,
  FETCH_RESTAURANTS_FAILURE,
  SELECT_RESTAURANT
} from './actionTypes'
import {
  API_URL,
  CLIENT_ID,
  CLIENT_SECRET,
  API_VERSION,
  CATEGORY_ID,
  SECTION,
  RADIUS,
} from '../constants/foursquare'

/**
 * Request restaurants action
 * @param {Object} payload
 * @returns {{type: string, payload: {}}}
 */
export const requestRestaurants = (payload={}) => ({type: FETCH_RESTAURANTS_REQUEST, payload})

/**
 * Fetch restaurants success action
 * @param {Object} payload
 * @returns {{type: string, payload: {}}}
 */
export const successFetchRestaurants = (payload={}) => ({type: FETCH_RESTAURANTS_SUCCESS, payload})

/**
 * Fetch restaurants error action
 * @param {Object} payload
 * @returns {{type: string, payload: {}}}
 */
export const errorFetchRestaurants = (payload={}) => ({type: FETCH_RESTAURANTS_FAILURE, payload})

/**
 * Select restaurant action
 * @param {Object} payload
 * @returns {{type: string, payload: {}}}
 */
export const selectRestaurant = (payload={}) => ({type: SELECT_RESTAURANT, payload});

/**
 * Fetch restaurants action
 * @param {Object} location { lat, lng }
 * @returns {{type: string, payload: {}}}
 */
export function fetchRestaurants(location, keyword) {
  return async dispatch => {
    dispatch(requestRestaurants())
    try {
      const response = await axios.get(`${API_URL}/search`, {
        params: {
          client_id    : CLIENT_ID,
          client_secret: CLIENT_SECRET,
          v            : API_VERSION,
          radius       : RADIUS,
          ll           : `${location.lat},${location.lng}`,
          section      : SECTION,
          query        : keyword,
          categoryId   : CATEGORY_ID
        }
      })
      const restaurants = response.data.response.venues
      return dispatch(successFetchRestaurants(restaurants))
    } catch (err) {
      return dispatch(errorFetchRestaurants(err))
    }
  }
}