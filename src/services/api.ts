import axios, {RawAxiosRequestHeaders, AxiosInstance} from 'axios';

// create an axios instance
export const api: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASEURL,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  } as RawAxiosRequestHeaders,
});

// request interceptor
api.interceptors.request.use(
  async config => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      config.headers.Authorization = `${token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);
