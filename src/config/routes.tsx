import CreateAccount from '@/pages/createaccount';
import Login from '@/pages/login';

const authRoutes = [
  {path: '/login', element: <Login />},
  {path: '/create-account', element: <CreateAccount />},
  // {path: '/verify-code', element: <VerifyCode />},
];

const inAppRoutes = [];

export {authRoutes, inAppRoutes};
