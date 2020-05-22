/* eslint-disable import/no-unresolved */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/button-has-type */
import React, { useState, useRef } from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';
import Button from '@material-ui/core/Button';
import CloseIcon from '@material-ui/icons/Close';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import s from './chats-mini.module.scss';
import ChatsDialogs from '../chats-dialogs/chats-dialogs';
import ChatsBlockUsers from '../chats-block-users/chats-block-users';
import ChatsSearch from '../chats-search/chats-search';

function ChatsMini() {
  const [openChat, setOpen] = useState(false);
  const [openDialogs, setOpenDialogs] = useState(false);
  const miniChat = useRef();

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

  let shiftX;
  let shiftY;

  // eslint-disable-next-line react-perf/jsx-no-new-function-as-prop
  const handleMouseMove = event => {
    miniChat.current.style.left = `${event.pageX - shiftX}px`;
    miniChat.current.style.top = `${event.pageY - shiftY}px`;
  };

  // eslint-disable-next-line react-perf/jsx-no-new-function-as-prop
  const handleMouseDown = event => {
    shiftX = event.clientX - miniChat.current.getBoundingClientRect().left;
    shiftY = event.clientY - miniChat.current.getBoundingClientRect().top;
    document.addEventListener('mousemove', handleMouseMove, true);
  };

  // eslint-disable-next-line react-perf/jsx-no-new-function-as-prop
  const handleMouseUp = () => {
    document.removeEventListener('mousemove', handleMouseMove, true);
  };

  return (
    <div className={s.miniDialogs}>
      {!openChat ? (
        <Button onClick={handleOpenChat}>Chats</Button>
      ) : (
        <div>
          <Button onClick={handleCloseChat}>Chats</Button>
          <div
            ref={miniChat}
            className={s.miniDialogsWindow}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
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
}

ChatsMini.whyDidYouRender = true;
export default withStyles(s)(React.memo(ChatsMini));
