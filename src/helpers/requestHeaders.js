import { isPermanentTokenExist } from './user'

export function authHeader() {
  if (isPermanentTokenExist()) {
    const token = localStorage.getItem('token')
    return {
      Authorization: 'Bearer ' + token,
      'Ekoop-Api-Key': '4a6e486c-3167-4112-97e7-5aa690042613',
      'X-Request-Id': '1',
    }
  } else {
    return {}
  }
}

export function apiHeader() {
  return {
    'Ekoop-Api-Key': '4a6e486c-3167-4112-97e7-5aa690042613',
    'X-Request-Id': '1',
  }
}
