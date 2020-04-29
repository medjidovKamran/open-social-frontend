import React from 'react';
import PropTypes from 'prop-types';
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
import withStyles from 'isomorphic-style-loader/withStyles';
import { Field, reduxForm } from 'redux-form';
import { Button, InputGroup, Row, Col, Form } from 'react-bootstrap';
import FieldInput from '../InputField/FieldInput';

const UserForm = ({ handleSubmit, submitText }) => {
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group as={Row}>
        <Form.Label column sm={4}>
          Full name:
        </Form.Label>
        <Col sm={8}>
          <Field
            name="firstName"
            component={FieldInput}
            type="text"
            placeholder="first name"
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row}>
        <Form.Label column sm={4}>
          Last name:
        </Form.Label>
        <Col sm={8}>
          <Field
            name="lastName"
            component={FieldInput}
            type="text"
            placeholder="last name"
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
              name="userName"
              component={FieldInput}
              type="text"
              placeholder="user name"
              required
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
            name="email"
            component={FieldInput}
            type="email"
            placeholder="Enter email"
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row}>
        <Form.Label column sm={4}>
          Birth Date
        </Form.Label>
        <Col sm={8}>
          <Field
            name="birthdayDate"
            component={FieldInput}
            type="date"
            placeholder="Enter birthdayDate"
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row}>
        <Form.Label column sm={4}>
          Password
        </Form.Label>
        <Col sm={8}>
          <Field
            name="password"
            component={FieldInput}
            type="password"
            placeholder="Enter password"
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row}>
        <Form.Label column sm={4}>
          Confirm
        </Form.Label>
        <Col sm={8}>
          <Field
            name="confpass"
            component={FieldInput}
            type="password"
            placeholder="Enter password"
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
