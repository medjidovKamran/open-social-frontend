import React from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';
import Avatar from '@material-ui/core/Avatar';
import style from './chats-block-user-admin.module.scss';
import avatarAdmin from '../../../assets/avatar1.png';

const ChatsBlockUserAdmin = () => {
  return (
    <div className={style.blockUserAdmin}>
      <div>
        <Avatar className={style.avatar} alt="Remy Sharp" src={avatarAdmin} />
        <div>Homer Simpson</div>
      </div>
    </div>
  );
};
ChatsBlockUserAdmin.whyDidYouRender = true;
export default withStyles(style)(React.memo(ChatsBlockUserAdmin));
