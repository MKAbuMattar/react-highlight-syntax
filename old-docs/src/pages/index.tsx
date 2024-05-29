import type { NextPage } from 'next';

import DeviconsReactOriginal from 'devicons-react/lib/icons/DeviconsReactOriginal';

import Installation from '@/components/Installation';
import Usage from '@/components/Usage';

const Home: NextPage = () => {
  return (
    <>
      <header>
        <section className={'section-header'}>
          <DeviconsReactOriginal size={'3rem'} />
          <h1>React Highlight Syntax</h1>
        </section>
      </header>

      <section>
        <h2>Installation</h2>
        <Installation />

        <h2>Usage</h2>
        <Usage />
      </section>
    </>
  );
};

export default Home;
