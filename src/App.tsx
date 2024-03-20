import './App.css';
import {ReactQueryDevtools} from '@tanstack/react-query-devtools';
import {Providers} from './context/providers';

function App() {
  return (
    <>
      <Providers>
        <ReactQueryDevtools initialIsOpen={false} />
      </Providers>
    </>
  );
}

export default App;
