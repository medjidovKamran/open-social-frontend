import React from 'react';
import Layout from '../Layout/Layout';
import NotFound from './NotFound';

const title = 'Page Not Found';

export default function action() {
  return {
    chunks: ['not-found'],
    component: (
      <Layout>
        <NotFound title={title} />
      </Layout>
    ),
    status: 404,
    title,
  };
}
