import React from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText/ListItemText';
import avatar from '../../../assets/avatar2.png';
import s from './chats-block-users.module.scss';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    height: '10%',
    maxWidth: 360,
    width: '100%',
  },
}));
// eslint-disable-next-line no-magic-numbers
const array = [0, 1, 2, 3, 4];

const ChatsBlockUsers = () => {
  const classes = useStyles();
  return (
    <div>
      <hr className={s.line} />
      <List dense className={classes.root}>
        {array.map(value => {
          return (
            <div className={s.LinkToDialogs} to="./dialogsUser1">
              <ListItem key={value} button>
                <ListItemAvatar>
                  <Avatar src={avatar} />
                </ListItemAvatar>
                <ListItemText primary={`USER ${value + 1}`} />
              </ListItem>
              <hr className={s.line} />
            </div>
          );
        })}
      </List>
    </div>
  );
};
ChatsBlockUsers.whyDidYouRender = true;
export default withStyles(s)(React.memo(ChatsBlockUsers));
