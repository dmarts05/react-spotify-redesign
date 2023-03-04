import { useEffect } from 'react';
import Login from './components/Login/Login';
import { useAuthProvider } from './store/AuthProvider';
import { authReducerCases } from './store/auth-reducer';

const App = () => {
  const [{ token }, dispatch] = useAuthProvider();

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const token = hash.substring(1).split('&')[0].split('=')[1];
      if (token) {
        dispatch({ type: authReducerCases.SET_TOKEN, token });
      }
    }
  }, [token, dispatch]);

  return <>{token ? <div>Test</div> : <Login />}</>;
};

export default App;
