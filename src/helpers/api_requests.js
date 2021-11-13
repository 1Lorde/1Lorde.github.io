import axios from 'axios'
import { authHeader } from './requestHeaders'

const API_URL = 'https://api.ekoop.id/v01'

export function getUsers(searchQuery) {
  return axios
    .get(API_URL + '/auth/user?search=' + searchQuery, { headers: authHeader() })
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
    .put(API_URL + '/users/admin/client/' + clientId, client, {
      headers: authHeader(),
    })
    .then((response) => {
      return response.data
    })
    .catch((reason) => {
      return reason.response.data
    })
}

export function getClients() {
  return axios
    .get(API_URL + '/users/admin/client', { headers: authHeader() })
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

export function getProducts(searchQuery, type) {
  return axios
    .get(API_URL + '/transaction/products?search=' + searchQuery + '&tipe=' + type, {
      headers: authHeader(),
    })
    .then((response) => {
      return response.data
    })
    .catch((reason) => {
      console.log(reason)
    })
}

export function createProduct(product) {
  return axios
    .post(API_URL + '/transaction/products', product, {
      headers: authHeader(),
    })
    .then((response) => {
      return response.data
    })
    .catch((reason) => {
      console.log(reason.response.data)
    })
}

export function updateProduct(product) {
  const changes = {
    name: product.name,
    description: product.description,
    balance_start: product.balance_start,
    percent_rate: product.percent_rate,
    limit_min: product.limit_min,
    limit_max: product.limit_max,
    active: product.active,
    rate_type: product.rate_type,
  }

  return axios
    .put(API_URL + '/transaction/products/' + product.credit_simulation_id, changes, {
      headers: authHeader(),
    })
    .then((response) => {
      return response.data
    })
    .catch((reason) => {
      return reason.response.data
    })
}

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
