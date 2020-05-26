/* eslint-disable sonarjs/no-identical-functions */
/* eslint-disable promise/prefer-await-to-then */
/* eslint-disable unicorn/consistent-function-scoping */
import axios from 'axios';
import isomorphicCookie from 'isomorphic-cookie';
import moment from 'moment';
import history from '../history';
import { SET_USER_MESSAGE, SET_USER_AUTH, apiURL } from '../constants';
import apiClient from '../utils/axios-with-auth';

const setUserMessage = message => ({
  message,
  type: SET_USER_MESSAGE,
});

const DELAY = 6500;

const contentType = 'application/json';

const resetMessage = () => ({
  message: '',
  type: SET_USER_MESSAGE,
});

const setUserAuth = data => ({
  data,
  type: SET_USER_AUTH,
});

export const login = ({ email, password }) => dispatch => {
  setTimeout(() => dispatch(resetMessage()), DELAY);
  const cookieExpires = 60;
  return axios
    .post(
      `${apiURL}/api/v1/auth/login`,
      JSON.stringify({
        email,
        password,
      }),
      {
        headers: {
          Authorization: '',
          'content-type': contentType,
        },
      },
    )
    .then(response => {
      dispatch(setUserAuth(response.data.user));
      isomorphicCookie.save('token', response.data.token, {
        expires: moment()
          .add(cookieExpires, 'minute')
          .toDate(),
        secure: false,
      });
      return dispatch(setUserMessage('You are logged in.'));
    })
    .catch(error => {
      const { response } = error;
      if (response) {
        dispatch(setUserMessage(response.data));
      }
      return error.toJSON();
    });
};

export const signup = ({
  firstName,
  lastName,
  birthdayDate,
  userName,
  email,
  password,
}) => dispatch => {
  setTimeout(() => dispatch(resetMessage()), DELAY);
  return axios
    .post(
      `${apiURL}/api/v1/auth/register`,
      JSON.stringify({
        birthdayDate,
        email,
        firstName,
        lastName,
        password,
        userName,
      }),
      {
        headers: {
          'content-type': contentType,
        },
      },
    )
    .then(response => {
      dispatch(setUserMessage(response.data));
      return response;
    })
    .catch(error => {
      const { response } = error;
      dispatch(setUserMessage(response.data));
      return error.toJSON();
    });
};

export const editProfile = ({
  firstName,
  lastName,
  birthdayDate,
  userName,
  email,
  password,
}) => dispatch => {
  setTimeout(() => dispatch(resetMessage()), DELAY);
  return axios
    .put(
      `${apiURL}/api/v1/users/${apiClient.userId()}`,
      JSON.stringify({
        birthdayDate,
        email,
        firstName,
        lastName,
        password,
        userName,
      }),
      {
        headers: {
          'content-type': contentType,
        },
      },
    )
    .catch(error => {
      const { response } = error;
      dispatch(setUserMessage(response.data));
      return error.toJSON();
    });
};

export const signout = () => dispatch => {
  isomorphicCookie.remove('token');
  history.push('/login');
  dispatch(setUserMessage('Signed out!'));
  setTimeout(() => dispatch(resetMessage()), DELAY);
};
