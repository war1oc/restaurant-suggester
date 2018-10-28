import axios from 'axios'

import {
  API_URL,
  CLIENT_ID,
  CLIENT_SECRET,
  API_VERSION,
  CATEGORY_ID,
  SECTION,
  RADIUS,
} from '../constants/foursquare'

export async function fetchNearbyRestaurants(location, keyword='') {
  return await axios.get(`${API_URL}/search`, {
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
    }).then((response) => response.data.response.venues)
}