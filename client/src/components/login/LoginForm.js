import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
import withStyles from 'isomorphic-style-loader/withStyles';
import { Field, reduxForm } from 'redux-form';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FieldInput from '../InputField/FieldInput';
import { VALIDATION_RULES } from '../../utils/validators/ValidationRules';
import styles from './LoginForm.scss';
import textData from '../../utils/lib/languages.json';

const UserForm = ({ handleSubmit, submitText }) => {
  const lang = useSelector(store => store.menu.lang);
  const {
    loginPage: { inputs },
  } = textData;

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <div className={styles.EmailWrapper}>
          <Form.Label style={{ marginRight: '2em' }}>Email address</Form.Label>
          <Field
            name="email"
            component={FieldInput}
            type="email"
            placeholder="Enter email"
            description="Email"
            validate={VALIDATION_RULES.EMAIL}
          />
        </div>
        <Form.Label>{inputs.email.label[lang]}</Form.Label>
        <Field
          name="email"
          component={FieldInput}
          type="email"
          placeholder={inputs.email.placeholder[lang]}
          description="Email"
          validate={VALIDATION_RULES.EMAIL}
        />
      </Form.Group>
      <Form.Group>
        <div className={styles.PasswordWrapper}>
          <Form.Label style={{ marginRight: '4.21em' }}>Password</Form.Label>
          <Field
            name="password"
            component={FieldInput}
            type="password"
            placeholder="Enter password"
            description="Password"
            validate={VALIDATION_RULES.PASSWORD}
          />
        </div>
        <Form.Label>{inputs.password.label[lang]}</Form.Label>
        <Field
          name="password"
          component={FieldInput}
          type="password"
          placeholder={inputs.password.placeholder[lang]}
          description="Password"
          validate={VALIDATION_RULES.PASSWORD}
        />
      </Form.Group>
      <Form.Group controlId="formHorizontalCheck">
        <Form.Check label="Remember me" />
      </Form.Group>
      <Button className={styles.LoginButton} variant="danger" type="submit">
        {submitText || 'Submit'}
      </Button>
    </Form>
  );
};

UserForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  submitText: PropTypes.string.isRequired,
};

export default withStyles(bootstrap, styles)(
  reduxForm({ form: 'user-form' })(UserForm),
);
