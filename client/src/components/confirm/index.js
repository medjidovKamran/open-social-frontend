import React from 'react';
import Layout from '../Layout/Layout';
import Confirm from './confirm';

export default function action({ query }) {
  return {
    chunks: ['confirm'],
    component: (
      <Layout>
        <Confirm userKey={query.key} id={query.id} />
      </Layout>
    ),
    title: 'confirm',
  };
}
