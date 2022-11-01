import React, { useState, useEffect } from 'react';
import { useGoogleLogin } from '@react-oauth/google';

const Login = () => {
  
  const handleLogin = useGoogleLogin({
    onSuccess: tokenResponse => {
      console.log(tokenResponse)
      fetch('http://localhost:3000/api/auth', {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ accessToken: tokenResponse.access_token }),
      }).then((response) => response.json())
      .then((data) => console.log(data))
    }
  });
  

  return (
    <div className='login'>
      <h1>PLEASE LOG IN: W GOOGLE FOO </h1>
      <button type="button" onClick={() => handleLogin()}>
        Sign in with Google 🚀{' '}
      </button>
      {/* <GoogleLogin
  onSuccess={credentialResponse => {
    console.log(credentialResponse);
  }}
  onError={() => {
    console.log('Login Failed');
  }}
/>; */}
    </div>
  );
};

export default Login;
