import React from 'react';
import Home from './Home';
import Layout from '../Layout/Layout';
import { getUserData } from '../../actions/profile';
import ProfileContainer from './ProfileContainer';

export default async function action({ store: { dispatch } }) {
  dispatch(getUserData());

  await dispatch;

  return {
    chunks: ['profile'],
    component: (
      <Layout>
        <ProfileContainer />
        <Home />
      </Layout>
    ),
    title: 'Profile',
  };
}
