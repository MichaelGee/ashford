import CreateAccount from '@/pages/createAccount';
import Login from '@/pages/login';
import LoginAsGuest from '@/pages/loginAsGuest';

const authRoutes = [
  {path: '/login', element: <Login />},
  {path: '/create-account', element: <CreateAccount />},
  {path: '/login-as-guest', element: <LoginAsGuest />},
  // {path: '/verify-code', element: <VerifyCode />},
];

const inAppRoutes = [];

export {authRoutes, inAppRoutes};
