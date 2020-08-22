import React, {Component} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCaretDown, faEnvelope} from '@fortawesome/free-solid-svg-icons';
import withStyles from 'isomorphic-style-loader/withStyles';
import {Card, Col, Container, Row} from 'react-bootstrap';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import styles from './Profile.scss';
import stylesButton from './ProfileButton.scss';
import {ProfileButton} from './ProfileButton/ProfileButton';
import 'react-tabs/style/react-tabs.css';
import TabsComponent from './TabsComponent/TabsComponent';
import ProfilePhoto from './ProfilePhoto/ProfilePhoto';
import OwnChatButton from './OwnChat';
import apiClient from '../../../utils/axios-with-auth';
import {apiURL} from '../../../constants';
import defaultUserPhoto from '../../../assets/default_user_profile.jpg';
import Link from '../../Link';
import textData from '../../../utils/lib/languages.json';

class Profile extends Component {
  static propTypes = {
    avatar: PropTypes.shape({
      avatar: PropTypes.shape({
        name: PropTypes.string,
      }),
    }).isRequired,
    id: PropTypes.shape({
      id: PropTypes.number,
    }).isRequired,
  };

  state = {
    isPhotoLoaded: false,
    photo: '',
  };

  getUserAvatar() {
    const {avatar} = this.props.avatar;
    console.log(this.props)
    if (avatar == null) {
      return defaultUserPhoto;
    } else {
      return avatar.url;
    }
  }

  componentDidMount() {
    const {avatar} = this.props;
    if (avatar) {
      this.setState(previousState => ({
        isDisplayed: !previousState.isDisplayed,
        isPhotoLoaded: !previousState.isPhotoLoaded,
      }));
    }
  }

  changeProfilePhotoHandler = () => {
    this.setState(previousState => ({
      isDisplayed: !previousState.isDisplayed,
    }));
  };

  loadPhoto = event => {
    const photo = event.target.files[0];

    apiClient.saveUserProfilePhoto(photo);

    const fileReader = new FileReader();
    fileReader.readAsDataURL(photo);
    fileReader.addEventListener('load', () => {
      const {result} = fileReader;
      if (result) {
        this.setState(previousState => ({
          isDefaultPhotoDisplayed: false,
          isDisplayed: !previousState.isDisplayed,
          isPhotoLoaded: !previousState.isPhotoLoaded,
          photo: result,
        }));
      }
    });
  };

  render() {
    const {
      id: {id},
      lang,
    } = this.props;
    const {profilePage} = textData;
    return (
      <Container className={styles.UserProfile}>
        <Card className={styles.ProfileCard}>
          <Row>
            <Col lg={5} md={5} sm={12}>
              <ProfilePhoto
                imgSource={this.getUserAvatar()}
                changeProfilePhotoHandler={this.changeProfilePhotoHandler}
                loadPhoto={this.loadPhoto}
              />
              <div>
                <ProfileButton
                  className={stylesButton.ProfileButton}
                  name={profilePage.buttons.connect[lang]}
                />
                <ProfileButton
                  className={stylesButton.ProfileButton}
                  name={profilePage.buttons.message[lang]}
                  iconLeft={
                    <FontAwesomeIcon
                      className={stylesButton.Icon}
                      icon={faEnvelope}
                    />
                  }
                />
                <ProfileButton
                  className={stylesButton.ProfileButton}
                  name={profilePage.buttons.review[lang]}
                  iconRight={
                    <FontAwesomeIcon
                      className={stylesButton.Icon}
                      icon={faCaretDown}
                    />
                  }
                />
                {id === apiClient.userId() && (
                  <OwnChatButton nameBtn={profilePage.buttons.chat[lang]}/>
                )}
              </div>
            </Col>
            <Col lg={7} md={7} sm={12}>
              <TabsComponent/>
            </Col>
          </Row>
        </Card>

        <Container className={styles.FollowersContainer}>
          <Card className={styles.CardBody}>
            <Row className={styles.RowContainer}>
              <Col lg={4} md={4} sm={12}>
                <Card className={styles.FollowersCard}>
                  <Row className={styles.FollowersRow}>
                    <Col className={styles.Followers}>
                      <h3>203</h3>
                      <p>{profilePage.activities.followers[lang]}</p>
                    </Col>
                    <Col className={styles.Followers}>
                      <h3>5</h3>
                      <p>{profilePage.activities.chats[lang]}</p>
                    </Col>
                  </Row>
                </Card>
              </Col>
            </Row>
          </Card>
        </Container>
      </Container>
    );
  }
}

Profile.whyDidYouRender = true;

export default connect(
  ({userProfile: avatar, userProfile: id, menu: {lang}}) => ({
    avatar,
    id,
    lang,
  }),
)(withStyles(styles, stylesButton)(React.memo(Profile)));
