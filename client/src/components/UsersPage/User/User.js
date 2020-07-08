import React from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';
import s from './User.scss';
import Link from '../../Link';
import UsersAvatar from '../../../assets/usersAvatar.png';
import AddIcon from '@material-ui/icons/Add';
import OwnChatButton from "../../profile/UserProfile/OwnChat";
import { setUserData } from '../../../actions/profile';
import { connect } from 'react-redux';

const User = ({user, setUserData}) => {
  const {firstName, lastName, id} = user;

  const toUserProfile = (id) =>{
    setUserData({id});
  };


  return (
    <>
    <div className={s.userContainer}>
      <div onClick={() => toUserProfile(id)}>
        <Link to={'/'}>
          <img className={s.UsersAvatar} src={UsersAvatar} alt={UsersAvatar}/>
        <span>
					{firstName} {lastName}
				</span>
        </Link>
      </div>
      <div className={s.buttonAddWrite}>
        <div>
        <button className={s.buttonAdd}>
          Add <AddIcon className={s.buttonAddPlus} />
        </button>
        </div>
        <div>
          <OwnChatButton />
        </div>
      </div>
    </div>
      <hr className={s.line}/>
      </>
  );
};

 User.whyDidYouRender = true;
 export default withStyles(s)(React.memo(User));

// export default connect({setUserData})(withStyles(s)(React.memo(User)));
