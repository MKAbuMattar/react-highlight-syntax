import { FC, useEffect, useState } from 'react';

import { ID_INJECTCSS } from '../constants/InjectCSS';
import appendStyle from '../utils/appendStyle';
import isDOMReady from '../utils/isDOMReady';

const idCache: any = {};

type InjectCSSProps = {
  css: string;
};

const InjectCSS: FC<InjectCSSProps> = (props) => {
  const { css } = props;
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (!idCache[css]) {
      const uniqueId = Object.keys(idCache).length;
      idCache[css] = ID_INJECTCSS + uniqueId;
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
