import style from './Restore.scss';
import PropTypes from 'prop-types';
import React from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';
import { Field, reduxForm } from 'redux-form';
import {VALIDATION_RULES} from "../../utils/validators/ValidationRules";
import FieldInput from "../InputField/FieldInput";
import Form from "react-bootstrap/Form";


const RestoreForm = ({ handleSubmit }) => {
  return (
    <Form onSubmit={handleSubmit} className={style.restoreForm}>
      <Form.Group className={style.formGroup}>
        <label htmlFor="email">Write your e-mail</label>
        <Field
          className={style.input}
          component={FieldInput}
          type="email"
          id="email"
          name="email"
          description="Email"
          validate={VALIDATION_RULES.EMAIL}
        />
      </Form.Group>
      <button className={style.submit} type="submit" >Send</button>
    </Form>
  );
};

RestoreForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default withStyles(style)(
  reduxForm({ form: 'restore-form' })(RestoreForm),
);
