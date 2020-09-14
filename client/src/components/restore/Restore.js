import React from 'react';
import { connect, useDispatch } from 'react-redux';
import withStyles from 'isomorphic-style-loader/withStyles';
import style from './Restore.scss';
import RestoreForm from './RestoreForm';
import { setUserMessage, sendRestoreEmail } from '../../actions/user';
import Alert from 'react-bootstrap/Alert';
import PropTypes from 'prop-types';

const Restore = ({ message }) => {
  const dispatch = useDispatch();

  const onSubmit = async (formData) => {
    const response = await sendRestoreEmail(formData.email);
    response.data
      ? dispatch(setUserMessage('success'))
      : dispatch(setUserMessage('email is not correct'));
  };

  return (
    <div className={style.restoreWrap}>
      <h2 className={style.header}>Reset password</h2>
      {message && <Alert variant="info">{message}</Alert>}
      {message === 'success' || <RestoreForm onSubmit={onSubmit} />}
    </div>
  );
};

Restore.propTypes = {
  message: PropTypes.string.isRequired,
};

export default withStyles(style)(
  connect(({ user: { message } }) => ({ message }))(Restore),
);
