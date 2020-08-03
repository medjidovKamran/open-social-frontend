import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/withStyles';
import normalizeCss from 'normalize.css';
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import { Row, Col } from 'react-bootstrap';
import isomorphicCookie from 'isomorphic-cookie';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitterSquare,
  faInstagram,
  faFacebookSquare,
} from '@fortawesome/free-brands-svg-icons';
import Link from '../Link';
import Menu from '../Menu';
import styles from './Layout.scss';
import ChatsMini from '../Chats/chats-mini/chats-mini';
import Banner from '../Banner/Banner';
import headerLogoWave from '../../assets/header/header-waves-logo.png';
import headerPlusCircle from '../../assets/header/header-plus-circle.png';
import footerImgWave from '../../assets/footer/footer-waves-logo.png';
import footerImgLine from '../../assets/footer/footer-line.png';
import mainImage from '../../assets/main_image.png';
import bigWavesLogo from '../../assets/bigWavesLogo.png';

function Layout(props) {
  const { children } = props;
  return (
    <Container fluid className={styles.container}>
      <img src={mainImage} alt="main image" className={styles.MainImage} />

      {/* Header */}
      <Row>
        <Col lg={1}>
          <div className={styles.header}>
            <div className={styles.linkHeader}>
              <Link to="/">
                <div>
                  <div>
                    <img
                      className={styles.HeaderLogoWave}
                      src={headerLogoWave}
                      alt="header logo"
                    />
                  </div>
                </div>
              </Link>
            </div>
            {isomorphicCookie.load('token') && (
              <div className={styles.chatButton}>
                <ChatsMini />
              </div>
            )}
            <Col lg={7} />
            <Col lg={4}>
              <img
                className={styles.PlusCircleImg}
                src={headerPlusCircle}
                alt="plus circle"
              />
            </Col>
          </div>
        </Col>
      </Row>

      {/* Content */}
      {!isomorphicCookie.load('token') ? (
        <Row noGutters className={styles.containerRow}>
          <Col lg={6}>
            <img
              className={styles.BigWavesLogo}
              src={bigWavesLogo}
              alt="big waves logo"
            />
          </Col>
          <Col lg={6}>
            <div className={styles.rightContainer}>{children}</div>
          </Col>
        </Row>
      ) : (
        <Row noGutters className={styles.containerRow}>
          <Col lg={1}>{isomorphicCookie.load('token') && <Menu />}</Col>
          <Col lg={8}>
            <div className={styles.rightContainer}>{children}</div>
          </Col>
          <Col lg={3}>{isomorphicCookie.load('token') && <Banner />}</Col>
        </Row>
      )}

      {/* Footer */}
      <Row noGutters>
        <Col lg={2} md={2} sm={2} className={styles.Footer}>
          <img
            className={styles.FooterImage}
            src={footerImgWave}
            alt="wave image"
          />
        </Col>
        <Col lg={8} md={8} sm={8} className={styles.Footer}>
          <img
            className={styles.FooterLine}
            src={footerImgLine}
            alt="vertical line image"
          />
          <p className={styles.SloganFooter}>
            New waves of synergy of your IT products
          </p>
        </Col>
        <Col lg={2} md={2} sm={2} className={styles.Footer}>
          <FontAwesomeIcon
            className={styles.SocialIconFooter}
            icon={faTwitterSquare}
          />
          <FontAwesomeIcon
            className={styles.SocialIconFooter}
            icon={faInstagram}
          />
          <FontAwesomeIcon
            className={styles.SocialIconFooter}
            icon={faFacebookSquare}
          />
        </Col>
      </Row>
    </Container>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
Layout.whyDidYouRender = true;
export default withStyles(bootstrap, normalizeCss, styles)(React.memo(Layout));
