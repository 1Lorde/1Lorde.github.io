import axios from 'axios'
import { authHeader } from './requestHeaders'

const API_URL = 'https://api.ekoop.id/v01'

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

export function getProduct(id) {
  return axios
    .get(API_URL + '/transaction/products/' + id, {
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
