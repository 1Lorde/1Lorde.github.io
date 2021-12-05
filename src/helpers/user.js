import { createContext } from 'react'
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

export function clearLocalToken() {
  localStorage.removeItem('token')
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
