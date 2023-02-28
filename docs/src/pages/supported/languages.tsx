import type { NextPage } from 'next';
import Head from 'next/head';

import DeviconsReactOriginal from 'devicons-react/lib/icons/DeviconsReactOriginal';

import supportedLanguages from '@/data/supportedLanguages.json';

const Languages: NextPage = () => {


  const removeSpace = (val: string) => val.replace(/\s/g, '');

const capitalize = (val: string) =>
  val
    .replace(/[.:\-\/]/g, '')
    .split(' ')
    .map((el) => el.charAt(0).toUpperCase() + el.slice(1))
    .join(' ');

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
                  {removeSpace(capitalize(name))}
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
