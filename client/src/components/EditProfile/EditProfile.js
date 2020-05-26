/* eslint-disable no-shadow */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/withStyles';
import Alert from 'react-bootstrap/Alert';
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
import history from '../../history';
import s from './EditProfile.scss';
import EditProfileForm from '../EditProfileForm/EditProfileForm';
import { editProfile } from '../../actions/profile';

class EditProfilePage extends React.Component {
  static propTypes = {
    editProfile: PropTypes.func.isRequired,
    message: PropTypes.string.isRequired,
  };

  handleSubmit = async data => {
    const { editProfile } = this.props;
    const response = await editProfile(data);
    if (response.name !== 'Error') history.push('/');
  };

  render() {
    const { message } = this.props;
    return (
      <div className={s.form}>
        {message && <Alert variant="info">{message}</Alert>}
        <h3 className={s.heading}>Edit profile page</h3>
        {process.env.BROWSER && (
          <EditProfileForm onSubmit={this.handleSubmit} submitText="Save" />
        )}
      </div>
    );
  }
}

export default withStyles(bootstrap, s)(
  connect(
    ({ user: { message } }) => ({ message }),
    { editProfile },
  )(EditProfilePage),
);
