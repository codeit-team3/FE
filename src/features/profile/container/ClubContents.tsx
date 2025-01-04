'use client';

import SortingButton from '@/components/sorting-button/SortingButton';
import { CLUB_TABS, clubTab } from '@/constants';
import { useState } from 'react';
import Tab from '@/components/tab/Tab';
import { orderType, ProfilePageProps } from '../types';
import {
  CreatedClubList,
  JoinedClubList,
  MyCreatedClubList,
  MyJoinedClubList,
  MyWrittenReviewList,
  WrittenReviewList,
} from '../container/index';

export default function ClubContents({ isMyPage }: ProfilePageProps) {
  const [order, setOrder] = useState<orderType>('DESC');
  const [selectedList, setSelectedList] = useState<clubTab>(CLUB_TABS.JOINED);

  const renderList = (selectedList: clubTab) => {
    switch (selectedList) {
      case CLUB_TABS.JOINED:
        return isMyPage ? (
          <MyJoinedClubList order={order} />
        ) : (
          <JoinedClubList order={order} />
        );
      case CLUB_TABS.CREATED:
        return isMyPage ? (
          <MyCreatedClubList order={order} />
        ) : (
          <CreatedClubList order={order} />
        );
      case CLUB_TABS.REVIEW:
        return isMyPage ? (
          <MyWrittenReviewList order={order} />
        ) : (
          <WrittenReviewList order={order} />
        );
    }
  };

  return (
    <div
      className="w-full flex-1 flex-grow bg-gray-light-02 pt-3 sm:px-[20px] sm:pb-[44px] md:px-[24px] md:pb-[45px] lg:px-[102px] lg:pb-[41px]"
      role="main"
    >
      <div className="flex items-center justify-between gap-x-2 sm:overflow-auto sm:whitespace-nowrap sm:[&::-webkit-scrollbar]:hidden">
        <Tab
          items={Object.values(CLUB_TABS)}
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
