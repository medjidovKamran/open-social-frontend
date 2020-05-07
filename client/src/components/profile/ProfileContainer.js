import React from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';
import { connect } from 'react-redux';
import 'react-tabs/style/react-tabs.css';
import PropTypes from 'prop-types';
import Loader from '../Loader';
import Profile from './UserProfile/Profile';

const ProfileContainer = props => {
  const { isLoading, error } = props.profile;

  if (isLoading || error) {
    return (
      <div>
        <Loader />
      </div>
    );
  }

  if (error) {
    return <p className="mb-0">{error}</p>;
  }

  return <Profile {...props} />;
};

ProfileContainer.defaultProps = {
  error: '',
  isLoading: false,
};

ProfileContainer.propTypes = {
  error: PropTypes.string,
  isLoading: PropTypes.bool,
};

const mapStateToProps = state => ({
  profile: state.userProfile,
});

ProfileContainer.whyDidYouRender = true;

export default connect(
  mapStateToProps,
  null,
)(withStyles()(React.memo(ProfileContainer)));
