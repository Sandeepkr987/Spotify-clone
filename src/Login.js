import React from 'react';
import './Login.css';
import { loginUrl } from './spotify';
//work of logo
//login button
function Login() {

  return (
    <div className="login">
      <img 
      src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" 
      alt="Error" />
      <a href={loginUrl}>LOGIN SPOTIFY</a>
    </div>
  )
};

export default Login;