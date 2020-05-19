import React from 'react';
import Layout from '../Layout/Layout';
import { getUserData } from '../../actions/profile';
import ProfileContainer from './ProfileContainer';
import apiClient from '../../utils/axios-with-auth';
import setCurrentTab from '../../actions/menu';

export default async function action({ store: { dispatch } }) {
  dispatch(setCurrentTab('Profile'));
  dispatch(getUserData(apiClient.userId()));

  await dispatch;

  return {
    chunks: ['profile'],
    component: (
      <Layout>
        <ProfileContainer />
      </Layout>
    ),
    title: 'Profile',
  };
}
