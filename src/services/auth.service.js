import axios from 'axios'

const API_URL = 'https://api.ekoop.id/v01/auth/auth/'

class AuthService {
  login(waNumber, password) {
    // return axios
    //   .post(
    //     API_URL + 'login/password',
    //     {
    //       wa_number: waNumber,
    //       password: password,
    //     },
    //     {
    //       headers: {
    //         'Ekoop-Api-Key': '4a6e486c-3167-4112-97e7-5aa690042613',
    //         'X-Request-Id': '1',
    //       },
    //     },
    //   )
    //   .then((response) => {
    //     if (response.data.auth_id) {
    //       localStorage.setItem('token', response.data.auth_id)
    //     }
    //     return response.data
    //   })
    localStorage.setItem('token', 'TOKEN_HERE')
  }

  logout() {
    localStorage.removeItem('token')
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('token'))
  }

  isAuthenticated() {
    if (localStorage.getItem('token')) {
      return true
    }
    return false
  }
}

export default new AuthService()
