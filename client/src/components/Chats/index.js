import React from 'react';
import Chats from './Chats';
import Layout from '../Layout';
import setCurrentTab from '../../actions/menu';
import { getUsersData } from '../../actions/chats';

export default async function action({ store: { dispatch } }) {
  dispatch(setCurrentTab('Chats'));
  dispatch(getUsersData());

  await dispatch;

  return {
    chunks: ['chats'],
    component: (
      <Layout>
        <Chats />
      </Layout>
    ),
    title: 'Chats',
  };
}
