import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { createChat } from '../../../actions/chats';
import formStyles from './Modal.scss';
import styles from './ProfileButton.scss';
import history from '../../../history';

function OwnChatButton({ user: { id }, chat: { isLoading }, createChat }) {
  const [show, setShow] = useState(false);
  const [name, setName] = useState('');
  const [descpiption, setDescription] = useState('');
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const onSubmit = () => {
    if (name.length) {
      const parameters = {
        descpiption,
        name,
        ownerid: id,
      };
      createChat(parameters).then(() => history.push('/chats'));
      console.log(createChat);
      handleClose();
      // setName('');
      // if (!isLoading) {
      //   history.push('/chats');
      // }
    }
  };

  return (
    <>
      <Button
        variant="primary"
        className={styles.ProfileButton}
        onClick={handleShow}
      >
        <FontAwesomeIcon className={styles.Icon} icon={faPlus} /> Own chat
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create new own chat</Modal.Title>
        </Modal.Header>
        <Form.Group className={formStyles.FormGroup}>
          <Form.Control
            type="name"
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="Please enter chat name. Name cant be empty"
          />
        </Form.Group>
        <Form.Group>
          <Form.Control
            as="textarea"
            rows="3"
            name="description"
            placeholder="Add some description if you need..."
            value={descpiption}
            onChange={e => setDescription(e.target.value)}
          />
        </Form.Group>
        {/* <input
                type='text'
                name='name'
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder='Please enter chat name. Name cant be empty'
              />
          <textarea 
                name="description" 
                cols="30" 
                rows="10"
                value={descpiption}
                onChange={e => setDescription(e.target.value)}>
          </textarea> */}
        <Modal.Footer>
          <Button variant="primary" onClick={onSubmit}>
            Create Own Chat
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

const mapStateToProps = state => ({
  chat: state.userChats,
  user: state.userProfile,
});
export default connect(
  mapStateToProps,
  { createChat },
)(OwnChatButton);
