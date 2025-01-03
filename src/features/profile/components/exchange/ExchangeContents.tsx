import SortingButton from '@/components/sorting-button/SortingButton';
import { EXCHANGE_TABS, exchangeTab } from '@/constants';
import { useState } from 'react';
import { MyRegisteredBooks, TradeRecords, TradeReviews } from '../exchange';
import Tab from '@/components/tab/Tab';
import { orderType } from '@/types/bookclubs';

export default function ExchangeContents() {
  const [order, setOrder] = useState<orderType>('DESC');
  const [selectedList, setSelectedList] = useState<exchangeTab>(
    EXCHANGE_TABS.EXCHANGED,
  );

  console.log(order);
  const renderList = (selectedList: exchangeTab) => {
    switch (selectedList) {
      case EXCHANGE_TABS.EXCHANGED:
        return <TradeRecords />;
      case EXCHANGE_TABS.UPLOADED:
        return <MyRegisteredBooks />;
      case EXCHANGE_TABS.REVIEW:
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
          items={Object.values(EXCHANGE_TABS)}
          activeTab={selectedList}
          onTabChange={(item) => setSelectedList(item)}
          tabType="SUB_TAB"
        />

        <SortingButton
          variant="byDate"
          onClickSorting={(order) => {
            setOrder(order);
          }}
        />
      </div>
      <div className="pt-[18px]">{renderList(selectedList)}</div>
    </div>
  );
}
