/* eslint-disable no-console */
import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import s from './login.module.scss';

const Login = () => {
  const emailReference = useRef(null);
  const passwordReference = useRef(null);

  
  const handleSubmit = event => {
    event.preventDefault();
    console.log(emailReference.current.value);
    console.log(passwordReference.current.value);
  };

  return (
    <main className={s.loginMain}>
      <form className={s.loginForm} onSubmit={handleSubmit}>
        <label htmlFor="email">
          Email:
          <input ref={emailReference} id="email" type="email" required />
        </label>
        <label htmlFor="password">
          Password:
          <input ref={passwordReference} id="email" type="password" required />
        </label>
        <button type="button">Login</button>
        <p>
          If you don`t have account please <Link to="/signup">signup</Link>
        </p>
      </form>
    </main>
  );
};

export default Login;
