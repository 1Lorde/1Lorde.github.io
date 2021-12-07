import axios from 'axios'
import { authHeader } from './requestHeaders'

const API_URL = 'https://api.ekoop.id/v01'

export function getNotifications() {
  return axios
    .get(API_URL + '/users/notification', { headers: authHeader() })
    .then((response) => {
      return response.data
    })
    .catch((reason) => {
      if (reason.response.status === 403) {
        console.log(reason.message)
        return null
      }
    })
}

export function getNotification(id) {
  return axios
    .get(API_URL + '/users/notification/' + id, { headers: authHeader() })
    .then((response) => {
      return response.data
    })
    .catch((reason) => {
      if (reason.response.status === 403) {
        console.log(reason.message)
        return null
      }
    })
}
