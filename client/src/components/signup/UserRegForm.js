import React from 'react';
import PropTypes from 'prop-types';
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
import withStyles from 'isomorphic-style-loader/withStyles';
import { Field, reduxForm } from 'redux-form';
import { Button, InputGroup, Row, Col, Form } from 'react-bootstrap';
import FieldInput from '../InputField/FieldInput';
import { VALIDATION_RULES } from '../../utils/validators/ValidationRules';

const UserForm = ({ handleSubmit, submitText }) => {
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group as={Row}>
        <Form.Label column sm={4}>
          First name:
        </Form.Label>
        <Col sm={8}>
          <Field
            name="First name"
            component={FieldInput}
            type="text"
            placeholder="first name"
            validate={VALIDATION_RULES.FIRST_NAME}
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row}>
        <Form.Label column sm={4}>
          Last name:
        </Form.Label>
        <Col sm={8}>
          <Field
            name="Last name"
            component={FieldInput}
            type="text"
            placeholder="last name"
            validate={VALIDATION_RULES.LAST_NAME}
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row}>
        <Form.Label column sm={4}>
          Username:
        </Form.Label>
        <Col sm={8}>
          <InputGroup>
            <InputGroup.Prepend>
              <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
            </InputGroup.Prepend>
            <Field
              name="Username"
              component={FieldInput}
              type="text"
              placeholder="user name"
              required
              validate={VALIDATION_RULES.USERNAME}
            />
          </InputGroup>
        </Col>
      </Form.Group>
      <Form.Group as={Row}>
        <Form.Label column sm={4}>
          Email
        </Form.Label>
        <Col sm={8}>
          <Field
            name="Email"
            component={FieldInput}
            type="email"
            placeholder="Enter email"
            validate={VALIDATION_RULES.EMAIL}
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row}>
        <Form.Label column sm={4}>
          Birth Date
        </Form.Label>
        <Col sm={8}>
          <Field
            name="Birthday date"
            component={FieldInput}
            type="date"
            placeholder="Enter birthdayDate"
            validate={VALIDATION_RULES.BIRTH_DAY}
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row}>
        <Form.Label column sm={4}>
          Password
        </Form.Label>
        <Col sm={8}>
          <Field
            name="Password"
            component={FieldInput}
            type="password"
            placeholder="Enter password"
            validate={VALIDATION_RULES.PASSWORD}
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row}>
        <Form.Label column sm={4}>
          Confirm
        </Form.Label>
        <Col sm={8}>
          <Field
            name="Confirm password"
            component={FieldInput}
            type="password"
            placeholder="Confirm password"
            validate={VALIDATION_RULES.CONFIRM_PASSWORD}
          />
        </Col>
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
