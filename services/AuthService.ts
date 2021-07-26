import axios from 'axios';

export default class AuthService {
  constructor() {}

  async signUp(values) {
    return await axios.post('http://127.0.0.1:8000/api/users/signup', values);
  }

  async login(values) {
    return await axios.post('http://localhost:3000/api/token', values, {
      withCredentials: true,
    });
  }
}
