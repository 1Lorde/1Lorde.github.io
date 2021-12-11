import axios from 'axios'
import { authHeader } from './requestHeaders'
import { Contents, Titles } from '../helpers/notification_types'

const API_URL = 'https://api.ekoop.id/v01'

export function getNotifications(skip) {
  return axios
    .get(API_URL + '/users/notification?skip=' + skip, { headers: authHeader() })
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

export function createNotification(sender, service, extra) {
  const notification = {
    sender: sender,
    service: service,
    title: Titles[service],
    content: Contents[service] + extra,
    reference_id: '',
  }

  return axios
    .post(API_URL + '/users/notification', notification, {
      headers: authHeader(),
    })
    .then((response) => {
      return response.data
    })
    .catch((reason) => {
      console.log(reason.response.data)
    })
}
