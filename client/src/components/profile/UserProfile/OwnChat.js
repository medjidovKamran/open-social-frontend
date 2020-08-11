/* eslint-disable promise/prefer-await-to-then */
/* eslint-disable react-perf/jsx-no-new-function-as-prop */
import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import BorderColorIcon from '@material-ui/icons/BorderColor';
import withStyles from 'isomorphic-style-loader/withStyles';
import { createChat } from '../../../actions/chats';
import styles from './ProfileButton.scss';
import history from '../../../history';

// eslint-disable-next-line no-shadow
function OwnChatButton({ user: { id }, createChat }) {
  const [show, setShow] = useState(false);
  const [name, setName] = useState('');
  const [descpiption, setDescription] = useState('');
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const onSubmit = () => {
    // eslint-disable-next-line unicorn/explicit-length-check
    if (name.length) {
      const parameters = {
        descpiption,
        name,
        ownerid: id,
      };
      // eslint-disable-next-line promise/catch-or-return
      createChat(parameters).then(() => history.push('/chats'));
      handleClose();
    }
  };
  // eslint-disable-next-line react-perf/jsx-no-new-object-as-prop
  const modalStyle = {
    margin: '20px',
  };

  const ProfileOwnChatButton = () => {
    return (
      <Button
        variant="primary"
        className={styles.ProfileButton}
        onClick={handleShow}
      >
        <FontAwesomeIcon className={styles.Icon} icon={faPlus} />
        Own chat
      </Button>
    );
  };
  const UserOwnChatButton = () => {
    return (
      <div className={styles.buttonMessage}>
        <BorderColorIcon onClick={handleShow} fontSize="large" />
      </div>
    );
  };

  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/profile:id" component={ProfileOwnChatButton} />
          <Route exact path="/" component={ProfileOwnChatButton} />
          <Route exact path="/users" component={UserOwnChatButton} />
        </Switch>
      </BrowserRouter>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create new own chat</Modal.Title>
        </Modal.Header>
        <Form.Group style={modalStyle}>
          <Form.Control
            type="name"
            value={name}
            onChange={event => setName(event.target.value)}
            placeholder="Please enter chat name. Name cant be empty"
          />
        </Form.Group>
        <Form.Group style={modalStyle}>
          <Form.Control
            as="textarea"
            rows="3"
            name="description"
            placeholder="Add some description if you need..."
            value={descpiption}
            onChange={event => setDescription(event.target.value)}
          />
        </Form.Group>
        <Modal.Footer>
          <Button variant="primary" onClick={onSubmit}>
            Create Own Chat
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

OwnChatButton.propTypes = {
  createChat: PropTypes.func.isRequired,
  // eslint-disable-next-line react/require-default-props
  user: PropTypes.shape({
    id: PropTypes.number,
  }),
};

const mapStateToProps = state => ({
  chat: state.userChats,
  user: state.userProfile,
});

OwnChatButton.whyDidYouRender = true;
export default connect(
  mapStateToProps,
  { createChat },
)(withStyles(styles)(React.memo(OwnChatButton)));
