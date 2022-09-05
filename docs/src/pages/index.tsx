import type { NextPage } from 'next';

import ReactHighlightSyntax from 'react-highlight-syntax';

const code = `const foo = 'bar';`;

const Home: NextPage = () => {
  return (
    <>
      <ReactHighlightSyntax
        language={'JavaScript'}
        theme={'Base16Darcula'}
        copy={true}
        copyBtnTheme={'Dark'}
      >
        {code}
      </ReactHighlightSyntax>
    </>
  );
};

export default Home;
