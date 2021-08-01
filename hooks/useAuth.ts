import axios from 'axios';

const getTokenSilently = async () => {
  const response = await axios.get('http://localhost:3000/api/token', {
    withCredentials: true,
  });
  return response.data.token;
};

export const useAuth = () => {
  return {
    getTokenSilently,
  };
};
