import axios from 'axios'
import { authHeader } from './requestHeaders'

const API_URL = 'https://api.ekoop.id/v01'

export function getProfile() {
  return axios
    .get(API_URL + '/auth/profile', { headers: authHeader() })
    .then((response) => {
      return response.data.data
    })
    .catch(() => {
      return null
    })
}

export function updateProfile(changes) {
  return axios
    .put(API_URL + '/auth/profile', changes, {
      headers: authHeader(),
    })
    .then((response) => {
      return response.data
    })
    .catch((reason) => {
      return reason.response.data
    })
}

export function getClientProfile() {
  return axios
    .get(API_URL + '/users/profile', { headers: authHeader() })
    .then((response) => {
      return response.data.data
    })
    .catch((reason) => {
      if (reason.response.status === 403) {
        console.log(reason.message)
        return null
      }
    })
}
