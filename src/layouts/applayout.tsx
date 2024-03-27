import {InAppNavBar} from '@/components/molecules/navbar';
import PageWrapper from '@/components/molecules/pagewrapper';
import {Outlet} from 'react-router-dom';
import {Toaster} from 'sonner';
import Box from 'ui-box';

const Applayout = () => {
  return (
    <Box display="flex" flexDirection="column" height="100vh" width="100%">
      <PageWrapper>
        <InAppNavBar />
        <Toaster richColors />
        <Outlet />
      </PageWrapper>
    </Box>
  );
};

export default Applayout;
