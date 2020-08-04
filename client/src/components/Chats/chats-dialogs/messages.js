import React from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';
import Message from './message';
import style from './messages.module.scss';

function Messages() {
  return (
    <div className={style.messages}>
      <Message />
    </div>
  );
}

export default withStyles(style)(React.memo(Messages));
