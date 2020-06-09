import React from 'react';
import Banner from './Banner';
import Layout from '../Layout/Layout';
import setCurrentTab from '../../actions/menu';

export default async function action({ store: { dispatch } }) {
  dispatch(setCurrentTab('Banner'));
  await dispatch;
  // export default function action() {
  return {
    chunks: ['Banner'],
    component: (
      <Layout>
        <Banner />
      </Layout>
    ),
    title: 'Banner',
  };
}
