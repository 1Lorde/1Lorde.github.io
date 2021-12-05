import { isPermanentTokenExist } from '../helpers/user'

function createUUID() {
  return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
    (c ^ (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))).toString(16),
  )
}

export function authHeader() {
  if (isPermanentTokenExist()) {
    const token = localStorage.getItem('token')
    return {
      Authorization: 'Bearer ' + token,
      'Ekoop-Api-Key': '4a6e486c-3167-4112-97e7-5aa690042613',
      'X-Request-Id': createUUID(),
    }
  } else {
    return {}
  }
}

export function apiHeader() {
  return {
    'Ekoop-Api-Key': '4a6e486c-3167-4112-97e7-5aa690042613',
    'X-Request-Id': createUUID(),
  }
}
