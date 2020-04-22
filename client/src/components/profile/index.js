import React from 'react';
import Home from './Home';
import Layout from '../Layout/Layout';
import setCurrentTab from '../../actions/menu';

export default async function action({ store: { dispatch } }) {
  dispatch(setCurrentTab('Profile'));
  // await dispatch(getInfo());
  await dispatch;

  return {
    chunks: ['profile'],
    component: (
      <Layout>
        <Home />
      </Layout>
    ),
    title: 'Profile',
  };
}
