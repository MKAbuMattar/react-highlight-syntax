import React, { FC } from 'react';

import Copy from './Copy';
import InjectCSS from './InjectCSS';

import HighlightProps from '../types/Highlight';
import useHighlight from '../hooks/useHighlight';
import getLanguageClass from '../utils/getLanguageClass';
import { getStyleClass, getTheme } from '../utils/getStyleClass';

const Highlight: FC<HighlightProps> = (props) => {
  const {
    tag: Tag = 'div',
    language = 'PlainText',
    theme = 'Default',
    copy = false,
    copyBtnTheme = 'Light',
    children,
    ...otherProps
  } = props;

  const { refHighlight } = useHighlight(children);

  return (
    <>
      <InjectCSS css={getTheme(theme)} />
      <Tag className={getStyleClass(theme)} {...otherProps}>
        {copy && <Copy code={children} copyBtnTheme={copyBtnTheme} />}
        <pre>
          <code
            className={getLanguageClass(language)}
            ref={refHighlight}
            data-type={'react-highlight-syntax'}
          >
            {children}
          </code>
        </pre>
      </Tag>
    </>
  );
};

export default React.memo(Highlight);
