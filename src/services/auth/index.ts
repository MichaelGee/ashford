import axios from 'axios';
import {
  GuestLoginType,
  LoginType,
  RefreshTokenType,
  RegisterType,
  forgotPinOTPType,
  forgotPinType,
  resetPinType,
} from '@/types/auth/auth.types.ts';
import { api } from '../api';

export const registerEP = (data: RegisterType) =>
  axios.post(`${import.meta.env.VITE_BASEURL}/auth/register`, data);

export const loginEP = (data: LoginType) =>
  axios.post(`${import.meta.env.VITE_BASEURL}/auth/login`, data);

export const loginAsGuest = (data: GuestLoginType) =>
  axios.post(`${import.meta.env.VITE_BASEURL}/auth/initiate/guest/login`, data);

export const forgotPinEP = (data: forgotPinType) =>
  axios.post(`${import.meta.env.VITE_BASEURL}/auth/forgot/password`, data);

export const forgotPinOTPEP = (data: forgotPinOTPType) =>
  axios.post(`${import.meta.env.VITE_BASEURL}/auth/verify/forgot/password/otp`, data);

export const resetPinEP = (data: resetPinType) =>
  axios.patch(`${import.meta.env.VITE_BASEURL}/auth/reset/password`, data);

export const refreshTokenEP = (data: RefreshTokenType) =>
  api.post('/auth/refresh-token', data);
  
 