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

      <section>
        <table>
          <thead>
            <tr>
              <th>Language</th>
              <th>Alias</th>
            </tr>
          </thead>
          <tbody>
            {supportedLanguages.map(({ name }, index) => {
              return (
                <tr key={index}>
                  <td>{name}</td>
                  <td>{name}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </section>
    </>
  );
};

export default Languages;
