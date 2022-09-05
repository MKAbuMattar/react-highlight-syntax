type CopyBtnTheme = 'Dark' | 'Light';

type CopyProps = {
  code: string;
  copyBtnTheme?: CopyBtnTheme;
};

export { CopyBtnTheme };

export default CopyProps;
