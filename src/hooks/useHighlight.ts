import { useEffect, useRef } from 'react';
import highlight from 'highlight.js';

const useHighlight = (children: string) => {
  const refHighlight = useRef(null);

  useEffect(() => {
    const ref = refHighlight.current as unknown as HTMLElement;
    highlight.highlightElement(ref);
  }, [children]);

  return { refHighlight };
};

export default useHighlight;
