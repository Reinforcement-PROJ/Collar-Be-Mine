import React from 'react';
import ReactDOM from 'react-dom/client'
import App from './app/App'
import { Provider } from 'react-redux';
// import {store} from './app/Store/store.js'
import { BrowserRouter } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <Provider store = {store}>
  <BrowserRouter>
    <GoogleOAuthProvider clientId='940116043384-dfgh0vnnb4ctaf5639jq58jv0t0tuqq0.apps.googleusercontent.com'>
        <App />
    </GoogleOAuthProvider>
      </BrowserRouter>
    // </Provider>

);