import SortingButton from '@/components/sorting-button/SortingButton';
import { EXCHANGE_TABS, ExchangeTab } from '@/constants';
import { useState } from 'react';
import TradeRecords from './TradeRecords';
import MyRegisteredBooks from './MyRegisteredBooks';
import TradeReviews from './TradeReviews';
import Tab from '@/components/tab/Tab';

export default function ClubContents() {
  const [sortBy, setSortBy] = useState<string | undefined>('NEWEST');
  const [selectedList, setSelectedList] = useState<ExchangeTab>(
    EXCHANGE_TABS[0],
  );

  const renderList = (selectedList: ExchangeTab) => {
    switch (selectedList) {
      case EXCHANGE_TABS[0]:
        return <TradeRecords />;
      case EXCHANGE_TABS[1]:
        return <MyRegisteredBooks />;
      case EXCHANGE_TABS[2]:
        return <TradeReviews />;
    }
  };

  return (
    <div
      className="min-h-screen w-full flex-grow bg-gray-light-02 pt-3 sm:px-[20px] sm:pb-[44px] md:px-[24px] md:pb-[45px] lg:px-[102px] lg:pb-[41px]"
      role="main"
    >
      <div className="flex items-center justify-between gap-x-2 sm:overflow-auto sm:whitespace-nowrap sm:[&::-webkit-scrollbar]:hidden">
        <Tab
          items={EXCHANGE_TABS}
          activeTab={selectedList}
          onTabChange={(item) => setSelectedList(item)}
          tabType="SUB_TAB"
        />

        <SortingButton
          variant="byDate"
          onClickSorting={(order) => {
            setSortBy(order);
            console.log(sortBy);
          }}
        />
      </div>
      <div className="pt-[18px]">{renderList(selectedList)}</div>
    </div>
  );
}
