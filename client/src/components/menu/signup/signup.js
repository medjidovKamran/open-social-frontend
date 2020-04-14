/* eslint-disable no-console */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import s from './signup.module.scss';

const Signup = () => {
  const [registerForm, setRegisterForm] = useState({});

  const handleInput = event => {
    setRegisterForm({
      ...registerForm,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (registerForm.password !== registerForm.confirmPassword)
      alert('Your password and confirmation password do not match.');
    console.log(registerForm);
  };

  return (
    <main className={s.signupMain}>
      <form className={s.signupForm} onSubmit={handleSubmit}>
        <h1>Register</h1>
        <p>* all fields are required</p>
        <label htmlFor="first-name">
          First name:
          <input
            type="text"
            id="first-name"
            name="firstName"
            required
            onChange={handleInput}
          />
        </label>
        <label htmlFor="last-name">
          Last name:
          <input
            type="text"
            id="last-name"
            name="lastName"
            required
            onChange={handleInput}
          />
        </label>
        <label htmlFor="email">
          Email:
          <input
            type="email"
            id="email"
            name="email"
            required
            onChange={handleInput}
          />
        </label>
        <label htmlFor="birthday">
          Birthday:
          <input
            type="text"
            id="birthday"
            name="birthdayDate"
            required
            onChange={handleInput}
          />
        </label>
        <label htmlFor="password">
          Password:
          <input
            type="password"
            id="password"
            name="password"
            required
            onChange={handleInput}
          />
        </label>
        <label htmlFor="confirm-password">
          Confirm:
          <input
            type="password"
            id="confirm-password"
            name="confirmPassword"
            required
            onChange={handleInput}
          />
        </label>
        <button type="button">Signup</button>
        <p>
          If you already have account please <Link to="/login">login</Link>
        </p>
      </form>
    </main>
  );
};

export default Signup;
