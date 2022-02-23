import axios from 'axios'
import { authHeader } from './requestHeaders'

const API_URL = process.env.REACT_APP_API_URL

export function getNasabahCount() {
  return axios
    .get(API_URL + '/auth/stat/nasabah/all', { headers: authHeader() })
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

export function getAccountOfficerCount() {
  return axios
    .get(API_URL + '/auth/stat/account_officer/all', { headers: authHeader() })
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

export function getClientCount() {
  return axios
    .get(API_URL + '/users/stat/clients/all', { headers: authHeader() })
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
