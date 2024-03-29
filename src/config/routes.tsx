// import {Navigate} from 'react-router-dom';
import CreateAccount from '@/pages/createAccount/createAccount';
import Login from '@/pages/login/login';
import LoginAsGuest from '@/pages/loginAsGuest/loginAsGuest';
import VerifyAccount from '@/pages/verifyAccount/verifyAccount';
import Dashboard from '@/pages/dashbaord/dashboard';
import QuoteForm from '@/pages/quoteForm/quoteForm';
import TransactionHistory from '@/pages/transactionHistory/transactionHistory';
import ForgotPin from '@/pages/forgotPin/forgotPin';

const authRoutes = [
  {path: '/login', element: <Login />},
  {path: '/forgot-pin', element: <ForgotPin />},
  {path: '/create-account', element: <CreateAccount />},
  {path: '/login-as-guest', element: <LoginAsGuest />},
  {path: '/verify-account', element: <VerifyAccount />},
];

const inAppRoutes = [
  {path: '/', element: <Dashboard />},
  {path: '/quote', element: <QuoteForm />},
  {path: '/transaction-history', element: <TransactionHistory />},
];
export {authRoutes, inAppRoutes};
