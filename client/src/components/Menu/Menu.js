import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import isomorphicCookie from 'isomorphic-cookie';
import withStyles from 'isomorphic-style-loader/withStyles';
import classNames from 'classnames';
import Hamburger from 'react-hamburger-menu';
import Button from 'react-bootstrap/Button';
import MenuItem from './MenuItem/MenuItem';
import Tab from './MenuItem/Tab';
import { signout } from '../../actions/user';
import { setLang } from '../../actions/lang';
import textData from '../../utils/lib/languages.json';

import s from './Menu.scss';
import profile from '../../assets/profile.svg';
import about from '../../assets/about.svg';
import login from '../../assets/login.svg';
import signup from '../../assets/signup.svg';
import chats from '../../assets/chats.svg';
import users from '../../assets/users.svg';

const Menu = ({ currentTab, signoutUser, setCurrentLang, lang }) => {
  const { menuButtons } = textData;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  const testData = [
    {
      icon: about,
      path: 'about',
      text: menuButtons.about.label[lang],
      type: 'button',
    },
    {
      icon: chats,
      path: 'chats',
      text: menuButtons.chats.label[lang],
      type: 'button',
    },
    {
      icon: users,
      items: [{ path: 'users', text: 'users', type: 'router' }],
      path: 'chats',
      text: menuButtons.users.label[lang],
      type: 'select',
    },
  ];

  const baseItems = [
    {
      icon: null,
      items: [
        { path: 'signUp', text: 'registration', type: 'router' },
        { path: null, text: 'signout', type: 'signout' },
        { path: 'login', text: 'login', type: 'router' },
        { path: '/', text: 'my profile', type: 'router' },
      ],
      text: 'profile',
      type: 'select',
    },
    {
      icon: null,
      items: [
        { path: null, text: 'uk', type: 'setLang' },
        { path: null, text: 'ru', type: 'setLang' },
        { path: null, text: 'en', type: 'setLang' },
      ],
      text: lang,
      type: 'select',
    },
  ];

  const onMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const handleClick = (type, value) => {
    switch (type) {
      case 'setLang':
        setCurrentLang(value);
        localStorage.setItem('chatLang', value);
        break;
      case 'signout':
        signoutUser();
        break;
      default:
        console.log('default case');
    }
  };

  return (
    <div className={s.wrapper}>
      <>
        {isomorphicCookie.load('token') &&
          testData.map(item => (
            <Tab key={item.text} item={item} onClick={handleClick} />
          ))}
        {baseItems.map(item => (
          <Tab key={item.text} item={item} onClick={handleClick} />
        ))}
      </>
    </div>
  );
};

Menu.propTypes = {
  currentTab: PropTypes.string.isRequired,
  lang: PropTypes.string.isRequired,
  setCurrentLang: PropTypes.func.isRequired,
  signoutUser: PropTypes.func.isRequired,
};

export default connect(
  ({ menu: { currentTab, lang } }) => ({ currentTab, lang }),
  {
    setCurrentLang: setLang,
    signoutUser: signout,
  },
)(withStyles(s)(Menu));

// class Menu extends React.Component {
//   static propTypes = {
//     currentTab: PropTypes.string.isRequired,
//     lang: PropTypes.string.isRequired,
//     signoutUser: PropTypes.func.isRequired,
//   };

//   render() {
//     const {
//       props: { currentTab, signoutUser, lang },
//     } = this;

//     const { menuButtons } = textData;

//     const menuItems = [
//       {
//         icon: profile,
//         path: "",
//         text: menuButtons.profile.label[lang],
//       },
//       {
//         icon: about,
//         path: "about",
//         text: menuButtons.about.label[lang],
//       },
//       {
//         icon: chats,
//         path: "chats",
//         text: menuButtons.chats.label[lang],
//       },
//       {
//         icon: users,
//         path: "users",
//         text: menuButtons.users.label[lang],
//       },
//     ];

//     const menuItemsOffline = [
//       {
//         icon: login,
//         path: "login",
//         text: menuButtons.login.label[lang],
//       },
//       {
//         icon: signup,
//         path: "signUp",
//         text: menuButtons.signUp.label[lang],
//       },
//     ];

//     return (
//       <div className={s.menu}>
//         <div className={s.menuHamburger}>
//           <Hamburger
//             isOpen={isMenuOpen}
//             menuClicked={this.onMenuClick}
//             width={25}
//             height={15}
//             color="#eeeeee"
//           />
//         </div>
//         <div
//           className={classNames(s.menuItems, {
//             [s.menuItemsActive]: isMenuOpen,
//           })}
//         >
//           {isomorphicCookie.load("token")
//             ? menuItems.map((item) => (
//                 <MenuItem
//                   key={item.text}
//                   item={item}
//                   isActive={currentTab === item.text}
//                   closeMenu={this.onMenuClick}
//                 />
//               ))
//             : menuItemsOffline.map((item2) => (
//                 <MenuItem
//                   key={item2.text}
//                   item={item2}
//                   isActive={currentTab === item2.text}
//                   closeMenu={this.onMenuClick}
//                 />
//               ))}
//           {isomorphicCookie.load("token") && (
//             <Button
//               variant="outline-light"
//               className={s.signout}
//               onClick={signoutUser}
//             >
//               Sign out
//             </Button>
//           )}
//         </div>
//         <LangSelect />
//       </div>
//     );
//   }

//   onMenuClick = () => {
//     const { isMenuOpen } = this.state;
//     this.setState({ isMenuOpen: !isMenuOpen });
//   };
// }

// export default connect(
//   ({ menu: { currentTab, lang } }) => ({ currentTab, lang }),
//   {
//     signoutUser: signout,
//   }
// )(withStyles(s)(Menu));
