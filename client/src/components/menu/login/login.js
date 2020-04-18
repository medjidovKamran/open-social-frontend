/* eslint-disable no-console */
import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import s from './login.module.scss';
import errorStyles from '../../validation/validation.module.scss';

const initialValues = {
  email: '',
  password: '',
};

const SCHEMA_VALUES = {
  MAX_PASSWORD_LENGTH: 30,
};

const validationSchema = Yup.object({
  email: Yup.string()
    .email('* Invalid email address')
    .required('* Email is required'),
  onSubmit: values => {
    console.log(JSON.stringify(values, null, 2));
  },
  password: Yup.string()
    .max(SCHEMA_VALUES.MAX_PASSWORD_LENGTH, '* Should be 30 characters or less')
    .required('*Password is required'),
});

const Login = () => {
  const emailReference = useRef(null);
  const passwordReference = useRef(null);
  const formik = useFormik({
    initialValues,
    validationSchema,
  });

  return (
    <main className={s.loginMain}>
      <form className={s.loginForm} onSubmit={formik.handleSubmit}>
        <label htmlFor="email">
          Email:
          <input
            className={
              formik.errors.email &&
              formik.touched.email &&
              errorStyles.ErrorInput
            }
            ref={emailReference}
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className={errorStyles.ErrorMessage}>
              {formik.errors.email}
            </div>
          ) : null}
          {console.log(formik.errors)}
        </label>
        <label htmlFor="password">
          Password:
          <input
            className={
              formik.errors.password &&
              formik.touched.password &&
              errorStyles.ErrorInput
            }
            ref={passwordReference}
            id="password"
            name="password"
            type="password"
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
        <button type="submit">Login</button>
        <p>
          If you don`t have account please <Link to="/signup">signup</Link>
        </p>
      </form>
    </main>
  );
};

export default Login;
