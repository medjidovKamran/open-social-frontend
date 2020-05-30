import React from 'react';
import Layout from '../Layout';
import setCurrentTab from '../../actions/menu';
import UsersPage from "./UsersPage";


export default async function action({ store: { dispatch } }) {
  dispatch(setCurrentTab('Users'));

  await dispatch;

  return {
    chunks: ['users'],
    component: (
      <Layout>
        <UsersPage />
      </Layout>
    ),
    title: 'Users',
  };
}
