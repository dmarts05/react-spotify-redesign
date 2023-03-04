import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { AuthProvider } from './store/AuthProvider';
import { authInitialState, authReducer } from './store/auth-reducer';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider initialState={authInitialState} reducer={authReducer}>
      <App />
    </AuthProvider>
  </React.StrictMode>
);
