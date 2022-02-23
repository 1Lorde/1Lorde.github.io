import axios from 'axios'
import { apiHeader, authHeader } from './requestHeaders'

const API_URL = process.env.REACT_APP_API_URL

export function getPackages() {
  return axios
    .get(API_URL + '/users/packages', { headers: apiHeader() })
    .then((response) => {
      return response.data
    })
    .catch((reason) => {
      console.log(reason)
    })
}

export function getAdminPackages() {
  return axios
    .get(API_URL + '/users/admin/packages', { headers: authHeader() })
    .then((response) => {
      return response.data
    })
    .catch((reason) => {
      console.log(reason)
    })
}

export function getPackage(id) {
  return axios
    .get(API_URL + '/users/admin/packages/' + id, { headers: authHeader() })
    .then((response) => {
      return response.data
    })
    .catch((reason) => {
      console.log(reason)
    })
}

export function updatePackage(id, pack) {
  return axios
    .put(
      API_URL + '/users/admin/packages/' + id,
      {
        name: pack.name,
        slug: pack.slug,
        description: pack.description,
        price_monthly: pack.price.monthly,
        price_yearly: pack.price.yearly,
        quota_AO: pack.quota.account_officer,
        quota_nasabah: pack.quota.nasabah,
        active: pack.active === 'true',
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

export function createPackage(pack) {
  return axios
    .post(
      API_URL + '/users/admin/packages',
      {
        name: pack.name,
        slug: pack.slug,
        description: pack.description,
        price_monthly: pack.price.monthly,
        price_yearly: pack.price.yearly,
        quota_AO: pack.quota.account_officer,
        quota_nasabah: pack.quota.nasabah,
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
