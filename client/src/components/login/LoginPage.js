import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/withStyles';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
import Link from '../Link/Link';
import UserForm from './LoginForm';
import history from '../../history';
import { login } from '../../actions/user';
import textData from '../../utils/lib/languages.json';

import s from './Login.scss';

class LoginPage extends React.Component {
  static propTypes = {
    lang: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    setUser: PropTypes.func.isRequired,
  };

  handleSubmit = async data => {
    const { setUser } = this.props;
    await setUser(data);
    history.push('/');
  };

  render() {
    const { message, lang } = this.props;
    const { loginPage } = textData;
    return (
      <div className={s.form}>
        {message && <Alert variant="info">{message}</Alert>}
        <h3 className={s.heading}>{loginPage.title[lang]}</h3>
        {process.env.BROWSER && (
          <div>
            <UserForm onSubmit={this.handleSubmit} submitText={loginPage.submitButton[lang]}/>
            <div className={s.links}>
              <span className={s.notSignedUp}>
                {loginPage.isNotAutorized[lang]}
              </span>
              <Button variant="link">
                <Link to="/signup">{loginPage.signup[lang]}</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default withStyles(bootstrap, s)(
  connect(
    ({ user: { message }, menu: { lang } }) => ({ lang, message }),
    { setUser: login },
  )(LoginPage),
);
