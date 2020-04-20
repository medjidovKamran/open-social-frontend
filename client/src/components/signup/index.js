import React from 'react';
import Layout from '../Layout/Layout';
import SignupPage from './SignupPage';
import setCurrentTab from '../../actions/menu';

export default async function action({ store: { dispatch } }) {
  dispatch(setCurrentTab('SignUp'));
  await dispatch;

  return {
    chunks: ['signup'],
    component: (
      <Layout>
        <SignupPage />
      </Layout>
    ),
    title: 'Signup',
  };
}
