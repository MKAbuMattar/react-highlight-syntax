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

      <section>
        <table>
          <thead>
            <tr>
              <th>Theme</th>
              <th>Alias</th>
            </tr>
          </thead>
          <tbody>
            {SupportedTheme.map(({ name }, index) => {
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

export default Themes;
