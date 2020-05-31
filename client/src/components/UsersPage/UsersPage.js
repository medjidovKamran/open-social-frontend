import React from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';
import s from './UsersPage.scss';
import {connect} from "react-redux";
import bootstrap from "bootstrap/dist/css/bootstrap.min.css";
import {getUsersData} from "../../actions/users";
import User from "./User";


const UsersPage = ({data}) => {
  return (
    <div className={s.form}>
      <h3 className={s.heading}>Users</h3>
      {data.map(u =>
        <User
          key={u.id}
          user={u}
        />
      )
      }
    </div>
  );
};

UsersPage.whyDidYouRender = true;
export default connect(
  ({ users: { data, events, error, isLoading }}) => ({
    data, events, error, isLoading
  }),
  {getUsersData},
)(withStyles(bootstrap, s)(React.memo(UsersPage)));
