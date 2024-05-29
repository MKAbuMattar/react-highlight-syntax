import type { NextPage } from 'next';
import Head from 'next/head';

import DeviconsReactOriginal from 'devicons-react/lib/icons/DeviconsReactOriginal';

import SupportedTheme from '@/data/supportedThemes.json';

const Themes: NextPage = () => {
  return (
    <>
      <Head>
        <title>Supported Themes | React Highlight Syntax</title>
      </Head>
      <header>
        <section className={'section-header'}>
          <DeviconsReactOriginal size={'3rem'} />
          <h1>
            React Highlight Syntax <span>Supported Themes</span>
          </h1>
        </section>
      </header>

      <section className={'table___container'}>
        <div className={'table'}>
          <div className={'row header red'}>
            <div className={'cell'}>Theme</div>
            <div className={'cell'}>Alias</div>
          </div>
          {SupportedTheme.map(({ name }, index) => {
            return (
              <div key={index} className={'row'}>
                <div className={'cell'} data-title="Theme">
                  {name}
                </div>
                <div className={'cell'} data-title="Alias">
                  {name}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Themes;
