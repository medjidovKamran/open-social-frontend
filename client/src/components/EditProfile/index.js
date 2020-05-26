import React from 'react';
import Layout from '../Layout/Layout';
import setCurrentTab from '../../actions/menu';
import EditProfilePage from './EditProfile';

export default async function action({ store: { dispatch } }) {
  dispatch(setCurrentTab('Edit-profile'));

  await dispatch;

  return {
    chunks: ['edit-profile'],
    component: (
      <Layout>
        <EditProfilePage />
      </Layout>
    ),
    title: 'Edit-profile',
  };
}
