import React, { useState } from 'react';
import axios from 'axios';
import style from './Restore.scss';
import { apiURL } from '../../constants';
import withStyles from 'isomorphic-style-loader/withStyles';

const Restore = () => {
  const [emailInput, setEmailInput] = useState('');
  const checkEmail = async email => {
    try {
      const response = await axios.post(
        `${apiURL}/api/v1/auth/restore`,
        { email },
        {
          headers: {
            'content-type': 'application/json',
          },
        },
      );
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };
  const handleInput = event => {
    setEmailInput(event.target.value);
  };
  const handleSubmit = async event => {
    event.preventDefault();
    await checkEmail(emailInput);
  };
  return (
    <div className={style.restoreWrap}>
      <h2 className={style.header}>Reset password</h2>
      <form onSubmit={handleSubmit} className={style.restoreForm}>
        <label htmlFor="email">
          Write your e-mail
          <input className={style.input} value={emailInput} onChange={handleInput} type="email" id="email" name="email" />
        </label>
        <input className={style.submit} type="submit" value="Send" />
      </form>
    </div>
  );
};

export default withStyles(style)(Restore);
