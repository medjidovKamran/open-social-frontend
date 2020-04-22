import React from 'react';
import About from './About';
import Layout from '../Layout';
import setCurrentTab from '../../actions/menu';

export default async function action({ store: { dispatch } }) {
  dispatch(setCurrentTab('About'));
  // await dispatch(getInfo());
  await dispatch;

  return {
    chunks: ['about'],
    component: (
      <Layout>
        <About />
      </Layout>
    ),
    title: 'About',
  };
}
