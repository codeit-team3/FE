'use client';

import React, { useState, useEffect } from 'react';
import Tab from '@/components/tab/Tab';
import { CONTENT_TABS, contentTab } from '@/constants';
import BookClubChatContainer from './BookClubChatContainer';
import ExchangeChatContainer from './ExchangeChatContainer';
import { initializeSocket } from '../utils/socket';
import { getCookie } from '@/features/auth/utils/cookies';

export default function ChatContainer() {
  const [selectedTab, setSelectedTab] = useState<contentTab>(CONTENT_TABS.CLUB);

  useEffect(() => {
    const token = getCookie('auth_token');
    if (token) {
      const connectSocket = async () => {
        try {
          await initializeSocket(token);
        } catch (error) {
          console.error('채팅 페이지에서 소켓 재연결 실패:', error);
        }
      };
      connectSocket();
    }
  }, []);

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
