import './App.css';
import {ReactQueryDevtools} from '@tanstack/react-query-devtools';
import {Providers} from './context/providers';
import RouterComponent from './config/router';

function App() {
  return (
    <>
      <Providers>
        <ReactQueryDevtools initialIsOpen={false} />
        <RouterComponent />
      </Providers>
    </>
  );
}

export default App;
