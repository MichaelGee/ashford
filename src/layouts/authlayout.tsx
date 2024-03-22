import Navbar from '@/components/molecules/navbar';
import PageWrapper from '@/components/molecules/pagewrapper';
import {Outlet} from 'react-router-dom';
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
      <PageWrapper>
        <Navbar />
        <Outlet />
      </PageWrapper>
    </Box>
  );
};

export default AuthLayout;
