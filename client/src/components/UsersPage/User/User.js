import React from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';
import s from './User.scss';
import Link from '../../Link';
import UsersAvatar from '../../../assets/usersAvatar.png';
import AddIcon from '@material-ui/icons/Add';
import OwnChatButton from "../../profile/UserProfile/OwnChat";
import { setUserData } from '../../../actions/profile';
import { connect } from 'react-redux';

class User extends React.Component {

  toUserProfile = (id) =>{
    this.props.setUserData({id});
  };

  componentDidMount() {
		this.toUserProfile()
	}
  render(){
    const { firstName, lastName, id } = this.props.user;
    return (
      <>
      <div className={s.userContainer}>
        <div onClick={() => this.toUserProfile(id)}>
          <Link to={'/'+id}>
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
};

 User.whyDidYouRender = true;
 export default connect(null, {setUserData})(withStyles(s)(React.memo(User)));
