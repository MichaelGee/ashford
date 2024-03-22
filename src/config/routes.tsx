import CreateAccount from '@/pages/createAccount/createAccount';
import Login from '@/pages/login/login';
import LoginAsGuest from '@/pages/loginAsGuest/loginAsGuest';

const authRoutes = [
  {path: '/login', element: <Login />},
  {path: '/create-account', element: <CreateAccount />},
  {path: '/login-as-guest', element: <LoginAsGuest />},
  // {path: '/verify-code', element: <VerifyCode />},
];

const inAppRoutes = [];

export {authRoutes, inAppRoutes};
