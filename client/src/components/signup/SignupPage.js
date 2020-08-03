import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/withStyles';
import Alert from 'react-bootstrap/Alert';
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
import Link from '../Link/Link';
import UserRegForm from './UserRegForm';
import history from '../../history';
import { signup } from '../../actions/user';
import styles from './SignupPage.scss';

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
      <div className={styles.form}>
        {message && <Alert variant="info">{message}</Alert>}
        <h3 className={styles.Heading}>Registration</h3>
        {process.env.BROWSER && (
          <UserRegForm onSubmit={this.handleSubmit} submitText="Go →" />
        )}
        {process.env.BROWSER && (
          <div className={styles.Link}>
            <span className={styles.wantLogin}>Already signed up?</span>
            <span className={styles.VerticalLine}>|</span>
            <Link to="/login" className={styles.LogIn}>
              Log in
            </Link>
          </div>
        )}
      </div>
    );
  }
}

export default withStyles(bootstrap, styles)(
  connect(
    ({ user: { message } }) => ({ message }),
    { signupUser: signup },
  )(SignupPage),
);
