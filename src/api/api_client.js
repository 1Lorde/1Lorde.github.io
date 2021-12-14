import axios from 'axios'
import { apiHeader, authHeader } from './requestHeaders'

const API_URL = 'https://api.ekoop.id/v01'

export function getClient(id) {
  return axios
    .get(API_URL + '/users/admin/client/' + id, { headers: authHeader() })
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

export function updateClient(clientId, client) {
  return axios
    .put(
      API_URL + '/users/admin/client/' + clientId,
      {
        company: client.company,
        contact_dir_name: client.contact.dir_name,
        address: client.address,
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

export function registerClient(client) {
  return axios
    .post(API_URL + '/users/clients/register', client, {
      headers: apiHeader(),
    })
    .then((response) => {
      return response.data
    })
    .catch((reason) => {
      return reason.response.data
    })
}

export function approveClient(clientId) {
  const status = {
    status: 'ACTIVE',
  }
  return axios
    .put(API_URL + '/users/admin/client/status/' + clientId, status, {
      headers: authHeader(),
    })
    .then((response) => {
      return response.data
    })
    .catch((reason) => {
      return reason.response.data
    })
}

export function rejectClient(clientId) {
  const status = {
    status: 'REJECT',
  }
  return axios
    .put(API_URL + '/users/admin/client/status/' + clientId, status, {
      headers: authHeader(),
    })
    .then((response) => {
      return response.data
    })
    .catch((reason) => {
      return reason.response.data
    })
}

export function getClients(skip, searchQuery, status, sort) {
  if (sort === '') sort = 'created_at:desc'

  return axios
    .get(
      API_URL +
        '/users/admin/client?search=' +
        searchQuery +
        '&status=' +
        status +
        '&sort=' +
        sort +
        '&skip=' +
        skip,
      { headers: authHeader() },
    )
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
