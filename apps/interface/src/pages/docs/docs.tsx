import React from 'react';
import { GetStaticProps } from 'next';
import Layout from './../layout';

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};

export default function Docs() {
  return (
    <Layout metadata={{ title: 'Docs', description: 'Docs' }}>
      <h1>Yeysyssy</h1>
    </Layout>
  );
}
