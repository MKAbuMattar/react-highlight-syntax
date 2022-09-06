import type { NextPage } from 'next';
import Head from 'next/head';

import DeviconsReactOriginal from 'devicons-react/lib/icons/DeviconsReactOriginal';

import supportedLanguages from '@/data/supportedLanguages.json';

const Languages: NextPage = () => {
  return (
    <>
      <Head>
        <title>Supported Languages | React Highlight Syntax</title>
      </Head>
      <header>
        <section className={'section-header'}>
          <DeviconsReactOriginal size={'3rem'} />
          <h1>
            React Highlight Syntax <span>Supported Languages</span>
          </h1>
        </section>
      </header>

      <section className={'table___container'}>
        <div className={'table'}>
          <div className={'row header red'}>
            <div className={'cell'}>Language</div>
            <div className={'cell'}>Alias</div>
          </div>
          {supportedLanguages.map(({ name }, index) => {
            return (
              <div key={index} className={'row'}>
                <div className={'cell'} data-title="Language">
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

export default Languages;
