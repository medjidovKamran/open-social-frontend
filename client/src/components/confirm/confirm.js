/* eslint-disable prettier/prettier */
import React, { useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import withStyles from 'isomorphic-style-loader/withStyles';
import {failConfirm} from '../../actions/confirm';
import {confirmThunk} from '../../reducers/confirm';
import history from '../../history';

import s from './confirm.module.scss';
import axios from "axios";
import {apiURL} from "../../constants";

const Confirm = ({confirmation, userKey, id, confirmThunk, failConfirm}) => {
  Confirm.propTypes = {
    confirmThunk: PropTypes.func.isRequired,
    confirmation: PropTypes.string.isRequired,
    failConfirm: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired,
    userKey: PropTypes.string.isRequired,
  };


  const [password, setPassword] = useState('');

  useEffect(() => {
      // eslint-disable-next-line no-shadow
      if (typeof userKey !== 'undefined' && typeof id !== 'undefined') {
        confirmThunk(+id, userKey);
      } else {
        failConfirm();
      }
    }
    , []);

  const changePassword = async password => {
    try {
      const response = await axios.put(
        `${apiURL}/api/v1/auth/change-password`,
        {id, key:userKey, password},
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

  const inputHandler = event => {
    setPassword(event.target.value);
    console.log(password);
  };

  const handleSubmit = event => {
    event.preventDefault();
    changePassword(password);
  };

  const redirectLogin = () => {
    const TIME = 2000;
    setTimeout(() => history.push('/login'), TIME);
  };

  const text =
    confirmation === 0
      ? 'wait for confirmation'
      : (confirmation === 1
      ? 'Success Confirm'
      : 'Not Confirmed');
  if (confirmation === 2) redirectLogin();
  if (confirmation === 1) {
    return (
      <div className={s.confirm}>
        <h2 className={s.header}> Create new password </h2>
        <form className={s.form} onSubmit={handleSubmit}>
          <div className={s.inputWrap}>
            <label className={s.label} htmlFor="first-password-input">Password</label>
            <input id="first-password-input"
                   value={password}
                   className={s.input}
                   onChange={inputHandler}
                   type="password"/>
          </div>
          <div className={s.inputWrap}>
            <label className={s.label} htmlFor="second-password-input">Repeat password</label>
            <input id="second-password-input" className={s.input} type="password"/>
          </div>
          <button className={s.submitButton} type="submit">Create</button>
        </form>
      </div>)
  }

  return (<div className={s.confirm}>{text}</div>);
};


const mapStateToProps = ({confirm}) => {
  return {
    confirmation: confirm.confirmation,
  };
};
const mapDispatchToProps = {
  confirmThunk,
  failConfirm,
};

export default withStyles(s)(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Confirm),
);
