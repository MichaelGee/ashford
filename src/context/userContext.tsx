// import {Loader} from '@/components/organisms/Loader';
import {
  createContext,
  useState,
  useMemo,
  useCallback,
  useEffect,
  useContext,
} from 'react';
import {useMutation, useQuery} from '@tanstack/react-query';
import {currentUserEP} from '@/services/user';

export const UserContext = createContext(null);

export const UserProvider = ({children}) => {
  // const [user, setUser] = useState<LoggedInUserType>(null);
  const [userIsValid, setUserIsValid] = useState<boolean>(false);
  const [token, setToken] = useState<string>('');
  const [initialLoad, setInitialLoad] = useState<boolean>(true);
  const [loggedIn, setLoggedIn] = useState<boolean>(false);

  const {isSuccess, isFetched} = useQuery({
    queryKey: ['todos'],
    queryFn: () => currentUserEP,
    enabled: !!token,
    retry: 1,
    refetchOnWindowFocus: true,
  });

  const loading = initialLoad || isFetched;

  const handleLogin = useCallback(resp => {
    localStorage?.setItem('accessToken', resp?.data?.data?.accessToken);
    localStorage?.setItem('refreshToken', resp?.data?.data?.refreshToken);
    setToken(resp);
    setLoggedIn(true);
  }, []);

  useEffect(() => {
    const lsToken = localStorage.getItem('token');
    if (lsToken) {
      localStorage.setItem('token', lsToken);
      setLoggedIn(true);
      setToken(lsToken);
    }
    setInitialLoad(false);
  }, []);

  const handleLogout = useCallback(() => {
    localStorage?.removeItem('token');
    localStorage?.removeItem('refreshToken');
    window.location.href = '/auth/login';
    setToken('');
    setLoggedIn(false);
  }, []);

  useEffect(() => {
    if (!isFetched && isSuccess) {
      setUserIsValid(true);
    }
  }, [isSuccess]);

  const value = useMemo(
    () => ({
      //   user,
      //   setUser,
      handleLogin,
      handleLogout,
      loggedIn,
      userIsValid,
      setUserIsValid,
    }),
    [
      //   user,
      //   setUser,
      handleLogin,
      handleLogout,
      loggedIn,
      userIsValid,
      setUserIsValid,
    ]
  );

  return (
    <UserContext.Provider value={value}>
      {/* {loading ? <Loader /> : children} */}
      {children}
    </UserContext.Provider>
  );
};
