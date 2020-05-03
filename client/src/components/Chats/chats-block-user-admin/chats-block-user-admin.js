/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';
import Avatar from '@material-ui/core/Avatar';
import { connect } from 'react-redux';
import style from './chats-block-user-admin.module.scss';
import avatarAdmin from '../../../assets/avatar1.png';

class ChatsBlockUserAdmin extends React.Component {
  render() {
    return (
      <div className={style.blockUserAdmin}>
        <div>
          <Avatar className={style.avatar} alt="Remy Sharp" src={avatarAdmin} />
          <div>bdbldjbl</div>
        </div>
      </div>
    );
  }
}

ChatsBlockUserAdmin.whyDidYouRender = true;

export default connect(({ userChats: { data, events, error, isLoading } }) => ({
  data,
  error,
  events,
  isLoading,
}))(withStyles(style)(React.memo(ChatsBlockUserAdmin)));
