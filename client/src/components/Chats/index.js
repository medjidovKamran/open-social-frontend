import React from 'react';
import Chats from './Chats';
import Layout from '../Layout';
import setCurrentTab from '../../actions/menu';

export default async function action({ store: { dispatch } }) {
  dispatch(setCurrentTab('Chats'));
  // await dispatch(getInfo());
  await dispatch;

  return {
    chunks: ['about'],
    component: (
      <Layout>
        <Chats />
      </Layout>
    ),
    title: 'Chats',
  };
}
