import axios, {
  AxiosResponse,
  RawAxiosRequestHeaders,
  AxiosInstance,
} from 'axios';

// create an axios instance
export const api: AxiosInstance = axios.create({
  baseURL: '',
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
