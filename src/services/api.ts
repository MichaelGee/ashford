import axios, {RawAxiosRequestHeaders, AxiosInstance} from 'axios';

// create an axios instance
export const api: AxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BASEURL,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  } as RawAxiosRequestHeaders,
});

// request interceptor
api.interceptors.request.use(
  async config => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);
