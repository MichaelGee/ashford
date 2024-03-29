import axios from 'axios';
import {
  GuestLoginType,
  LoginType,
  RegisterType,
} from '@/types/auth/auth.types.ts';

export const registerEP = (data: RegisterType) =>
  axios.post(`${import.meta.env.VITE_BASEURL}/auth/register`, data);

export const loginEP = (data: LoginType) =>
  axios.post(`${import.meta.env.VITE_BASEURL}/auth/login`, data);

export const loginAsGuest = (data: GuestLoginType) =>
  axios.post(`${import.meta.env.VITE_BASEURL}/auth/initiate/guest/login`, data);
