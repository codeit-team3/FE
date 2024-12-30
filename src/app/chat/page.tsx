import React from 'react';
import ChatContainer from '@/features/chat/container/ChatContainer';
import ChatHeader from '@/features/chat/components/chat-header/ChatHeader';
import ChatComponent from '@/features/chat/components/ChatComponent';

function ChatPage() {
  return (
    <>
      <ChatComponent />
      <ChatHeader />
      <ChatContainer />
    </>
  );
}

export default ChatPage;
