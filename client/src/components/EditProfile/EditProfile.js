/* eslint-disable no-shadow */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/withStyles';
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
import s from './EditProfile.scss';
import EditProfileForm from '../EditProfileForm/EditProfileForm';
import { editProfile } from '../../actions/profile';
import history from '../../history';
import apiClient from "../../utils/axios-with-auth";

class EditProfilePage extends React.Component {
  static propTypes = {
    editProfile: PropTypes.func.isRequired,
  };

  handleSubmit = async data => {
    const { editProfile } = this.props;
    await editProfile(data);
    history.push(`/profile${apiClient.userId()}`);
  };

  render() {
    return (
      <div className={s.form}>
        <h3 className={s.heading}>Edit profile page</h3>
        {process.env.BROWSER && (
          <EditProfileForm onSubmit={this.handleSubmit} submitText="Save" />
        )}
      </div>
    );
  }
}
EditProfilePage.whyDidYouRender = true;

export default connect(
  ({
    userProfile: { firstName, lastName, userName, email, birthdayDate },
  }) => ({
    birthdayDate,
    email,
    firstName,
    lastName,
    userName,
  }),
  { editProfile },
)(withStyles(bootstrap, s)(React.memo(EditProfilePage)));
