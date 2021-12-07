import axios from 'axios'
import { authHeader } from './requestHeaders'

const API_URL = 'https://api.ekoop.id/v01'

export function getServices(searchQuery, category, active, marginBy) {
  return axios
    .get(
      API_URL +
        '/transaction/services?search=' +
        searchQuery +
        '&category=' +
        category +
        '&active=' +
        active +
        '&margin_by=' +
        marginBy,
      { headers: authHeader() },
    )
    .then((response) => {
      return response.data
    })
    .catch((reason) => {
      console.log(reason)
    })
}

export function getService(id) {
  return axios
    .get(API_URL + '/transaction/services/' + id, { headers: authHeader() })
    .then((response) => {
      return response.data
    })
    .catch((reason) => {
      console.log(reason)
    })
}

export function updateService(id, service) {
  return axios
    .put(API_URL + '/transaction/services/' + id, service, {
      headers: authHeader(),
    })
    .then((response) => {
      return response.data
    })
    .catch((reason) => {
      return reason.response.data
    })
}

export function getServicesMargin() {
  return axios
    .get(API_URL + '/transaction/service_margin', {
      headers: authHeader(),
    })
    .then((response) => {
      return response.data
    })
    .catch((reason) => {
      return reason.response.data
    })
}

export function updateServicesMargin(servicesMargin) {
  return axios
    .put(
      API_URL + '/transaction/service_margin',
      {
        margin_by: servicesMargin.margin_by,
        nominal: servicesMargin.nominal,
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
