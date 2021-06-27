import axios from 'axios';

export default class UserService {
  constructor() {}

  signUp(values) {
    axios.post('http://127.0.0.1:8000/api/users/signup', values);
  }

  login(values) {
    axios.post('http://127.0.0.1:8000/api/users/login', values);
  }
}