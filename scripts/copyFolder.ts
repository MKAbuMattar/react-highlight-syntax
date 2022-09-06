import {
  existsSync,
  lstatSync,
  writeFileSync,
  readFileSync,
  mkdirSync,
  readdirSync,
} from 'fs';
import { join, basename } from 'path';

const copyFileSync = (source, target) => {
  let targetFile = target;

  // If target is a directory, a new file with the same name will be created
  if (existsSync(target)) {
    if (lstatSync(target).isDirectory()) {
      targetFile = join(target, basename(source));
    }
  }

  writeFileSync(targetFile, readFileSync(source));
};

const copyFolderRecursiveSync = (source, target) => {
  let files: string[] = [];

  // Check if folder needs to be created or integrated
  const targetFolder = join(target, basename(source));
  if (!existsSync(targetFolder)) {
    mkdirSync(targetFolder);
  }

  // Copy
  if (lstatSync(source).isDirectory()) {
    files = readdirSync(source);

    files.forEach((file) => {
      const curSource = join(source, file);

      if (lstatSync(curSource).isDirectory()) {
        copyFolderRecursiveSync(curSource, targetFolder);
      } else {
        copyFileSync(curSource, targetFolder);
      }
    });
  }
};

(() => {
  const join = (...parts: string[]) => parts.join('/').replace(/\/\//g, '/');

  const projectRoot = process.cwd();
  const srcStyles = join(projectRoot, 'src/styles');
  const srcTypes = join(projectRoot, 'src/types');
  const lib = join(projectRoot, 'lib');

  // copyFolderRecursiveSync(srcStyles, lib);
  // copyFolderRecursiveSync(srcTypes, lib);
})();
