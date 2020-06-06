import React from 'react';
import Message from './message'
import withStyles from 'isomorphic-style-loader/withStyles';
import style from './messages.module.scss';

function Messages() {
  return (
    <div class={style.messages}>
      <Message />
    </div>
  )
}

export default withStyles(style)(React.memo(Messages));
