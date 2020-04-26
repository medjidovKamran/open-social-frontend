import React from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import s from './chats-block-user-admin.module.scss';
import avatarAdmin from '../../../assets/avatar1.png';

const useStyles = makeStyles(() => ({
  avatar: {
    height: '150px',
    width: '150px',
  },
}));

const ChatsBlockUserAdmin = () => {
  const classes = useStyles();
  return (
    <div className={s.blockUserAdmin}>
      <div>
        <Avatar className={classes.avatar} alt="Remy Sharp" src={avatarAdmin} />
        <div>Homer Simpson</div>
      </div>
    </div>
  );
};
ChatsBlockUserAdmin.whyDidYouRender = true;
export default withStyles(s)(React.memo(ChatsBlockUserAdmin));
