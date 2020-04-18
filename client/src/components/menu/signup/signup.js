/* eslint-disable no-console */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import s from './signup.module.scss';
import errorStyles from '../../validation/validation.module.scss';

const initialValues = {
  birthdayDate: '',
  confirmPassword: '',
  email: '',
  firstName: '',
  lastName: '',
  password: '',
};

const SCHEMA_VALUES = {
  MAX_NAME_LENGTH: 50,
  MAX_PASSWORD_LENGTH: 30,
  MIN_NAME_LENGTH: 2,
  MIN_PASSWORD_LENGTH: 6,
  REG_EXP_NAME: /^[/a-zA-Zа-яА-Я\-a-zA-Zа-яА-Я]+$/,
};

const validationSchema = Yup.object({
  birthdayDate: Yup.date().required('* Birthday date is required'),
  confirmPassword: Yup.string()
    .min(SCHEMA_VALUES.MIN_PASSWORD_LENGTH, '* Should be 6 characters or more')
    .max(SCHEMA_VALUES.MAX_PASSWORD_LENGTH, '* Should be 30 characters or less')
    .required('* Confirm password is required')
    .oneOf([Yup.ref('password'), null], '* Passwords should match'),
  email: Yup.string()
    .email('* Invalid email address')
    .required('* Email is required'),
  firstName: Yup.string()
    .matches(
      SCHEMA_VALUES.REG_EXP_NAME,
      '* First name should contain only letters',
    )
    .min(SCHEMA_VALUES.MIN_NAME_LENGTH, '* Should be 2 characters or more')
    .max(SCHEMA_VALUES.MAX_NAME_LENGTH, '* Should be 50 characters or less')
    .required('* First name is required'),
  lastName: Yup.string()
    .matches(
      SCHEMA_VALUES.REG_EXP_NAME,
      '* Last name should contain only letters',
    )
    .min(SCHEMA_VALUES.MIN_NAME_LENGTH, '* Should be 2 characters or more')
    .max(SCHEMA_VALUES.MAX_NAME_LENGTH, '* Should be 50 characters or less')
    .required('* Last name is required'),
  password: Yup.string()
    .min(SCHEMA_VALUES.MIN_PASSWORD_LENGTH, '* Should be 6 characters or more')
    .max(SCHEMA_VALUES.MAX_PASSWORD_LENGTH, '* Should be 30 characters or less')
    .required('* Password is required'),
});

const Signup = () => {
  const [birthdayDate, setDate] = useState(new Date());
  const formik = useFormik({
    initialValues,
    onSubmit: values => {
      if (values.password === values.confirmPassword) {
        console.log(JSON.stringify(values, null, 2));
      }
    },
    validationSchema,
  });

  const getBirthdayDate = () => {
    formik.values.birthdayDate = birthdayDate;
    return formik.values.birthdayDate;
  };
  const setBirthDate = birthdayDate => {
    setDate(birthdayDate);
  };

  return (
    <main className={s.signupMain}>
      <form className={s.signupForm} onSubmit={formik.handleSubmit}>
        <h1>Register</h1>
        <p>* all fields are required</p>
        <label htmlFor="first-name">
          First name:
          <input
            className={
              formik.errors.firstName &&
              formik.touched.firstName &&
              errorStyles.ErrorInput
            }
            type="text"
            id="first-name"
            name="firstName"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.firstName}
          />
          {formik.touched.firstName && formik.errors.firstName ? (
            <div className={errorStyles.ErrorMessage}>
              {formik.errors.firstName}
            </div>
          ) : null}
        </label>
        <label htmlFor="last-name">
          Last name:
          <input
            className={
              formik.errors.lastName &&
              formik.touched.lastName &&
              errorStyles.ErrorInput
            }
            type="text"
            id="last-name"
            name="lastName"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.lastName}
          />
          {formik.touched.lastName && formik.errors.lastName ? (
            <div className={errorStyles.ErrorMessage}>
              {formik.errors.lastName}
            </div>
          ) : null}
        </label>
        <label htmlFor="email">
          Email:
          <input
            className={
              formik.errors.email &&
              formik.touched.email &&
              errorStyles.ErrorInput
            }
            type="email"
            id="email"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className={errorStyles.ErrorMessage}>
              {formik.errors.email}
            </div>
          ) : null}
        </label>
        <label htmlFor="birthday">
          Birthday:
          <DatePicker
            className={
              formik.errors.birthdayDate &&
              formik.touched.birthdayDate &&
              errorStyles.ErrorInput
            }
            type="date"
            name="birthdayDate"
            selected={birthdayDate}
            dateFormat="MM/dd/yyyy"
            peekNextMonth
            showMonthDropdown
            showYearDropdown
            dropdownMode="select"
            maxDate={new Date()}
            onChange={setBirthDate}
            onBlur={formik.handleBlur}
            value={getBirthdayDate()}
          />
          {formik.touched.birthdayDate && formik.errors.birthdayDate ? (
            <div className={errorStyles.ErrorMessage}>
              {formik.errors.birthdayDate}
            </div>
          ) : null}
        </label>
        <label htmlFor="password">
          Password:
          <input
            className={
              formik.errors.password &&
              formik.touched.password &&
              errorStyles.ErrorInput
            }
            type="password"
            id="password"
            name="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password ? (
            <div className={errorStyles.ErrorMessage}>
              {formik.errors.password}
            </div>
          ) : null}
        </label>
        <label htmlFor="confirm-password">
          Confirm:
          <input
            className={
              formik.errors.confirmPassword &&
              formik.touched.confirmPassword &&
              errorStyles.ErrorInput
            }
            type="password"
            id="confirm-password"
            name="confirmPassword"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.confirmPassword}
          />
          {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
            <div className={errorStyles.ErrorMessage}>
              {formik.errors.confirmPassword}
            </div>
          ) : null}
        </label>
        <button className={s.SignupButton} type="submit">
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
