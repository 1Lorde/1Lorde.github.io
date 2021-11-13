import { createContext } from 'react'
import axios from 'axios'
import { apiHeader, authHeader } from './requestHeaders'
import jwt_decode from 'jwt-decode'

export const UserStatus = {
  TRY_TO_LOGIN: 'login',
  RESET_PASS: 'reset',
  WAITING_FOR_OTP: 'otp',
  AUTHORIZED: 'authorized',
  LOGGED_OUT: 'logout',
}

export const UserContext = createContext()

export function userReducer(userState, action) {
  if (action.type === 'request_login') {
    userState = {
      status: UserStatus.TRY_TO_LOGIN,
      temp_token: action.temp_token,
    }
  } else if (action.type === 'request_otp') {
    userState = {
      status: UserStatus.WAITING_FOR_OTP,
      user: action.user,
      company: action.company,
    }
  } else if (action.type === 'login') {
    userState = {
      status: UserStatus.AUTHORIZED,
      user: action.user,
      company: action.company,
    }
  } else if (action.type === 'logout') {
    userState = {
      status: UserStatus.LOGGED_OUT,
    }
  } else if (action.type === 'request_reset') {
    userState = {
      status: UserStatus.RESET_PASS,
      temp_token: action.temp_token,
    }
  }
  return userState
}

const API_URL = 'https://api.ekoop.id/v01'

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

export function getProfile() {
  return axios
    .get(API_URL + '/auth/profile', { headers: authHeader() })
    .then((response) => {
      return response.data.data
    })
    .catch(() => {
      return null
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

export function updateProfile(changes) {
  return axios
    .put(API_URL + '/auth/profile', changes, {
      headers: authHeader(),
    })
    .then((response) => {
      return response.data
    })
    .catch((reason) => {
      return reason.response.data
    })
}

export function getClientProfile() {
  return axios
    .get(API_URL + '/users/profile', { headers: authHeader() })
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

export function clearLocalToken() {
  localStorage.removeItem('token')
}

const TOKEN_EXPIRATION_TIME = 10800

export function isPermanentTokenExist() {
  const token = localStorage.getItem('token')
  if (token) {
    try {
      const data = jwt_decode(token)
      return data.exp - data.iat > TOKEN_EXPIRATION_TIME
    } catch (e) {
      return false
    }
  } else {
    return false
  }
}

export function isTempTokenExist() {
  const token = localStorage.getItem('token')
  if (token) {
    try {
      const data = jwt_decode(token)
      return data.exp - data.iat === TOKEN_EXPIRATION_TIME
    } catch (e) {
      return false
    }
  } else {
    return false
  }
}

export function getUserRole() {
  try {
    const token = jwt_decode(localStorage.getItem('token'))
    return token.role
  } catch (e) {
    clearLocalToken()
    return null
  }
}
