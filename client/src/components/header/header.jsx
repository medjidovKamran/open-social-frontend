/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { Component } from 'react';
import s from './header.module.scss';
import logo from '../../image/header/logo.png';
import HeaderDrop from './header-drop';

class Header extends Component {
  state = {
    openMenu: false,
  };

  handleOpenMenu = () => {
    this.setState(state => {
      return {
        openMenu: !state.openMenu,
      };
    });
  };

  render() {
    const { openMenu } = this.state;
    const mainMenu = openMenu ? (
      <HeaderDrop closeMenu={this.closeMenu} />
    ) : null;
    const clazz = openMenu ? `${s.button} ${s.active}` : `${s.button}`;
    return (
      <header className={s.header}>
        <div className={s.logo}>
          <div className={s.logoImg}>
            <img src={logo} alt="logo" />
          </div>
          <div className={s.logoName}>Open Social Network</div>
        </div>
        <div className={s.buttonWrapper} onClick={this.handleOpenMenu}>
          <div className={clazz} />
        </div>
        {mainMenu}
      </header>
    );
  }

  closeMenu = () => {
    this.setState({
      openMenu: false,
    });
  };
}

export default Header;
