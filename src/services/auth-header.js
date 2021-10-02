export default function authHeader() {
  const token = localStorage.getItem('token')

  if (token) {
    return {
      Authorization: 'Bearer ' + token,
      'Ekoop-Api-Key': '4a6e486c-3167-4112-97e7-5aa690042613',
      'X-Request-Id': '1',
    }
  } else {
    return {}
  }
}
