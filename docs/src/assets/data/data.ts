const node = `# npm
npm install --save react-highlight-syntax

# yarn
yarn add react-highlight-syntax

# pnpm
pnpm add react-highlight-syntax`;

const basic = `import React from 'react';
import ReactHighlightSyntax from 'react-highlight-syntax';

const code = \`const foo = 'bar';\`;

const App = () => (
  return (
  <ReactHighlightSyntax 
    language={'JavaScript'}
    theme={'Base16Darcula'}
    copy={true}
    copyBtnTheme={'Dark'}
  >
    {code}
  </ReactHighlightSyntax>
  );
);`;

const isolate = `import React, { FC } from 'react';

import ReactHighlightSyntax, {
  Language,
  Theme,
  CopyBtnTheme,
} from 'react-highlight-syntax';

type Props = {
  language: Language;
  theme?: Theme;
  copy?: boolean;
  copyBtnTheme?: CopyBtnTheme;
  children: string;
};

const SyntaxHighlighter: FC<Props> = (props) => {
  const {
    language,
    theme = 'Base16Darcula',
    copy = true,
    copyBtnTheme = 'Dark',
    children,
  } = props;
  return (
    <ReactHighlightSyntax
      language={language}
      theme={theme}
      copy={copy}
      copyBtnTheme={copyBtnTheme}
    >
      {children}
    </ReactHighlightSyntax>
  );
};

export default React.memo(SyntaxHighlighter);`;

export default {
  installation: {
    node,
  },
  usage: {
    basic,
    isolate,
  },
};
