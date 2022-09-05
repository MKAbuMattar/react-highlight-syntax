import fs from 'fs';
import path from 'path';
import { RecursiveDirectory, recursiveDirectory } from 'recursive-directory';

import data from './data/data.build.json';

const isNumeric = (val: string) => /^-?\d+$/.test(val);

const read = (file: string) => {
  return fs.readFileSync(file).toString();
};

(async () => {
  const files: RecursiveDirectory = (await recursiveDirectory(
    './scripts/styles',
    true,
  )) as RecursiveDirectory;

  let language = '';
  let getClass = '';

  let style = '';
  let getCSS = '';
  let getStyleTheme = '';
  let classname = '';

  let supportedLanguages = '';
  let supportedTheme = '';

  data.forEach((item) => {
    language += `\n  | '${item.name}'`;

    getClass += `\n  case '${item.name}':
return '${item.class}';`;

    supportedLanguages += `- ${item.name}\r\n`;
  });

  files.forEach((item) => {
    const filename = item.filename
      .split('-')
      .map((el) => el.charAt(0).toUpperCase() + el.slice(1))
      .join('')
      .replace(/.css/g, '');

    if (isNumeric(item.filename.charAt(0))) {
      classname = `_${item.filename.replace(/.css/g, '')}`;
    } else {
      classname = item.filename.replace(/.css/g, '');
    }

    if (
      classname !== 'pojoaque' &&
      classname !== 'brown-paper' &&
      classname !== 'brown-papersq.png' &&
      classname !== 'pojoaque.jpg'
    ) {
      if (item.dirname === 'styles') {
        const filepath = './scripts/styles/' + item.filename;

        style += `\n  | '${filename}'`;

        getCSS += `\n  case '${filename}':
return \`${read(filepath)}\`;`;

        getStyleTheme += `\n  case '${filename}':
return '${classname}';`;

        supportedTheme += `- ${filename}\r\n`;
      }

      if (item.dirname === 'base16') {
        const filepath = './scripts/styles/base16/' + item.filename;

        style += `\n  | 'Base16${filename}'`;

        getCSS += `\n  case 'Base16${filename}':
return \`${read(filepath)}\`;`;

        getStyleTheme += `\n  case 'Base16${filename}':
return 'base16 ${classname}';`;

        supportedTheme += `- Base16${filename}\r\n`;
      }
    }
  });

  const outPathtsHighlight = path.join(
    __dirname,
    '../src/types/Highlight.d.ts',
  );
  const outPathtsgetLanguageClass = path.join(
    __dirname,
    '../src/utils/getLanguageClass.ts',
  );
  const outPathtsgetgetStyleClass = path.join(
    __dirname,
    '../src/utils/getStyleClass.ts',
  );
  const outPathtsSupportedLanguages = path.join(
    __dirname,
    'supportedLanguages.md',
  );
  const outPathtSupportedTheme = path.join(__dirname, 'supportedTheme.md');

  const highlight = `import { ElementType } from 'react';

import { CopyBtnTheme } from './Copy';

type Language =${language};

type Theme = ${style};

type HighlightProps = {
  tag?: ElementType;
  language?: Language;
  theme?: Theme;
  copy?: boolean;
  copyBtnTheme?: CopyBtnTheme;
  children: string;
  [x: string]: any;
};

export { Language, Theme };

export default HighlightProps;`;

  const getLanguageClass = `import { Language } from '../types/Highlight';
const getClass = (language: Language) => {
  switch (language) {
    ${getClass}
    default:
      return 'plaintext';
  }
};

const getLanguageClass = (language: Language) => {
  return \`hljs language-\${getClass(language)}\`;
};

export default getLanguageClass;`;

  const getStyleClass = `import { Theme } from '../types/Highlight';

const getCSS = (theme: Theme) => {
  switch (theme) {
    ${getCSS}
    default:
      return 'default';
  }
};

const getStyleTheme = (theme: Theme) => {
  switch (theme) {
    ${getStyleTheme}
    default:
      return 'default';
  }
};

const getTheme = (theme: Theme) => {
  return getCSS(theme);
};

const getStyleClass = (theme: Theme) => {
  return getStyleTheme(theme);
};

export { getStyleClass, getTheme };`;

  fs.writeFileSync(outPathtsHighlight, highlight);

  fs.writeFileSync(outPathtsgetLanguageClass, getLanguageClass);

  fs.writeFileSync(outPathtsgetgetStyleClass, getStyleClass);

  fs.writeFileSync(outPathtsSupportedLanguages, supportedLanguages);

  fs.writeFileSync(outPathtSupportedTheme, supportedTheme);
})();
