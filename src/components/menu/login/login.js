import React, { useRef } from 'react';
import s from './login.module.scss';
const Login = () => {

  const handleSubmit = (e) => {
      e.preventDefault();
      console.log(emailRef.current.value)
      console.log(passwordRef.current.value)
  }
  const emailRef = useRef(null)
  const passwordRef = useRef(null)
  
  return (
    <main className={s.loginMain}>
      <form className={s.loginForm} onSubmit={handleSubmit}>
        <label htmlFor='email'>
          Email:
          <input ref={emailRef} type='text' />
        </label>
        <label htmlFor='password'>
          Password:
          <input ref={passwordRef} type='password' />
        </label>
        <button>Login</button>
      </form>
    </main>
  );
};

export default Login;
