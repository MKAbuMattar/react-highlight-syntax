import { Fragment, useState, ChangeEvent } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Language, Theme, CopyBtnTheme } from 'react-highlight-syntax';

import SyntaxHighlighter from '@/components/ui/syntax-highlighter.ui';

import supportedLanguages from '@/data/supportedLanguages.json';
import SupportedTheme from '@/data/supportedThemes.json';

const LiveDemoComponent = () => {
  const [language, setLanguage] = useState('.properties');
  const [theme, setTheme] = useState('A11yDark');
  const [copy, setCopy] = useState(true);
  const [copyBtnTheme, setCopyBtnTheme] = useState('Dark');

  const handleChangeLanguage = (e: ChangeEvent<HTMLSelectElement>) => {
    setLanguage(e.target.value);
  };

  const handleChangeTheme = (e: ChangeEvent<HTMLSelectElement>) => {
    setTheme(e.target.value);
  };

  const handleChangeCopy = (e: ChangeEvent<HTMLInputElement>) => {
    e.target.value === 'true' ? setCopy(true) : setCopy(false);
  };

  const handleChangeCopyBtnTheme = (e: ChangeEvent<HTMLSelectElement>) => {
    setCopyBtnTheme(e.target.value);
  };

  const removeSpace = (val: string) => val.replace(/\s/g, '');

  const capitalize = (val: string) =>
    val
      .replace(/[.:\-\/]/g, '')
      .split(' ')
      .map((el) => el.charAt(0).toUpperCase() + el.slice(1))
      .join(' ');

  const getCode = (languageName: string) => {
    const language = supportedLanguages.find(
      (language) => language.name === languageName,
    );

    return language?.code;
  };

  return (
    <Fragment>
      {/* <div class="> */}

      <main
        className={
          'w-full max-w-4xl mx-auto py-8 flex flex-col items-center justify-center'
        }
      >
        <header>
          <section className={'section-header'}>
            <h1>
              React Highlight Syntax <span>Live Demo</span>
            </h1>
          </section>
        </header>

        <section>
          <label htmlFor="language">language</label>
          <select name="language" id="language" onChange={handleChangeLanguage}>
            {supportedLanguages.map(({ name }, index) => {
              return (
                <Fragment key={index}>
                  <option value={name}>{name}</option>
                </Fragment>
              );
            })}
          </select>

          <br />

          <label htmlFor="theme">theme</label>
          <select name="theme" id="theme" onChange={handleChangeTheme}>
            {SupportedTheme.map(({ name }, index) => {
              return (
                <Fragment key={index}>
                  <option value={name}>{name}</option>
                </Fragment>
              );
            })}
          </select>

          <br />

          <label htmlFor="copy">copy</label>
          <span onChange={handleChangeCopy}>
            <input type="radio" value={'true'} name="copy" defaultChecked />{' '}
            True
            <input type="radio" value={'false'} name="copy" /> False
          </span>

          <br />

          <label htmlFor="copyBtnTheme">copyBtnTheme</label>
          <select
            name="copyBtnTheme"
            id="copyBtnTheme"
            onChange={handleChangeCopyBtnTheme}
          >
            <option value="Dark">Dark</option>
            <option value="Light">Light</option>
          </select>
        </section>

        <Tabs className={'tabs__container'}>
          <TabList className={'tabs__list'}>
            <Tab className={'tab__container'}>Live Demo</Tab>
            <Tab className={'tab__container'}>Code</Tab>
          </TabList>

          <TabPanel>
            {supportedLanguages.map(({ name, code }, index) => {
              if (name === language) {
                return (
                  <Fragment key={index}>
                    <div className={'card'}>
                      <div className={'card__info'}>
                        <h4 className={'card__title'}>Live Demo</h4>
                        <p className={'card__description'}>
                          Language : {removeSpace(capitalize(language))}
                        </p>

                        <p className={'card__description'}>Theme : {theme}</p>
                        <p className={'card__description'}>
                          Copy : {copy ? 'True' : 'False'}
                        </p>
                        <p className={'card__description'}>
                          CopyBtnTheme : {copyBtnTheme}
                        </p>
                      </div>
                      <SyntaxHighlighter
                        language={name as Language}
                        theme={theme as Theme}
                        copy={copy}
                        copyBtnTheme={copyBtnTheme as CopyBtnTheme}
                      >
                        {code}
                      </SyntaxHighlighter>
                    </div>
                  </Fragment>
                );
              } else {
                return null;
              }
            })}
          </TabPanel>
          <TabPanel>
            <div className={'card'}>
              <div className={'card__info'}>
                <h4 className={'card__title'}>Code</h4>
              </div>
              <SyntaxHighlighter
                language={'TypeScript'}
                theme={'Base16Nord'}
                copy={true}
              >
                {`import React from 'react';
import ReactHighlightSyntax from 'react-highlight-syntax';

const code = \`${getCode(language)}\`;

const App = () => (
  return (
  <ReactHighlightSyntax 
    language={'${removeSpace(capitalize(language))}'}
    theme={'${theme}'}
    ${
      copy
        ? `copy={${copy}}
    copyBtnTheme={'${copyBtnTheme}'}`
        : ''
    }
  >
    {code}
  </ReactHighlightSyntax>
  );
);
export default App;`}
              </SyntaxHighlighter>
            </div>
          </TabPanel>
        </Tabs>
      </main>
    </Fragment>
  );
};

export default LiveDemoComponent;
