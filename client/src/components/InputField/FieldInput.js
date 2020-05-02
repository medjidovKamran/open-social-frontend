import React from 'react';
import PropTypes from 'prop-types';
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
import withStyles from 'isomorphic-style-loader/withStyles';
import FormControl from 'react-bootstrap/FormControl';
import styles from './FieldInput.scss';

const FieldInput = ({
  input: { value, onChange, onBlur, name },
  meta: { touched, error },
  type,
  placeholder,
  ...props
}) => {
  const showError = touched && error;

  return (
    <>
      <div>
        <FormControl
          className={showError ? styles.InputError : ''}
          name={name}
          onBlur={onBlur}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          props={props}
        />
      </div>
      <>
        {showError ? (
          <span className={styles.TextError}>{`${name} ${error}`}</span>
        ) : (
          <span className={styles.TextHidden}>message</span>
        )}
      </>
    </>
  );
};

FieldInput.propTypes = {
  input: PropTypes.shape({
    name: PropTypes.string.isRequired,
    onBlur: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
  }).isRequired,
  meta: PropTypes.shape({
    error: PropTypes.string,
    touched: PropTypes.bool.isRequired,
  }).isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default withStyles(bootstrap, styles)(FieldInput);
