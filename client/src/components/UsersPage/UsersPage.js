import React from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';
import s from './UsersPage.scss';

const UsersPage = () => {
  return (
    <div className={s.container}>
      Users will be here
    </div>
  );
};

UsersPage.whyDidYouRender = true;
export default withStyles(s)(React.memo(UsersPage));
