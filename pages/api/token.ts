import axios from 'axios';
import { serialize, parse } from 'cookie';

export default async function getToken(req, res) {
  if (req.method === 'POST') {
    // Process a POST request
    const response = await axios.post(
      'http://127.0.0.1:8000/api/users/token',
      req.body,
      {
        withCredentials: true,
      }
    );

    const cookie = parse(response.headers['set-cookie'][0]);

    res.setHeader(
      'set-cookie',
      serialize('token', cookie.token, {
        httpOnly: true,
        path: '/',
      })
    );
    res.send();
  }
}
