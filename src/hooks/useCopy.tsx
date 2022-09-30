import React, { useState, useEffect } from 'react';

import { CopyBtnTheme } from '../types/Copy';

import { CheckIcon, CopyIcon } from '../icons';

const getCopyBtnTheme = (copyBtnTheme: CopyBtnTheme, options = '') => {
  switch (copyBtnTheme) {
    case 'Dark':
      return `react_highlight_syntax_copy btn__dark ${options}`;
    case 'Light':
      return `react_highlight_syntax_copy btn__light ${options}`;
    default:
      return 'react_highlight_syntax_copy';
  }
};

const useCopy = (copyBtnTheme: CopyBtnTheme) => {
  const [isCopied, setIsCopied] = useState(false);
  const [copyIcon, setCopyIcon] = useState(<CopyIcon />);
  const [copyClass, setCopyClass] = useState(getCopyBtnTheme(copyBtnTheme));

  const css = `.react_highlight_syntax_copy{border-radius:.4rem;cursor:pointer;font-size:1.2rem;position:absolute;right:.5rem;top:.5rem;height:2rem;width:2rem;display:flex;align-items:center;justify-content:center;background-color:rgba(0,0,0,0)}.react_highlight_syntax_copy.btn__dark{border:1px solid #fff;color:#fff;box-shadow:rgba(0,0,0,.15) 1.95px 1.95px 2.6px}.react_highlight_syntax_copy.btn__dark:hover{background-color:#30363d;border-color:#8b949e;transition-duration:.1s}.react_highlight_syntax_copy.btn__dark:hover.success{border-color:#238636;color:#238636}.react_highlight_syntax_copy.btn__light{border:1px solid #000;color:#000;box-shadow:rgba(0,0,0,.15) 1.95px 1.95px 2.6px}.react_highlight_syntax_copy.btn__light:hover{background-color:#fff;border-color:#8b949e;transition-duration:.1s}.react_highlight_syntax_copy.btn__light:hover.success{border-color:#238636;color:#238636}.react_highlight_syntax_copy.success{border-color:#238636;color:#238636}`;

  useEffect(() => {
    setCopyClass(getCopyBtnTheme(copyBtnTheme));
  }, [copyBtnTheme]);

  useEffect(() => {
    if (isCopied) {
      setCopyIcon(<CheckIcon />);
      setCopyClass(getCopyBtnTheme(copyBtnTheme, 'success'));
      setTimeout(() => {
        setIsCopied(false);
        setCopyIcon(<CopyIcon />);
        setCopyClass(getCopyBtnTheme(copyBtnTheme));
      }, 2000);
    }
  }, [isCopied]);

  const copyTextToClipboard = async (text: string) => {
    if ('clipboard' in navigator) {
      return await navigator.clipboard.writeText(text);
    } else {
      return document.execCommand('copy', true, text);
    }
  };

  const handleCopyClick = (code: string) => {
    copyTextToClipboard(code)
      .then(() => {
        setIsCopied(true);
      })
      .catch((err) => {
        setIsCopied(false);
        console.error(err);
      });
  };

  return { handleCopyClick, copyIcon, copyClass, css };
};

export default useCopy;
