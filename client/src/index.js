import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { GoogleOAuthProvider } from '@react-oauth/google';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<GoogleOAuthProvider clientId="848843293980-os51f5dot7k5dlcjv0ihbik62l8dlv42.apps.googleusercontent.com">
<App />
</GoogleOAuthProvider>
  
);

reportWebVitals();
