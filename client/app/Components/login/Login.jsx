import React, { useState, useEffect } from 'react';
import { useGoogleLogin } from '@react-oauth/google';
import { useDispatch , useSelector} from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { SET_NAME, SET_EMAIL, SET_NEWUSER, SET_USERID } from '../../Store/action.js';
const Login = () => {
  
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const userData = useSelector(state => state.userReducer)

  const handleLogin = useGoogleLogin({
    onSuccess: tokenResponse => {
      fetch('http://localhost:3000/api/auth', {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ accessToken: tokenResponse.access_token }),
      }).then((response) => response.json())
      .then((data) => {
        console.log(data); 
        const [userInfo, newUser] = data;
        dispatch(SET_NAME(userInfo.display_name)); 
        dispatch(SET_EMAIL(userInfo.email));
        dispatch(SET_USERID(userInfo.user_id));
        dispatch(SET_NEWUSER(newUser));
        
        if (newUser) navigate('/home') // /createpet
        else navigate('/home');
      })
    }
  });
  return (
    <div className='login'>
      <h1>PLEASE LOG IN: W GOOGLE FOO </h1>
      <button type="button" onClick={() => handleLogin()}>
        Sign in with Google 🚀{' '}
      </button>
    </div>
  );
};

export default Login;
