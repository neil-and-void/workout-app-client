import axios from 'axios';
import { serialize, parse } from 'cookie';

export default async function exercises(req, res) {
  if (req.method === 'GET') {
    const response = await axios.get(
      `${process.env.DEV_BACKEND_SERVER}/exercises`,
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
    console.log(response.data);
    res.send(response.data);
  }
}
