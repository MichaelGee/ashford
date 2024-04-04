import {Navbar} from '@/components/molecules/navbar';
import { AuthPageWrapper } from '@/components/molecules/pagewrapper';
import {Outlet} from 'react-router-dom';
import {Toaster} from 'sonner';
import Box from 'ui-box';

const AuthLayout = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      height="100vh"
      width="100%"
      background="#EFF3FB"
    >
      <AuthPageWrapper>
        <Navbar />
        <Toaster richColors />
        <Outlet />
      </AuthPageWrapper>
    </Box>
  );
};

export default AuthLayout;
