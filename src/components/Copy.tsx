import React, { FC } from 'react';

import InjectCSS from './InjectCSS';

import CopyProps from '../types/Copy';
import useCopy from '../hooks/useCopy';

const Copy: FC<CopyProps> = (props) => {
  const { code, copyBtnTheme = 'Light' } = props;

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
