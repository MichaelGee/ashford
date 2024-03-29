import axios, {RawAxiosRequestHeaders, AxiosInstance} from 'axios';
const token = localStorage.getItem('accessToken');

// create an axios instance
export const api: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASEURL,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    Authorization: token,
  } as RawAxiosRequestHeaders,
});

// request interceptor
api.interceptors.request.use(
  async config => {
    if (token) {
      config.headers.Authorization = `${token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);
