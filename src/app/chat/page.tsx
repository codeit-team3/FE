import React from 'react';
import ChatContainer from '@/features/chat/container/ChatContainer';
import HeaderSection from '@/components/common-layout/HeaderSection';
import ChatComponent from '@/features/chat/components/ChatComponents';
function ChatPage() {
  return (
    <>
      <ChatComponent />
      <HeaderSection
        title={
          <>
            채팅에 활발히
            <br />
            참여해 보세요!
          </>
        }
      />
      <ChatContainer />
    </>
  );
}

export default ChatPage;
