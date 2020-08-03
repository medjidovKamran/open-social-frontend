import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/withStyles';
// import normalizeCss from "normalize.css";

import Link from '../Link';
import logo from '../../assets/logos/logo.svg';
import s from './footer.scss';

function Footer() {
  return (
    <header className={s.footer}>
      <Link to="/">
        <div className={s.logo}>
          <img src={logo} alt="logo" />
        </div>
      </Link>
      <div className={s.credo}>
        <p>New waves of synergy of your IT products</p>
      </div>
      <div className={s.menu} />
    </header>
  );
}
Footer.propTypes = {};

export default withStyles(s)(Footer);
