import axios from 'axios';
import { API_URL } from 'constants/config';

export const instance = axios.create({
  baseURL: API_URL,
});

instance.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem('accessToken');

    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }

    return config;
  },

  (error) => {
    return error;
  },
);

instance.interceptors.response.use(
  (response) => {
    return response;
  },

  (error) => {
    if (error === undefined) return;

    const { status } = error.response;

    const getUpdatedAccessToken = async () => {
      const refreshToken = localStorage.getItem('refreshToken');
      const { data } = await axios.put(`${API_URL}/login`, null, {
        headers: {
          'Refresh-Token': refreshToken,
        },
      });

      return data;
    };

    const setUpdatedAccessToken = (accessToken: string) => {
      localStorage.setItem('accessToken', accessToken);
    };

    const handleAccessTokenRequest = async () => {
      try {
        const { accessToken } = await getUpdatedAccessToken();
        setUpdatedAccessToken(accessToken);
      } catch (error) {
        console.log('에러');
      }
    };

    if (status === 403) {
      window.location.reload;
      handleAccessTokenRequest();
    }

    return error;
  },
);
