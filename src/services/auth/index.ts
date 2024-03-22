import {api} from '../api.ts';
import {LoginType, RegisterType} from '@/types/auth/auth.types.ts';

export const registerEP = (data: RegisterType) =>
  api.post('auth/register', data);

export const loginEP = (data: LoginType) => api.post('auth/login', data);
