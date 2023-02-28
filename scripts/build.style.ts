import { RecursiveDirectory, recursiveDirectory } from 'recursive-directory';
import sass from 'sass';
import CleanCSS from 'clean-css';
import fs from 'fs';
import path from 'path';

const read = (file: string) => fs.readFileSync(file).toString();

const addUnderscoreToStartWithNumber = (name: string) =>
  /^\d/.test(name) ? `_${name}` : name;

(async () => {
  const files: RecursiveDirectory = (await recursiveDirectory(
    './node_modules/highlight.js/scss',
    true,
  )) as RecursiveDirectory;

  files.forEach((item) => {
    if (
      item.filename !== 'pojoaque.scss' &&
      item.filename !== 'brown-paper.scss' &&
      item.filename !== 'brown-papersq.png' &&
      item.filename !== 'pojoaque.jpg'
    ) {
      const content = read(item.fullpath);
      const scss = path.join(__dirname, 'styles');
      const base16 = path.join(__dirname, 'styles/base16');
      if (!fs.existsSync(scss)) {
        fs.mkdirSync(scss);
      }
      if (!fs.existsSync(base16)) {
        fs.mkdirSync(base16);
      }
      if (item.dirname === 'scss') {
        const file = path.join(
          __dirname,
          `./styles/${item.filename.replace(/.scss/g, '.css')}`,
        );
        const style = `.${addUnderscoreToStartWithNumber(
          item.filename.replace(/.scss/g, ''),
        )} {
          position:relative;
  ${content}
}`;
        const css = sass.compileString(style);
        const minifiedCSS = new CleanCSS().minify(css.css.toString()).styles;
        fs.writeFileSync(file, minifiedCSS);
      }

      if (item.dirname === 'base16') {
        const file = path.join(
          __dirname,
          `./styles/base16/${item.filename.replace(/.scss/g, '.css')}`,
        );
        const style = `.base16.${addUnderscoreToStartWithNumber(
          item.filename.replace(/.scss/g, ''),
        )} {
          position:relative;
  ${content}
}`;
        const css = sass.compileString(style);
        const minifiedCSS = new CleanCSS().minify(css.css.toString()).styles;
        fs.writeFileSync(file, minifiedCSS);
      }
    }
  });
})();
