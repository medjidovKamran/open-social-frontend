import React from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';
import SearchIcon from '@material-ui/icons/Search';
import s from './UsersSearchPanel.scss';

const UserSearchPanel = () => {
  return (
    <div className={s.searchPanel}>
      <div className={s.searchPanelDiv}>
        <input className={s.searchPanelInput} />
        <button className={s.searchPanelIcon}>
          <SearchIcon style={{ color: 'white' }} />
        </button>
      </div>
    </div>
  );
};

UserSearchPanel.whyDidYouRender = true;
export default withStyles(s)(React.memo(UserSearchPanel));
