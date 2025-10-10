import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Login</h1>
      <button
        onClick={() => {
          console.log('Login Feito');
          navigate('/');
        }}
      >
        Login
      </button>
    </div>
  );
};

export default Login;
