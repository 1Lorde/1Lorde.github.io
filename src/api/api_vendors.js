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

export function updateVendor(vendor) {
  return axios
    .put(
      API_URL + '/transaction/vendors/' + vendor.id,
      {
        name: vendor.name,
        desc: vendor.desc,
        api_base_url: vendor.api_base_url,
        status: vendor.status,
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

export function createVendor(vendor) {
  return axios
    .post(
      API_URL + '/transaction/vendors',
      {
        name: vendor.name,
        slug: vendor.type,
        desc: vendor.desc,
        api_base_url: vendor.api_base_url,
        api_credential_params:
          vendor.type === 'mobilepulsa'
            ? {
                username: vendor.api_username,
                api_key: vendor.api_key,
              }
            : { uid: vendor.api_username, pin: vendor.api_key },
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
