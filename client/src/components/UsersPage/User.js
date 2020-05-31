import React from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';
import s from './UsersPage.scss';
import Link from "../Link";
import Button from "@material-ui/core/Button";
import avatar from '../../assets/avatar1.png'

let User = ({user}) => {
  return (
    <div>
        <span>
            <div>
                <Link to={'/' + user.id}>
                    <img
                      className={s.UsersAvatar}
                      src={avatar}
                    />
                </Link>
            </div>
            <div>
              <Button variant="contained" color="primary">Follow</Button>
            </div>
        </span>
      <span>
            <div>{user.firstName} {user.lastName}</div><div>{user.status}</div>
        </span>
    </div>
  )
}


User.whyDidYouRender = true;
export default withStyles(s)(React.memo(User));
