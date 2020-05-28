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

class EditProfilePage extends React.Component {
  static propTypes = {
    editProfile: PropTypes.func.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    userName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    birthDate: PropTypes.string.isRequired,
  };

  handleSubmit = async data => {
    const { editProfile } = this.props;
    await editProfile(data);
    history.push('/');
  };

  render() {
    const { firstName, lastName, userName, email, birthdayDate } = this.props;
    return (
      <div className = {s.form}>
        <h3 className = {s.heading}>Edit profile page</h3>
        {process.env.BROWSER && (
          <EditProfileForm
            firstName = {firstName}
            lastName = {lastName}
            userName = {userName}
            email = {email}
            birthdayDate = {birthdayDate}
            onSubmit = {this.handleSubmit}
            submitText = "Save"
          />
        )}
      </div>
    );
  }
}
EditProfilePage.whyDidYouRender = true;

export default connect(
  ({ userProfile: { firstName, lastName, userName, email, birthdayDate } }) => ({
    firstName,
    lastName,
    userName,
    email,
    birthdayDate
  }),
  { editProfile },
)(withStyles(bootstrap, s)(React.memo(EditProfilePage)));
