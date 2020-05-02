import React from 'react';
import PropTypes from 'prop-types';
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
import withStyles from 'isomorphic-style-loader/withStyles';
import { Field, reduxForm } from 'redux-form';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FieldInput from '../InputField/FieldInput';
import { VALIDATION_RULES } from '../../utils/validators/ValidationRules';

const UserForm = ({ handleSubmit, submitText }) => {
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>Email address</Form.Label>
        <Field
          name="Email"
          component={FieldInput}
          type="email"
          placeholder="Enter email"
          validate={VALIDATION_RULES.EMAIL}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Password</Form.Label>
        <Field
          name="Password"
          component={FieldInput}
          type="password"
          placeholder="Enter password"
          validate={VALIDATION_RULES.PASSWORD}
        />
      </Form.Group>
      <Button variant="danger" type="submit">
        {submitText || 'Submit'}
      </Button>
    </Form>
  );
};

UserForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  submitText: PropTypes.string.isRequired,
};

export default withStyles(bootstrap)(
  reduxForm({ form: 'user-form' })(UserForm),
);
