import '@/styles/global.css';
import '@/styles/main.css';

import type { AppProps } from 'next/app';

import Head from 'next/head';
import Layout from '@/components/layout';

export default function MyApp({ Component, pageProps }: AppProps) {

  return (
    <Layout>
      <Head>
        <title>Travel & Labor</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  )
}