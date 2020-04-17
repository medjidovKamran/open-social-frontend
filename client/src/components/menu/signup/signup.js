/* eslint-disable no-console */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import s from './signup.module.scss';
import 'react-datepicker/dist/react-datepicker.css';

const Signup = () => {
  const [registerForm, setRegisterForm] = useState({});
  const [birthdayDate, setDate] = useState(new Date());

  const handleInput = event => {
    setRegisterForm({
      ...registerForm,
      [event.target.name]: event.target.value,
    });
  };

  const handleDatePickerChange = birthdayDate => setDate(birthdayDate);

  const getUserData = () => {
    return { ...registerForm, birthdayDate };
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (registerForm.password !== registerForm.confirmPassword)
      alert('Your password and confirmation password do not match.');
    // console.log(registerForm);
    // todo use userData to send to server
    console.log(getUserData());
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
          <DatePicker
            type="date"
            name="birthdayDate"
            selected={birthdayDate}
            dateFormat="MM/dd/yyyy"
            peekNextMonth
            showMonthDropdown
            showYearDropdown
            dropdownMode="select"
            maxDate={new Date()}
            required
            onChange={handleDatePickerChange}
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
        <button className={s.SignupButton} type="button" onClick={handleSubmit}>
          Signup
        </button>
        <p>
          If you already have account please <Link to="/login">login</Link>
        </p>
      </form>
    </main>
  );
};

export default Signup;
