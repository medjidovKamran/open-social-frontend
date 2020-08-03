import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/withStyles';
import Alert from 'react-bootstrap/Alert';
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
import Link from '../Link/Link';
import UserForm from './LoginForm';
import history from '../../history';
import { login } from '../../actions/user';

import styles from './Login.scss';
import stylesLoginPage from './LoginPage.scss';

class LoginPage extends React.Component {
  static propTypes = {
    message: PropTypes.string.isRequired,
    setUser: PropTypes.func.isRequired,
  };

  handleSubmit = async data => {
    const { setUser } = this.props;
    await setUser(data);
    history.push('/');
  };

  render() {
    const { message } = this.props;
    return (
      <div className={styles.FormContainer}>
        <div className={styles.form}>
          {message && <Alert variant="info">{message}</Alert>}
          <h3 className={styles.Login}>Log in</h3>
          {process.env.BROWSER && (
            <div>
              <UserForm onSubmit={this.handleSubmit} submitText="Go →" />
              <div className={styles.links}>
                <Link className={stylesLoginPage.LoginLinks} to="/signup">
                  Forgot the password?
                </Link>
                <span className={stylesLoginPage.VerticalLine}>|</span>
                <Link className={stylesLoginPage.LoginLinks} to="/signup">
                  Sign up
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default withStyles(bootstrap, styles, stylesLoginPage)(
  connect(
    ({ user: { message } }) => ({ message }),
    { setUser: login },
  )(LoginPage),
);
