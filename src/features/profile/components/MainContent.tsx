'use client';
import Tab from '@/components/tab/Tab';
import { CONTENT_TABS, ContentTab } from '@/constants';
import { useState } from 'react';
import ClubContents from './clubs/ClubContents';
import ExchangeContents from './exchange/ExchangeContents';

function MainContent() {
  const [selectedTab, setSelectedTab] = useState<ContentTab>(CONTENT_TABS[0]);

  return (
    <div>
      <div className="w-full border-b-2 sm:px-5 md:px-6 lg:px-[102px]">
        <Tab
          items={CONTENT_TABS}
          activeTab={selectedTab}
          onTabChange={(item) => setSelectedTab(item)}
          tabType="MAIN_TAB"
        />
      </div>
      {selectedTab === CONTENT_TABS[0] ? (
        <ClubContents />
      ) : (
        <ExchangeContents />
      )}
    </div>
  );
}

export default MainContent;
