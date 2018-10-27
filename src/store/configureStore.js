import { createStore } from 'redux'
import { applyMiddleware } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import reducers from '../reducers'

/**
 * Creates Redux store from initial state and reducers.
 * Then configures it by applying middlewares.
 *
 * @param {Object} initialState
 * @returns {Object}
 */
export default function configureStore(initialState) {
  const middleware = applyMiddleware(
    thunk,
    logger
  )

  const store = createStore(
    reducers,
    initialState,
    composeWithDevTools(
      middleware
    )
  )

  return store
}