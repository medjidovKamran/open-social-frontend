import React from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';
import PropTypes from 'prop-types';
// import Avatar from '@material-ui/core/Avatar';
import { connect } from 'react-redux';
import Loader from '../../Loader/Loader';
import style from './chats-block-user-admin.module.scss';
import dumpImg from '../../../assets/chat/noImg.png';

const ChatsBlockUserAdmin = ({
  firstName,
  lastName,
  //   userName,
  avatar,
  error,
  isLoading,
}) => {
  if (error) {
    return <p className="mb-0">{error}</p>;
  }

  if (isLoading) {
    return (
      <div>
        <Loader />
      </div>
    );
  }
  const avatarImg = avatar && avatar.url ? avatar.url : dumpImg;
  return (
    <div className={style.blockUserAdmin}>
      <div>
        <div
          className={style.avatar}
          style={{ backgroundImage: `url( http://${avatarImg})` }}
        />
        <div>
          <h4>{` ${firstName} ${lastName}`}</h4>
        </div>
      </div>
    </div>
  );
};

//   userName: PropTypes.string.isRequired,

ChatsBlockUserAdmin.propTypes = {
  // eslint-disable-next-line react/require-default-props
  avatar: PropTypes.shape({
    url: PropTypes.string,
  }),
  error: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
  lastName: PropTypes.string.isRequired,
};

ChatsBlockUserAdmin.whyDidYouRender = true;

export default connect(
  ({
    userProfile: { firstName, lastName, userName, avatar, error, isLoading },
  }) => ({
    avatar,
    error,
    firstName,
    isLoading,
    lastName,
    userName,
  }),
)(withStyles(style)(React.memo(ChatsBlockUserAdmin)));
