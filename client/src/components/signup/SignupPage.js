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
import textData from '../../utils/lib/languages.json';
import styles from './SignupPage.scss';

class SignupPage extends React.Component {
  static propTypes = {
    lang: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    signupUser: PropTypes.func.isRequired,
  };

  handleSubmit = async data => {
    const { signupUser } = this.props;
    const response = await signupUser(data);
    if (response.name !== 'Error') history.push('/login');
  };

  render() {
    const { message, lang } = this.props;
    const { signupPage } = textData;
    return (
      <div className={styles.form}>
        {message && <Alert variant="info">{message}</Alert>}
        <h3 className={styles.Heading}>{signupPage.title[lang]}</h3>
        {process.env.BROWSER && (
          <UserRegForm onSubmit={this.handleSubmit} submitText="Go →" />
        )}
        {process.env.BROWSER && (
          <div className={styles.Link}>
            <span className={styles.wantLogin}>
              {signupPage.isRegistred[lang]}
            </span>
            <span className={styles.VerticalLine}>|</span>
            <Link to="/login" className={styles.LogIn}>
              {signupPage.login[lang]}
            </Link>
          </div>
        )}
      </div>
    );
  }
}

export default withStyles(bootstrap, styles)(
  connect(
    ({ user: { message }, menu: { lang } }) => ({ lang, message }),
    { signupUser: signup },
  )(SignupPage),
);
