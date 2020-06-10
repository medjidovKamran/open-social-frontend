import React from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';
import style from './message.module.scss';
import avatar from '../../../assets/avatar.png'
import checkmark from '../../../assets/chat/checkmark.svg'

function Message() {
  return (
    <React.Fragment>
    <div className={style.recived}>
        <div className={style.message}>
          <a href=""><img src={avatar} alt="" className={style.messageAvatar}></img></a>
          <div className={style.blockRecived}><span className={style.textRecived}>Finally found the time to write to you. I need your help in creating interactive animations for my mobile application.</span></div>
          <button className={style.messageMenuRecived}></button>
        </div>
        <span className={style.timeRecived}>4 days ago</span>  
    </div>
  
      <div className={style.sended}>
        <div className={style.message}>
          <button className={style.messageMenuSended}></button>
          <div className={style.blockSended}><span className={style.textSended}>Hey! Okay, send out.</span></div>
          <img src={checkmark} alt=""></img>
        </div>
        <span className={style.timeSended}>4 days ago</span>
      </div>

      <div className={style.timeLine}>
        <div className={style.line}></div>
        <span className={style.lastTime}>3 days ago</span>
        <div className={style.line}></div>
      </div>
      </React.Fragment>
  )
}

export default withStyles(style)(React.memo(Message));