import axios from 'axios'
import { authHeader } from './requestHeaders'

const API_URL = 'https://api.ekoop.id/v01'

export function getNasabahList(skip, searchQuery, status) {
  return axios
    .get(
      API_URL + '/nasabah/nasabah?search=' + searchQuery + '&status=' + status + '&skip=' + skip,
      {
        headers: authHeader(),
      },
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

export function getNasabah(id) {
  return axios
    .get(API_URL + '/nasabah/nasabah/' + id, { headers: authHeader() })
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

export function updateNasabah(id, nasabah) {
  return axios
    .put(
      API_URL + '/nasabah/nasabah/' + id,
      {
        name: nasabah.name,
        ktp_id: nasabah.ktp_id,
        wa_number: nasabah.wa_number,
        address: nasabah.address,
        reason: nasabah.reason,
        group: nasabah.group,
        active: nasabah.active === 'true',
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

export function createNasabah(nasabah) {
  return axios
    .post(API_URL + '/nasabah/nasabah', nasabah, {
      headers: authHeader(),
    })
    .then((response) => {
      return response.data
    })
    .catch((reason) => {
      return reason.response.data
    })
}
