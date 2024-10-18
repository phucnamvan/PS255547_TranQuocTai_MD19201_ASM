import axios from 'axios';

const AxiosInstance = (token = '', contentType = 'application/json') => {
  const axiosInstance = axios.create({
    baseURL: 'https://65ba71c0b4d53c066552ec1c.mockapi.io/',
  });
  axiosInstance.interceptors.request.use(
    async config => {
      config.headers = {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json',
        'Content-Type': contentType,
      };
      return config;
    },
    err => Promise.reject(err),
  );

  axiosInstance.interceptors.response.use(
    res => res.data,
    err => Promise.reject(err),
  );
  return axiosInstance;
};

export default AxiosInstance;
