import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import s from './header-drop.module.scss';

class HeaderDrop extends Component {
  list = [
    { link: 'home', title: 'home' },
    { link: 'about', title: 'about' },
    { link: 'login', title: 'login/logout' },
    {
      link: 'signup',
      title: 'signup',
    },
    { link: 'create', title: 'create' },
  ];

  render() {
    return (
      <div className={s.main}>
        <div placeholder="search" className={s.container}>
          <form action="#" className={s.form}>
            <input placeholder="search" className={s.input} type="text" />
          </form>

          <ul className={s.list}>
            {this.list.map(({ title, link }) => {
              return (
                <li
                  key={link}
                  onClick={() => this.props.closeMenu()}
                  className={s.element}
                >
                  <NavLink
                    to={link}
                    activeClassName={s.activeLink}
                    className={s.link}
                  >
                    {' '}
                    {title}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default HeaderDrop;
