import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/withStyles';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
import Link from '../Link/Link';
import UserRegForm from './UserRegForm';
import history from '../../history';
import { signup } from '../../actions/user';

import s from './signup.scss';

class SignupPage extends React.Component {
  static propTypes = {
    message: PropTypes.string.isRequired,
    signupUser: PropTypes.func.isRequired,
  };

  handleSubmit = async data => {
    const { signupUser } = this.props;
    const response = await signupUser(data);
    if (response.name !== 'Error') history.push('/login');
  };

  render() {
    const { message } = this.props;
    return (
      <div className={s.form}>
        {message && <Alert variant="info">{message}</Alert>}
        <h3 className={s.heading}>Registration</h3>
        {process.env.BROWSER && (
          <UserRegForm onSubmit={this.handleSubmit} submitText="Sign up" />
        )}
        {process.env.BROWSER && (
          <div className={s.links}>
            <span className={s.wantLogin}>Already signed up?</span>
            <Button variant="link">
              <Link to="/login">Log in</Link>
            </Button>
          </div>
        )}
      </div>
    );
  }
}

export default withStyles(bootstrap, s)(
  connect(
    ({ user: { message } }) => ({ message }),
    { signupUser: signup },
  )(SignupPage),
);
