'use client';
import Tab from '@/components/tab/Tab';
import { CONTENT_TABS, contentTab } from '@/constants';
import { useState } from 'react';
import { ClubContents } from '../container';
import ExchangeContents from '../components/exchange/ExchangeContents';
import { ProfilePageProps } from '../types';

function MainContent({ isMyPage }: ProfilePageProps) {
  const [selectedTab, setSelectedTab] = useState<contentTab>(CONTENT_TABS.CLUB);

  return (
    <div className="flex w-full flex-1 flex-col">
      <div className="w-full border-b-2 sm:px-5 md:px-6 lg:px-[102px]">
        <Tab
          items={Object.values(CONTENT_TABS)}
          activeTab={selectedTab}
          onTabChange={(item) => setSelectedTab(item)}
          tabType="MAIN_TAB"
        />
      </div>
      {selectedTab === CONTENT_TABS.CLUB ? (
        <ClubContents isMyPage={isMyPage} />
      ) : (
        <ExchangeContents />
      )}
    </div>
  );
}

export default MainContent;
