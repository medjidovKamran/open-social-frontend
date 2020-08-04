import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/withStyles';
import normalizeCss from 'normalize.css';
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
// import { Col } from "react-bootstrap";

import Header from './Header';
import s from './Layout.scss';
import Footer from './Footer';

function Layout(props) {
  const { children } = props;
  return (
    <div className={s.container}>
      <Header />
      <div className={s.childrenWrap}>
        <div className={s.rightContainer}>{children}</div>
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
