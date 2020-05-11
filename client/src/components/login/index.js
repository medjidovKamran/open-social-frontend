import React from 'react';
import Layout from '../Layout/Layout';
import LoginPage from './LoginPage';
import setCurrentTab from '../../actions/menu';

export default async function action({ store: { dispatch } }) {
  dispatch(setCurrentTab('Login'));
  await dispatch;

  return {
    chunks: ['login'],
    component: (
      <Layout>
        <LoginPage />
      </Layout>
    ),
    title: 'Login',
  };
}
