import axios from 'axios'
import { apiHeader, authHeader } from './requestHeaders'

const API_URL = process.env.REACT_APP_API_URL

export function login(waNumber, password) {
  return axios
    .post(
      API_URL + '/auth/auth/login/password',
      {
        wa_number: waNumber,
        password: password,
      },
      {
        headers: apiHeader(),
      },
    )
    .then((response) => {
      return response.data
    })
    .catch((reason) => {
      return reason.response.data
    })
}

export function loginOtp(auth_id, otp) {
  return axios
    .post(
      API_URL + '/auth/auth/login/otp',
      {
        auth_id: auth_id,
        otp: otp,
      },
      {
        headers: apiHeader(),
      },
    )
    .then((response) => {
      if (response.data.access_token) {
        localStorage.setItem('token', response.data.access_token)
      }
      return response.data
    })
}

export function changePassword(oldPassword, newPassword) {
  return axios
    .post(
      API_URL + '/auth/profile/change_password',
      {
        old_password: oldPassword,
        new_password: newPassword,
      },
      { headers: authHeader() },
    )
    .then((response) => {
      console.log(response.data)
      return response.data
    })
}

export function changePasswordOtp(otp) {
  return axios
    .post(
      API_URL + '/auth/profile/change_password/otp',
      {
        otp: otp,
      },
      {
        headers: authHeader(),
      },
    )
    .then((response) => {
      console.log(response)
      return response.data
    })
}

export function forgotPassword(waNumber, ktpId) {
  return axios
    .post(
      API_URL + '/auth/auth/forgot_password',
      {
        wa_number: waNumber,
        ktp_id: ktpId,
      },
      {
        headers: apiHeader(),
      },
    )
    .then((response) => {
      return response.data
    })
    .catch((reason) => {
      return reason.response.data
    })
}

export function resetPassword(userId, token, newPassword) {
  console.log(userId)
  return axios
    .post(
      API_URL + '/auth/auth/reset_password',
      {
        user_id: userId,
        token: token,
        new_password: newPassword,
      },
      {
        headers: apiHeader(),
      },
    )
    .then((response) => {
      return response.data
    })
    .catch((reason) => {
      return reason.response.data
    })
}

export function resetPasswordOtp(authId, otp) {
  return axios
    .post(
      API_URL + '/auth/auth/reset_password_otp',
      {
        auth_id: authId,
        otp: otp,
      },
      {
        headers: apiHeader(),
      },
    )
    .then((response) => {
      return response.data
    })
    .catch((reason) => {
      return reason.response.data
    })
}
