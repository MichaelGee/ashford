import axios, {RawAxiosRequestHeaders, AxiosInstance} from 'axios';

// create an axios instance
export const api: AxiosInstance = axios.create({
  baseURL: 'https://example.com/v1/',
  headers: {} as RawAxiosRequestHeaders,
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
