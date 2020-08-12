import React from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';
import BorderColorIcon from '@material-ui/icons/BorderColor';
import AddIcon from '@material-ui/icons/Add';
import { connect } from 'react-redux';
import s from './User.scss';
import Link from '../../Link';
import UsersAvatar from '../../../assets/usersAvatar.png';
import OwnChatButton from '../../profile/UserProfile/OwnChat';
import { setUserData } from '../../../actions/profile';
import textData from "../../../utils/lib/languages";

class User extends React.Component {
  toUserProfile = id => {
    this.props.setUserData({ id });
  };

  componentDidMount() {
    this.toUserProfile();
  }

  componentWillUnmount() {
    this.props.setUserData({ id: null });
  }

  render() {
    const { user:{firstName, lastName, id}, lang } = this.props;
    const { usersPage } = textData;

    return (
      <>
        <div className={s.userContainer}>
          <div onClick={() => this.toUserProfile(id)}>
            <Link to={`/profile${id}`}>
              <img
                className={s.UsersAvatar}
                src={UsersAvatar}
                alt={UsersAvatar}
              />
              <span>
                {firstName} {lastName}
              </span>
            </Link>
          </div>
          <div className={s.buttonAddWrite}>
            <div>
              <button className={s.buttonAdd}>
                {usersPage.addButton[lang]}
                <AddIcon className={s.buttonAddPlus} />
              </button>
            </div>
            <div>
              <OwnChatButton />
            </div>
          </div>
        </div>
        <hr className={s.line} />
      </>
    );
  }
}

User.whyDidYouRender = true;
export default connect(
  ({ menu: { lang } }) => ({
    lang,
  }),
  { setUserData },
)(withStyles(s)(React.memo(User)));
