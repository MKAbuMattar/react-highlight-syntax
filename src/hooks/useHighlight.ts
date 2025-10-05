import highlight from 'highlight.js';
import { useEffect, useRef } from 'react';

const useHighlight = (children: string) => {
  const refHighlight = useRef(null);

  useEffect(() => {
    const ref = refHighlight.current as unknown as HTMLElement;
    highlight.highlightElement(ref);
  }, [children]);

  return { refHighlight };
};

export default useHighlight;
