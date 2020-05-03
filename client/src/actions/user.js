/* eslint-disable promise/prefer-await-to-then */
/* eslint-disable unicorn/consistent-function-scoping */
import axios from 'axios';
import isomorphicCookie from 'isomorphic-cookie';
import moment from 'moment';
import history from '../history';
import { SET_USER_MESSAGE, apiURL } from '../constants';

const setUserMessage = message => ({
  message,
  type: SET_USER_MESSAGE,
});

const DELAY = 4500;

const resetMessage = () => ({
  message: '',
  type: SET_USER_MESSAGE,
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
          'content-type': 'application/json',
        },
      },
    )
    .then(response => {
      isomorphicCookie.save('token', response.data.Token, {
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
          'content-type': 'application/json',
        },
      },
    )
    .then(response => {
      dispatch(setUserMessage(response.data));
      return response;
    })
    .catch(error => {
      dispatch(setUserMessage(error.response));
      return error.toJSON();
    });
};

export const signout = () => dispatch => {
  isomorphicCookie.remove('token');
  history.push('/login');
  dispatch(setUserMessage('Signed out!'));
  setTimeout(() => dispatch(resetMessage()), DELAY);
};
