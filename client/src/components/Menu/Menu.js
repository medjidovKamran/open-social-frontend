import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import isomorphicCookie from 'isomorphic-cookie';
import withStyles from 'isomorphic-style-loader/withStyles';
import classNames from 'classnames';
import Hamburger from 'react-hamburger-menu';
import Button from 'react-bootstrap/Button';
import MenuItem from './MenuItem/MenuItem';
import { signout } from '../../actions/user';
import apiClient from '../../utils/axios-with-auth';
import LangSelect from '../LangSelect/LangSelect';
import textData from '../../utils/lib/languages.json';

import s from './Menu.scss';
import profile from '../../assets/profile.svg';
import about from '../../assets/about.svg';
import login from '../../assets/login.svg';
import signup from '../../assets/signup.svg';
import chats from '../../assets/chats.svg';
import users from '../../assets/users.svg';

class Menu extends React.Component {
  static propTypes = {
    currentTab: PropTypes.string.isRequired,
    lang: PropTypes.string.isRequired,
    signoutUser: PropTypes.func.isRequired,
  };

  state = {
    isMenuOpen: false,
  };

	render() {
		const { currentTab, signoutUser } = this.props;
		const { isMenuOpen } = this.state;
		return (
			<div className={s.menu}>
				<div className={s.menuHamburger}>
					<Hamburger
						isOpen={isMenuOpen}
						menuClicked={this.onMenuClick}
						width={25}
						height={15}
						color="#eeeeee"
					/>
				</div>
				<div
					className={classNames(s.menuItems, {
						[s.menuItemsActive]: isMenuOpen
					})}
				>
					{isomorphicCookie.load('token') ? (
						this.menuItems.map((item) => (
							<MenuItem
								key={item.text}
								item={item}
								isActive={currentTab === item.text}
								closeMenu={this.onMenuClick}
							/>
						))
					) : (
						this.menuItemsOffline.map((item2) => (
							<MenuItem
								key={item2.text}
								item={item2}
								isActive={currentTab === item2.text}
								closeMenu={this.onMenuClick}
							/>
						))
					)}
					{isomorphicCookie.load('token') && (
						<Button variant="outline-light" className={s.signout} onClick={signoutUser}>
							Sign out
						</Button>
					)}
				</div>
			</div>
		);
	}
  render() {
    const {
      props: { currentTab, signoutUser, lang },
      state: { isMenuOpen },
    } = this;

    const { menuButtons } = textData;

    const menuItems = [
      {
        icon: profile,
        path: '',
        text: menuButtons.profile.label[lang],
      },
      {
        icon: about,
        path: 'about',
        text: menuButtons.about.label[lang],
      },
      {
        icon: chats,
        path: 'chats',
        text: menuButtons.chats.label[lang],
      },
      {
        icon: users,
        path: 'users',
        text: menuButtons.users.label[lang],
      },
    ];

    const menuItemsOffline = [
      {
        icon: login,
        path: 'login',
        text: menuButtons.login.label[lang],
      },
      {
        icon: signup,
        path: 'signUp',
        text: menuButtons.signUp.label[lang],
      },
    ];

    return (
      <div className={s.menu}>
        <div className={s.menuHamburger}>
          <Hamburger
            isOpen={isMenuOpen}
            menuClicked={this.onMenuClick}
            width={25}
            height={15}
            color="#eeeeee"
          />
        </div>
        <div
          className={classNames(s.menuItems, {
            [s.menuItemsActive]: isMenuOpen,
          })}
        >
          {isomorphicCookie.load('token')
            ? menuItems.map(item => (
                <MenuItem
                  key={item.text}
                  item={item}
                  isActive={currentTab === item.text}
                  closeMenu={this.onMenuClick}
                />
              ))
            : menuItemsOffline.map(item2 => (
                <MenuItem
                  key={item2.text}
                  item={item2}
                  isActive={currentTab === item2.text}
                  closeMenu={this.onMenuClick}
                />
              ))}
          {isomorphicCookie.load('token') && (
            <Button
              variant="outline-light"
              className={s.signout}
              onClick={signoutUser}
            >
              Sign out
            </Button>
          )}
        </div>
        <LangSelect />
      </div>
    );
  }

	onMenuClick = () => {
		const { isMenuOpen } = this.state;
		this.setState({ isMenuOpen: !isMenuOpen });
	};

	menuItems = [
		{
			icon: profile,
			path: '/',
			text: 'Profile'
		},
		{
			icon: about,
			path: 'about',
			text: 'About'
		},
		{
			icon: chats,
			path: 'chats',
			text: 'Chats'
		},
		{
			icon: users,
			path: 'users',
			text: 'Users'
		}
	];

	menuItemsOffline = [
		{
			icon: login,
			path: 'login',
			text: 'Login'
		},
		{
			icon: signup,
			path: 'signup',
			text: 'SignUp'
		}
	];
  onMenuClick = () => {
    const { isMenuOpen } = this.state;
    this.setState({ isMenuOpen: !isMenuOpen });
  };
}

export default connect(
  ({ menu: { currentTab, lang } }) => ({ currentTab, lang }),
  {
    signoutUser: signout,
  },
)(withStyles(s)(Menu));
