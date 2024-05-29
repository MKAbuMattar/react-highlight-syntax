import Highlight from '@/ui/SyntaxHighlighter';

import Data from '@/data/data';

const Installation = () => {
  return (
    <div className={'card'}>
      <div className={'card__info'}>
        <h4 className={'card__title'}>Install package</h4>
      </div>
      <Highlight language={'Bash'} theme={'Base16Nord'} copy={false}>
        {Data.installation.node}
      </Highlight>
    </div>
  );
};

export default Installation;
