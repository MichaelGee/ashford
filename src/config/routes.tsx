// import {Navigate} from 'react-router-dom';
import CreateAccount from '@/pages/createAccount/createAccount';
import Login from '@/pages/login/login';
import LoginAsGuest from '@/pages/loginAsGuest/loginAsGuest';
import VerifyAccount from '@/pages/verifyAccount/verifyAccount';
import Home from '@/pages/home/home';

const authRoutes = [
  {path: '/login', element: <Login />},
  {path: '/create-account', element: <CreateAccount />},
  {path: '/login-as-guest', element: <LoginAsGuest />},
  {path: '/verify-account', element: <VerifyAccount />},
];

const inAppRoutes = [{path: '/', element: <Home />}];

export {authRoutes, inAppRoutes};
