import axios from 'axios';
import isomorphicCookie from 'isomorphic-cookie';
import * as JWT from 'jwt-decode';
import history from '../history';
import { apiURL } from '../constants';

const authHeader = {
  Authorization: `Bearer ${isomorphicCookie.load('token')}`,
};

const authorize = response => {
  if (response.Message) {
    isomorphicCookie.remove('token');
    history.push('/login');
  }
};

export default {
  async get(url, data) {
    const response = await axios.get(url, {
      headers: authHeader,
      params: data,
    });
    authorize(response.data);
    return response;
  },
  async post(url, data) {
    const response = await axios.post(url, JSON.stringify(data), {
      headers: { ...authHeader, 'Content-Type': 'application/json' },
    });
    authorize(response.data);
    return response;
  },
  async put(url, data) {
    const response = await axios.put(url, JSON.stringify(data), {
      headers: { ...authHeader, 'Content-Type': 'application/json' },
    });
    authorize(response.data);
    return response;
  },
  async saveUserProfilePhoto(profilePhoto) {
    const formData = new FormData();
    formData.append('file', profilePhoto);
    try {
      return await axios.put(
        `${apiURL}/api/v1/users/${this.userId()}`,
        formData,
        {
          headers: { ...authHeader, 'Content-Type': 'multipart/form-data' },
        },
      );
    } catch (error) {
      return error;
    }
  },
  userId() {
    const token = isomorphicCookie.load('token');
    if (token) {
      return JWT(token).user.id;
    }
    return null;
  },
};
