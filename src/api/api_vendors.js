import axios from 'axios'
import { authHeader } from './requestHeaders'

const API_URL = 'https://api.ekoop.id/v01'

export function getVendors(searchQuery, status) {
  return axios
    .get(API_URL + '/transaction/vendors?search=' + searchQuery + '&status=' + status, {
      headers: authHeader(),
    })
    .then((response) => {
      return response.data
    })
    .catch((reason) => {
      console.log(reason)
    })
}

export function getVendor(id) {
  return axios
    .get(API_URL + '/transaction/vendors/' + id, {
      headers: authHeader(),
    })
    .then((response) => {
      return response.data
    })
    .catch((reason) => {
      console.log(reason)
    })
}
