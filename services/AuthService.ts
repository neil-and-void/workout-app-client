import axios from 'axios';

export default class AuthService {
  constructor() {}

  signUp(values) {
    axios.post('http://127.0.0.1:8000/api/users/signup', values);
  }

  async login(values) {
    return axios.post('http://127.0.0.1:8000/api/users/token', values);
  }
}
