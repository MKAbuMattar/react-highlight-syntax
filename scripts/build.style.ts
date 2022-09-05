import { RecursiveDirectory, recursiveDirectory } from 'recursive-directory';
import fs from 'fs';
import path from 'path';

const read = (file: string) => {
  return fs.readFileSync(file).toString();
};

(async () => {
  const files: RecursiveDirectory = (await recursiveDirectory(
    './node_modules/highlight.js/styles',
    true,
  )) as RecursiveDirectory;

  let style = '';
  let filename = '';

  files.forEach((item) => {
    filename = item.filename.replace(/.css/g, '');

    if (
      filename !== 'pojoaque' &&
      filename !== 'brown-paper' &&
      filename !== 'brown-papersq.png' &&
      filename !== 'pojoaque.jpg'
    ) {
      if (item.dirname === 'styles') {
        const filepath = './node_modules/highlight.js/styles/' + item.filename;

        style = `.${filename}{position: relative;${read(filepath)}}`;

        fs.writeFileSync(
          path.resolve(__dirname, `scss/${filename}.scss`),
          style,
        );
      }

      if (item.dirname === 'base16') {
        const filepath =
          './node_modules/highlight.js/styles/base16/' + item.filename;

        style = `.base16.${filename}{position: relative;${read(filepath)}}`;

        fs.writeFileSync(
          path.resolve(__dirname, `scss/base16/${filename}.scss`),
          style,
        );
      }
    }
    //   if (isNumeric(item.filename.charAt(0))) {
    //     filename = `_${item.filename.replace(/.scss/g, '')}`;
    //   } else {
    //     filename = item.filename.replace(/.scss/g, '');
    //   }

    //   if (filename !== 'pojoaque' && filename !== 'brown-paper') {
    //     if (item.dirname === 'scss') {
    //       style += `.${filename} {
    //   position: relative;
    //   @import '~highlight.js/scss/${item.filename}';
    // }\r\n\r\n`;
    //     }

    //     if (item.dirname === 'base16') {
    //       style += `.base16.${filename} {
    //   position: relative;
    //   @import '~highlight.js/scss/base16/${item.filename}';
    // }\r\n\r\n`;
    //     }
    //   }
  });

  // fs.writeFileSync(
  //   path.resolve(__dirname, 'build.config.json'),
  //   JSON.stringify(temperatures),
  // );

  // const outPathtsHighlight = path.join(
  //   __dirname,
  //   '../src/styles/_highlight.scss',
  // );

  // fs.writeFileSync(outPathtsHighlight, style);
})();
