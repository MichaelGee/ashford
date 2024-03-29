import {api} from '../api';

export const currentUserEP = api.get('/auth/check-token-status');
