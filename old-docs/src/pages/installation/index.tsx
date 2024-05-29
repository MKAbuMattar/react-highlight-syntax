import Head from 'next/head';
import type { NextPage } from 'next';

import DeviconsReactOriginal from 'devicons-react/lib/icons/DeviconsReactOriginal';

import Installation from '@/components/Installation';

const Page: NextPage = () => {
  return (
    <>
      <Head>
        <title>Installation | React Highlight Syntax</title>
      </Head>
      <header>
        <section className={'section-header'}>
          <DeviconsReactOriginal size={'3rem'} />
          <h1>
            React Highlight Syntax <span>Installation</span>
          </h1>
        </section>
      </header>

      <Installation />
    </>
  );
};

export default Page;
