import Head from 'next/head';
import { Fragment } from 'react';

export default function Layout({
  metadata,
  children,
}: {
  metadata: {
    title: string;
    description: string;
  };
  children: React.ReactNode;
}) {
  return (
    <Fragment>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {children}
    </Fragment>
  );
}
