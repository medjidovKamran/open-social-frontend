import React from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Link from '../../Link';
import { signout } from '../../../actions/user';
import s from './MenuItem.scss';

const MenuItem = ({ item: { path, text, icon }, isActive, closeMenu }) => (
  <Link
    to={path}
    onClick={text === 'SignOut' ? signout : closeMenu}
    className={classNames(s.menuItem, { [s.menuItemActive]: isActive })}
  >
    <div>
      <img src={icon} alt="menu-item" />
    </div>
    {isActive ? (
      <div className={s.menuItemText}>{text}</div>
    ) : (
      <div>{text}</div>
    )}
  </Link>
);

MenuItem.propTypes = {
  closeMenu: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
  item: PropTypes.shape({
    icon: PropTypes.node.isRequired,
    path: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired,
};

export default withStyles(s)(MenuItem);
