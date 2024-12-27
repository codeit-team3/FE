import React from 'react';
import ChatContainer from '@/features/chat/container/ChatContainer';
import ChatHeader from '@/features/chat/components/chat-header/ChatHeader';

function ChatPage() {
  return (
    <>
      <ChatHeader />
      <ChatContainer />
    </>
  );
}

export default ChatPage;
