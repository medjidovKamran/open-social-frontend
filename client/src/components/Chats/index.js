import React from 'react';
import Chats from './Chats';
import Layout from '../Layout';
import setCurrentTab from '../../actions/menu';
import { getUserChatData, getUsersChatData } from '../../actions/chats';

import apiClient from '../../utils/axios-with-auth';

export default async function action({ store: { dispatch } }) {
  const offset = 0;
  const limit = 5;
  dispatch(setCurrentTab('Chats'));
  // dispatch(getUsersChatData(limit, offset));
  dispatch(getUserChatData(apiClient.userId()));

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
