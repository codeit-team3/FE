import SortingButton from '@/components/sorting-button/SortingButton';
import { CLUB_TABS, ClubTab } from '@/constants';
import { useState } from 'react';
import JoinedClubList from './JoinedClubList';
import MyReviewList from './MyReviewList';
import HostedClubList from './HostedClubsList';
import Tab from '@/components/tab/Tab';

export default function ClubContents() {
  const [sortBy, setSortBy] = useState<string | undefined>('NEWEST');
  const [selectedList, setSelectedList] = useState<ClubTab>(CLUB_TABS[0]);

  const renderList = (selectedList: ClubTab) => {
    switch (selectedList) {
      case CLUB_TABS[0]:
        return <JoinedClubList />;
      case CLUB_TABS[1]:
        return <HostedClubList />;
      case CLUB_TABS[2]:
        return <MyReviewList />;
    }
  };

  return (
    <div
      className="min-h-screen w-full flex-grow bg-gray-light-02 pt-3 sm:px-[20px] sm:pb-[44px] md:px-[24px] md:pb-[45px] lg:px-[102px] lg:pb-[41px]"
      role="main"
    >
      <div className="flex items-center justify-between gap-x-2 sm:overflow-auto sm:whitespace-nowrap sm:[&::-webkit-scrollbar]:hidden">
        <Tab
          items={CLUB_TABS}
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