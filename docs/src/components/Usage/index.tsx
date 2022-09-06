import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import Highlight from '@/ui/SyntaxHighlighter';

import Data from '@/data/data';

const Usage = () => {
  return (
    <Tabs className={'tabs__container'}>
      <TabList className={'tabs__list'}>
        <Tab className={'tab__container'}>Basic Usage</Tab>
        <Tab className={'tab__container'}>Isolated</Tab>
      </TabList>

      <TabPanel>
        <div className={'card'}>
          <div className={'card__info'}>
            <h4 className={'card__title'}>Basic Usage</h4>
          </div>
          <Highlight language={'JavaScript'} theme={'Base16Nord'} copy={false}>
            {Data.usage.basic}
          </Highlight>
        </div>
      </TabPanel>
      <TabPanel>
        <div className={'card'}>
          <div className={'card__info'}>
            <h4 className={'card__title'}>Isolated</h4>
          </div>
          <Highlight language={'TypeScript'} theme={'Base16Nord'} copy={false}>
            {Data.usage.isolate}
          </Highlight>
        </div>
      </TabPanel>
    </Tabs>
  );
};

export default Usage;
