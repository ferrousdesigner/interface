import React, { useState } from 'react';
import { GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import styles from './docs.module.css';
import Layout from './../layout';

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};

export default function Docs({ docs }: { docs: any[] }) {
  const router = useRouter();
  console.log('docs', docs);
  const [selectedDoc, setSelectedDoc] = useState();

  return (
    <Layout metadata={{ title: 'Docs', description: 'Docs' }}>
      <h1>Yeysyssy</h1>
    </Layout>
  );
}
