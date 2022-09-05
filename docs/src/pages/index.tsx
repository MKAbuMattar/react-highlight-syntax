import type { NextPage } from 'next';

import ReactHighlightSyntax from 'react-highlight-syntax';

const code = `import type { NextPage } from 'next';`;

const ts = `import type { NextPage } from 'next';

import ReactHighlightSyntax from 'react-highlight-syntax';

const code = \`import type { NextPage } from 'next';\`;

const Home: NextPage = () => {
  return (
    <>
      <ReactHighlightSyntax
        language={'JavaScript'}
        theme={'A11yDark'}
        copy={true}
        copyBtnTheme={'Dark'}
      >
        {code}
      </ReactHighlightSyntax>
    </>
  );
};

export default Home;`;

const Home: NextPage = () => {
  return (
    <>
      <ReactHighlightSyntax
        language={'JavaScript'}
        theme={'A11yDark'}
        copy={true}
        copyBtnTheme={'Dark'}
      >
        {code}
      </ReactHighlightSyntax>

      <ReactHighlightSyntax
        language={'TypeScript'}
        theme={'Base16Brogrammer'}
        copy={true}
        copyBtnTheme={'Dark'}
      >
        {ts}
      </ReactHighlightSyntax>
    </>
  );
};

export default Home;
