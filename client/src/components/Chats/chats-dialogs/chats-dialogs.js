import React, { useState } from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';
import emojii from 'emoji-mart/css/emoji-mart.css';
import { Picker } from 'emoji-mart';
import style from './chats-dialogs.module.scss';
import avatar from '../../../assets/avatar.png';
import Messages from './messages';
import {useSelector} from "react-redux";
import textData from "../../../utils/lib/languages";

const ChatsDialogs = ( dialogText ) => {
  const [emojiPickerState, SetEmojiPicker] = useState(false);
  const [message, SetMessage] = useState('');
  const lang = useSelector(store => store.menu.lang);
  const { chatsPage: {dialog}} = textData;

  let emojiPicker;
  if (emojiPickerState) {
    emojiPicker = (
      <Picker
        title={dialog.emojiTitle[lang]}
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
          <a href="">
            <img src={avatar} alt="not found" />
          </a>
          <div className={style.userName}>
            <a href="" className={style.name}>
              <span>Nika Jerrardo</span>
            </a>
            <span className={style.lastTime}>last online 5 hours ago</span>
          </div>
        </div>
        <div className={style.buttons}>
          <button className={style.attach} />
          <button className={style.more} />
        </div>
      </header>

      <Messages />

      <div className={style.formLine} />
      <div className={style.formWrapper}>
        <button className={style.dropUpButton} />
        <form action="">
          <textarea
            name=""
            id=""
            rows="1"
            placeholder={dialog.inputPlaceholder[lang]}
            value={message}
            onChange={event => SetMessage(event.target.value)}
          />
          {emojiPicker}
          <button className={style.smileButton} onClick={triggerPicker} />
          <button type="submit" className={style.sendButton} />
        </form>

        <div className="dropUp">
          <img src="./img/Icon File.png" alt="" />
          <img src="./img/Icon Photo.png" alt="" />
          <img src="./img/Icon Video.png" alt="" />
        </div>
      </div>
    </div>
  );
};
// ChatsDialogs.whyDidYouRender = true;
export default withStyles(style, emojii)(React.memo(ChatsDialogs));
// export default ChatsDialogs;
