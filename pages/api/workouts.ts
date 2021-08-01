import axios from 'axios';
import { serialize, parse } from 'cookie';

export default async function workouts(req, res) {
  if (req.method === 'POST') {
    const response = await axios.post(
      `${process.env.DEV_BACKEND_SERVER}/workouts`,
      req.body,
      {
        withCredentials: true,
        headers: {
          Cookie: serialize('token', req.cookies.token, {
            sameSite: true,
            httpOnly: true,
          }),
        },
      }
    );
    res.send(response.data);
  }
}
