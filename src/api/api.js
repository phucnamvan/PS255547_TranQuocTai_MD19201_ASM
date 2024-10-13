import AxiosInstance from '../helper/AxiosInstance';

const axios = AxiosInstance();

const login = async data => {
  try {
    const {email, password} = data;
    const body = {
      email: email,
      password: password,
    };
    const res = await axios.post('/users/login', body);
    return res;
  } catch (error) {
    throw error;
  }
};

const register = async data => {
  try {
    const {email, password, name} = data;
    const body = {
      email: email,
      password: password,
      name: name,
    };
    const res = await axios.post('/users/register', body);
    return res;
  } catch (error) {
    throw error;
  }
};

export const getCategories = async () => {
  try {
    const res = await axios.get('/categories');
    return res;
  } catch (error) {
    throw error;
  }
};

export const getProducts = async category => {
  try {
    const res = await axios.get(`/products?category=${category}`);
    return res;
  } catch (error) {
    throw error;
  }
};

export const getProduct = async id => {
  try {
    const res = await axios.get(`/products/${id}`);
    return res;
  } catch (error) {
    throw error;
  }
};

export {login, register};
