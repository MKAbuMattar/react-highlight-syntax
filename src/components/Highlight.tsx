import React from 'react';
import useHighlight from '../hooks/useHighlight';
import HighlightProps from '../types/Highlight';
import getLanguageClass from '../utils/getLanguageClass';
import { getStyleClass, getTheme } from '../utils/getStyleClass';
import Copy from './Copy';
import InjectCSS from './InjectCSS';

const Highlight = ({
  tag: Tag = 'div',
  language = 'PlainText',
  theme = 'Default',
  copy = false,
  copyBtnTheme = 'Light',
  children,
  ...otherProps
}: HighlightProps) => {
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
