import axios from 'axios'
import authHeader from './auth-header'

const API_URL = 'https://api.ekoop.id/v01/auth/'

class UserService {
  getProfile() {
    return axios.get(API_URL + 'profile', { headers: authHeader() })
  }
}

export default new UserService()
