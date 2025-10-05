import React, { Fragment } from 'react';
import useCopy from '../hooks/useCopy';

import CopyProps from '../types/Copy';
import InjectCSS from './InjectCSS';

const Copy = ({ code, copyBtnTheme = 'Light' }: CopyProps) => {
  const { handleCopyClick, copyIcon, copyClass, css } = useCopy(copyBtnTheme);

  return (
    <Fragment>
      <InjectCSS css={css} />
      <button onClick={() => handleCopyClick(code)} className={copyClass}>
        {copyIcon}
      </button>
    </Fragment>
  );
};

export default React.memo(Copy);
