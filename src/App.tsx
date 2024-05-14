import './App.css';
import {ReactQueryDevtools} from '@tanstack/react-query-devtools';
import {Providers} from './context/providers';
import RouterComponent from './config/router';

function App() {
  return (
    <div className=" max-w-3xl mx-auto  ">
      <Providers>
        <ReactQueryDevtools initialIsOpen={false} />
        <RouterComponent />
      </Providers>
    </div>
  );
}

export default App;
