import axios from 'axios';

const AxiosInstance = (token = '', contentType = 'application/json') => {
  const axiosInstance = axios.create({
    baseURL: 'https://cro101-b166e76cc76a.herokuapp.com/',
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
