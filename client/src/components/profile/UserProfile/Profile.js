import React, {Component} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEnvelope, faCaretDown} from '@fortawesome/free-solid-svg-icons';
import withStyles from 'isomorphic-style-loader/withStyles';
import {Row, Col, Card, Container} from 'react-bootstrap';
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

class Profile extends Component {
  static propTypes = {
    avatar: PropTypes.shape({
      avatar: PropTypes.shape({
        name: PropTypes.string,
      }),
    }).isRequired,
    role:PropTypes.string,
  };

  state = {
    isDefaultPhotoDisplayed: true,
    isPhotoLoaded: false,
    photo: '',
  };

  componentDidMount() {
    // eslint-disable-next-line react/destructuring-assignment
    const {avatar} = this.props.avatar;
    if (avatar) {
      const avatarUrl = `${apiURL}/${avatar.name.replace('undefined', '')}`;
      this.setState(previousState => ({
        isDefaultPhotoDisplayed: false,
        isDisplayed: !previousState.isDisplayed,
        isPhotoLoaded: !previousState.isPhotoLoaded,
        photo: avatarUrl,
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
    const {isDefaultPhotoDisplayed, photo} = this.state;
    const {role} = this.props.role;

    return (
      <Container className={styles.UserProfile}>
        <Card className={styles.ProfileCard}>
          <Row>
            <Col lg={5} md={5} sm={12}>
              <ProfilePhoto
                isDefaultPhotoDisplayed={isDefaultPhotoDisplayed}
                imgSource={photo}
                changeProfilePhotoHandler={this.changeProfilePhotoHandler}
                loadPhoto={this.loadPhoto}
              />
              <div>
                <ProfileButton
                  className={stylesButton.ProfileButton}
                  name="Connect"
                />
                <ProfileButton
                  className={stylesButton.ProfileButton}
                  name="Message"
                  iconLeft={
                    <FontAwesomeIcon
                      className={stylesButton.Icon}
                      icon={faEnvelope}
                    />
                  }
                />
                <ProfileButton
                  className={stylesButton.ProfileButton}
                  name="Review"
                  iconRight={
                    <FontAwesomeIcon
                      className={stylesButton.Icon}
                      icon={faCaretDown}
                    />
                  }
                />
                {role === 'admin' && <OwnChatButton/>}
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
                      <p>Followers</p>
                    </Col>
                    <Col className={styles.Followers}>
                      <h3>5</h3>
                      <p>Active chats</p>
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

export default connect(({userProfile: avatar, userProfile: role}) => ({
  avatar, role
}))(withStyles(styles, stylesButton)(React.memo(Profile)));
