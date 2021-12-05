import axios from 'axios'
import { authHeader } from './requestHeaders'

const API_URL = 'https://api.ekoop.id/v01'

export function getServices() {
  return axios
    .get(API_URL + '/transaction/services', { headers: authHeader() })
    .then((response) => {
      return response.data
    })
    .catch((reason) => {
      console.log(reason)
    })
}
