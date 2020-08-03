import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/withStyles';
import normalizeCss from 'normalize.css';
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import { Row, Col } from 'react-bootstrap';
import isomorphicCookie from 'isomorphic-cookie';

import Header from './Header';
import Link from '../Link';
import Menu from '../Menu';
import logo from '../../assets/logo.png';
import s from './Layout.scss';
import ChatsMini from '../Chats/chats-mini/chats-mini';
import Banner from '../Banner/Banner';
import Footer from './Footer';

function Layout(props) {
  const { children } = props;
  return (
    <div className={s.container}>
      <Header />
      <div className={s.childrenWrap}>
        <Col lg={8}>
          <div className={s.rightContainer}>{children}</div>
        </Col>
        <Col lg={2} className={s.banner}>
          <Banner />
        </Col>
      </div>
      <Footer />
    </div>
  );
}
Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
Layout.whyDidYouRender = true;
export default withStyles(bootstrap, normalizeCss, s)(React.memo(Layout));
