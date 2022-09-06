import type { AppProps } from 'next/app';
import Head from 'next/head';
import { DefaultSeo } from 'next-seo';
import { useState } from 'react';

import SEO from '@/config/next-seo.config';

import Navbar from '@/components/Nav';
import { MenuIcon } from '@/icons/index';
import '@/style/style.scss';

const _App = ({ Component, pageProps }: AppProps) => {
  const [toggled, setToggled] = useState(false);

  const handleToggleSidebar = (value: boolean) => {
    setToggled(value);
  };

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
      </Head>
      <DefaultSeo {...SEO} />
      <div className="app">
        <Navbar toggled={toggled} handleToggleSidebar={handleToggleSidebar} />
        <main>
          <div className="btn-toggle" onClick={() => handleToggleSidebar(true)}>
            <MenuIcon />
          </div>
          <Component {...pageProps} />
        </main>
      </div>
    </>
  );
};

export default _App;
