import { FC, useEffect, useState } from 'react';

import appendStyle from '../utils/appendStyle';
import isDOMReady from '../utils/isDOMReady';

const idCache: any = {};

type InjectCSSProps = {
  css: string;
};

const InjectCSS: FC<InjectCSSProps> = ({ css }: InjectCSSProps) => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (!idCache[css]) {
      idCache[css] =
        '__react_highlight_syntax__inject_css_id-' +
        Object.keys(idCache).length;
    }

    if (isDOMReady()) {
      appendStyle(idCache[css], css);
      setIsReady(true);
    }

    if (!isReady && isDOMReady()) {
      appendStyle(idCache[css], css);
    }
  }, [css]);

  return null;
};

export default InjectCSS;
