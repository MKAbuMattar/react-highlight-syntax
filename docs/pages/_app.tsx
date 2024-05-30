import { Fragment } from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { DefaultSeo } from 'next-seo';

import SEO from '@/config/next-seo.config';

import 'tailwindcss/tailwind.css';
import '@/styles/globals.scss';
import '@/styles/style.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Head>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
      </Head>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
