import axios from 'axios'
import { authHeader } from './requestHeaders'

const API_URL = process.env.REACT_APP_API_URL

export function getUsers(skip, searchQuery, status, role, sort) {
  return axios
    .get(
      API_URL +
        '/auth/user?search=' +
        searchQuery +
        '&status=' +
        status +
        '&role=' +
        role +
        '&sort=' +
        sort +
        '&skip=' +
        skip,
      {
        headers: authHeader(),
      },
    )
    .then((response) => {
      return response.data
    })
    .catch((reason) => {
      console.log(reason.message)
      if (reason.response.status === 403) {
        console.log(reason.message)
        return null
      }
    })
}

export function getUser(id) {
  return axios
    .get(API_URL + '/auth/user/' + id, { headers: authHeader() })
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

export function updateUser(user) {
  return axios
    .put(
      API_URL + '/auth/user/' + user.id,
      {
        wa_number: user.wa_number,
        name: user.name,
        address: user.address,
        role: user.role,
        status: user.status,
        // avatar: user.avatar,
        // ktp_image: user.ktp_image,
      },
      {
        headers: authHeader(),
      },
    )
    .then((response) => {
      return response.data
    })
    .catch((reason) => {
      return reason.response.data
    })
}

export function createUser(user) {
  return axios
    .post(API_URL + '/auth/user', user, {
      headers: authHeader(),
    })
    .then((response) => {
      return response.data
    })
    .catch((reason) => {
      return reason.response.data
    })
}
