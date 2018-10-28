import {
  FETCH_RESTAURANTS_REQUEST,
  FETCH_RESTAURANTS_SUCCESS,
  FETCH_RESTAURANTS_FAILURE,
  SELECT_RESTAURANT,
  SUGGEST_RESTAURANT
} from './actionTypes'

import { fetchNearbyRestaurants } from '../services/restaurants'

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
export const successFetchRestaurants = (payload=[]) => ({type: FETCH_RESTAURANTS_SUCCESS, payload})

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
 * Suggest restaurant action
 * @param {Object} payload
 * @returns {{type: string, payload: {}}}
 */
export const suggestRestaurant = (payload={}) => ({type: SUGGEST_RESTAURANT, payload});

/**
 * Suggest restaurant action
 * @param {Object} location { lat, lng }
 * @returns {{type: string, payload: {}}}
 */
export function fetchRestaurantSuggestion(location) {
  return async dispatch => {
    dispatch(requestRestaurants())
    try {
      const restaurants         = await fetchNearbyRestaurants(location)
      const suggestedRestaurant = restaurants[Math.floor(Math.random()*restaurants.length)];
      return dispatch(suggestRestaurant(suggestedRestaurant))
    } catch (err) {
      return dispatch(errorFetchRestaurants(err))
    }
  }
}

/**
 * Search restaurants action
 * @param {Object} location { lat, lng }
 * @param {string} keyword Search keyword
 * @returns {{type: string, payload: {}}}
 */
export function searchRestaurants(location, keyword) {
  return async dispatch => {
    dispatch(requestRestaurants())
    try {
      const restaurants = await fetchNearbyRestaurants(location, keyword)
      return dispatch(successFetchRestaurants(restaurants))
    } catch (err) {
      return dispatch(errorFetchRestaurants(err))
    }
  }
}