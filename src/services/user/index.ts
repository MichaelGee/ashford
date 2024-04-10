import { RefreshTokenType, createQuoteType } from '@/types/auth/auth.types';
import {api} from '../api';
import axios from 'axios';

export const currentUserEP = () => api.get('/auth/check-token-status');

export const createQuoteEP = (data: createQuoteType) =>
    api.post('/order/quote', data);

export const quotesEP = () =>
    api.get('/order/quote/').then(res => res.data); 

export const fetchPackagesEP = () => axios.get(`${import.meta.env.VITE_BASEURL}/packages`).then(res => res.data);
