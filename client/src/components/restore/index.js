import React from 'react';
import Layout from '../Layout/Layout';
import Restore from './Restore';

import setCurrentTab from '../../actions/menu';

export default async function action({ store: { dispatch } }) {
  dispatch(setCurrentTab('restore'));
  await dispatch;

  return {
    chunks: ['restore'],
    component: (
      <Layout>
        <Restore />
      </Layout>
    ),
    title: 'restore',
  };
}
