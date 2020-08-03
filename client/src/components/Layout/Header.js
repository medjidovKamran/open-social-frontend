import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/withStyles';
// import normalizeCss from "normalize.css";

import Link from '../Link';
import logo from '../../assets/logos/logo.svg';
import s from './header.scss';

function Header() {
  return (
    <header className={s.header}>
      <Link to="/">
        <div className={s.logo}>
          <img className={s.image} src={logo} alt="logo" />
        </div>
      </Link>
      <div className={s.menu} />
    </header>
  );
}
Header.propTypes = {};

export default withStyles(s)(Header);
