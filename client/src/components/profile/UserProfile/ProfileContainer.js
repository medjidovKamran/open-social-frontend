import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import withStyles from 'isomorphic-style-loader/withStyles';
import { Row, Col, Card, Container } from 'react-bootstrap';
import styles from './ProfileContainer.scss';
import { ProfileButton } from './ProfileButton/ProfileButton';
import 'react-tabs/style/react-tabs.css';
import TabsComponent from './TabsComponent/TabsComponent';
import ProfilePhoto from './ProfilePhoto/ProfilePhoto';

class ProfileContainer extends Component {
  state = {
    isDefaultPhotoDisplayed: true,
    isPhotoLoaded: false,
    photo: '',
  };

  changeProfilePhotoHandler = () => {
    this.setState(previousState => ({
      isDisplayed: !previousState.isDisplayed,
    }));
  };

  loadPhoto = event => {
    const fileReader = new FileReader();
    const photo = event.target.files[0];
    fileReader.readAsDataURL(photo);
    fileReader.addEventListener('load', () => {
      this.setState(previousState => ({
        isDefaultPhotoDisplayed: false,
        isDisplayed: !previousState.isDisplayed,
        isPhotoLoaded: !previousState.isPhotoLoaded,
        photo: fileReader.result,
      }));
    });
  };

  render() {
    const { isDefaultPhotoDisplayed, photo } = this.state;
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
                <ProfileButton name="Connect" />
                <ProfileButton
                  name="Message"
                  iconLeft={<FontAwesomeIcon icon={faEnvelope} />}
                />
                <ProfileButton
                  name="Review"
                  iconRight={<FontAwesomeIcon icon={faCaretDown} />}
                />
              </div>
            </Col>
            <Col lg={7} md={7} sm={12}>
              <TabsComponent />
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

ProfileContainer.whyDidYouRender = true;
export default withStyles(styles)(React.memo(ProfileContainer));
