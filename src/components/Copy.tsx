import React from 'react';

import InjectCSS from './InjectCSS';

import CopyProps from '../types/Copy';
import useCopy from '../hooks/useCopy';

const Copy = ({ code, copyBtnTheme = 'Light' }: CopyProps) => {
  const { handleCopyClick, copyIcon, copyClass, css } = useCopy(copyBtnTheme);

  return (
    <>
      <InjectCSS css={css} />
      <button onClick={() => handleCopyClick(code)} className={copyClass}>
        {copyIcon}
      </button>
    </>
  );
};

export default React.memo(Copy);
