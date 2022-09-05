import { useEffect } from 'react';
import highlight from 'highlight.js';

const useHighlight = (children: string) => {
  useEffect(() => {
    const el = document.querySelectorAll(
      '[data-type="CODE"]',
    ) as NodeListOf<HTMLElement>;

    el.forEach((item) => {
      highlight.highlightElement(item);
    });
  }, [children]);
};

export default useHighlight;
