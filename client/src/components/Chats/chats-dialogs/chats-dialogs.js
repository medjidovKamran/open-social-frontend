import React, { useState } from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';
import style from './chats-dialogs.module.scss';
import avatar from '../../../assets/avatar.png'
import Messages from './messages';
import "emoji-mart/css/emoji-mart.css";
import { Picker } from "emoji-mart";

const ChatsDialogs = () => {
  const [emojiPickerState, SetEmojiPicker] = useState(false);
  const [message, SetMessage] = useState("");

  let emojiPicker;
  if (emojiPickerState) {
    emojiPicker = (
      <Picker
        title="Pick your emoji…"
        emoji="point_up"
        onSelect={emoji => SetMessage(message + emoji.native)}
      />
    );
  }

  function triggerPicker(event) {
    event.preventDefault();
    SetEmojiPicker(!emojiPickerState);
  }


  return (
    <div className={style.wrapper}>
      <header>
        <div className={style.user}>
          <a href=""><img src={avatar} alt="not found"></img></a>
          <div className={style.userName}>
            <a href="" className={style.name}><span>Nika Jerrardo</span></a>
            <span className={style.lastTime}>last online 5 hours ago</span>
          </div>
        </div>
        <div className={style.buttons}>
          <button className={style.attach}></button>
          <button className={style.more}></button>
        </div>
      </header>
  
      <Messages />

      <div className={style.formLine}></div>
      <div className={style.formWrapper}>
        <button className={style.dropUpButton}></button>
        <form action="">
          <textarea name="" 
                    id="" rows="1" 
                    placeholder="Type a message here" 
                    value={message} 
                    onChange={event => SetMessage(event.target.value)}>
          </textarea>
          {emojiPicker}
          <button className={style.smileButton} onClick={triggerPicker}></button>
          <button type="submit" className={style.sendButton}></button>
        </form>
  
        <div className="dropUp">
          <img src="./img/Icon File.png" alt=""></img>
          <img src="./img/Icon Photo.png" alt=""></img>
          <img src="./img/Icon Video.png" alt=""></img>
        </div>
      </div>
    </div>
  )
};
// ChatsDialogs.whyDidYouRender = true;
export default withStyles(style)(React.memo(ChatsDialogs));
// export default ChatsDialogs;
