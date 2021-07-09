import axios from 'axios';

export default class UserService {
  constructor() {}

  signUp(values) {
    axios.post('http://127.0.0.1:8000/api/users/signup', values);
  }

  async login(values) {
    const formData = new FormData();
    formData.append('username', values.email);
    formData.append('password', values.password);
    const accessToken = await axios.post(
      'http://127.0.0.1:8000/api/users/token',
      formData
    );
    return accessToken;
  }
}
