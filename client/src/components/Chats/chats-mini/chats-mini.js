/* eslint-disable import/no-unresolved */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';
import Button from '@material-ui/core/Button';
import CloseIcon from '@material-ui/icons/Close';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import s from './chats-mini.module.scss';
import ChatsDialogs from '../chats-dialogs/chats-dialogs';
import ChatsBlockUsers from '../chats-block-users/chats-block-users';
import ChatsSearch from '../chats-search/chats-search';

const ChatsMini = () => {
  const [openChat, setOpen] = React.useState(false);
  const [openDialogs, setOpenDialogs] = React.useState(false);
  const [X, setX] = useState('');
  const [Y, setY] = useState('');

  // eslint-disable-next-line react-perf/jsx-no-new-function-as-prop
  const handleOpenChat = () => {
    setOpen(true);
  };
  // eslint-disable-next-line react-perf/jsx-no-new-function-as-prop
  const handleCloseChat = () => {
    setOpen(false);
  };
  // eslint-disable-next-line react-perf/jsx-no-new-function-as-prop
  const handleOpenDialogs = () => {
    setOpenDialogs(true);
  };
  // eslint-disable-next-line react-perf/jsx-no-new-function-as-prop
  const handleCloseDialogs = () => {
    setOpenDialogs(false);
  };

  const getXY = e => {
    const element = e.target.getBoundingClientRect();

    const x = element.left;
    const y = element.top;

    // setX(x+'px');
    // setY(y+'px');
    console.log(X, Y);
    console.log(x, y);
  };

  const getNewXY = e => {
    const element = e.target.getBoundingClientRect();
    const x = element.left;
    const y = element.top;
  };

  const setNewXY = e => {
    console.log('Finish');
  };
  return (
    <div className={s.miniDialogs}>
      {!openChat ? (
        <Button onClick={handleOpenChat}>Chats</Button>
      ) : (
        <div>
          <Button onClick={handleCloseChat}>Chats</Button>
          <div
            className={s.miniDialogsWindow}
            onMouseDown={getXY}
            onMouseMove={getNewXY}
            onMouseUp={setNewXY}
            style={{ right: X, top: Y }}
          >
            {openDialogs && (
              <div
                className={s.buttonBackToChatUsers}
                onClick={handleCloseDialogs}
              >
                <ArrowBackIosIcon />
              </div>
            )}
            <div
              className={s.buttonCloseWindowMiniChat}
              onClick={handleCloseChat}
            >
              <CloseIcon />
            </div>
            <div>
              <ChatsSearch />
            </div>
            <div onClick={handleOpenDialogs}>
              <ChatsBlockUsers />
            </div>
            {openDialogs && <ChatsDialogs />}
          </div>
        </div>
      )}
    </div>
  );
};
ChatsMini.whyDidYouRender = true;
export default withStyles(s)(React.memo(ChatsMini));
