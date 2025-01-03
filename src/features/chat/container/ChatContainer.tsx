'use client';

import React, { useState } from 'react';
import Tab from '@/components/tab/Tab';
import { CONTENT_TABS, contentTab } from '@/constants';
import BookClubChatContainer from './BookClubChatContainer';
import ExchangeChatContainer from './ExchangeChatContainer';

export default function ChatContainer() {
  const [selectedTab, setSelectedTab] = useState<contentTab>(CONTENT_TABS.CLUB);

  return (
    <>
      <div className="w-full px-[20px] pt-[20px] md:px-[24px] lg:px-[102px]">
        <Tab
          items={Object.values(CONTENT_TABS)}
          activeTab={selectedTab}
          onTabChange={(item) => setSelectedTab(item)}
          tabType="MAIN_TAB"
        />
      </div>
      {selectedTab === CONTENT_TABS.CLUB ? (
        <BookClubChatContainer />
      ) : (
        <ExchangeChatContainer />
      )}
    </>
  );
}
