'use client';

import React from 'react';
import ChatBubbleList from '@/features/chat-room/container/chat-bubble-list/ChatBubbleList';
import { usePathname } from 'next/navigation';
import { GroupedMessage } from '@/features/chat-room/types/chatBubbleList';
import ChatCard from '@/features/chat/components/chat-card/ChatCard';
import ParticipantCounter from '@/components/participant-counter/ParticipantCounter';

const groupedMessagesExample: GroupedMessage[] = [
  {
    date: '2024년 3월 15일',
    messages: [
      {
        type: 'join',
        date: '2024-03-15T14:29:00',
        user: '김철수',
      },
      {
        type: 'chat',
        date: '2024-03-15T14:30:00',
        sender: '김철수',
        senderId: '123',
        content: '안녕하세요!',
        profileImage: '/images/profile.png',
      },
      {
        type: 'chat',
        date: '2024-03-15T14:31:00',
        sender: '이영희',
        senderId: '456',
        content: '환영합니다!',
        profileImage: '/images/profile.png',
      },
    ],
  },
];

function ChatRoomPage() {
  const pathname = usePathname();
  const chatId = pathname?.split('/').pop() || '';
  console.log('chatId: ', chatId);

  return (
    <>
      <header className="flex w-full min-w-[336px] items-end bg-gray-light-02 px-[20px] py-[30px] sm:justify-between md:px-[24px] lg:px-[102px]">
        <div className="flex flex-col">
          <div className="flex">
            <h3>채팅</h3>
            <ParticipantCounter current={10} />
          </div>
          <ChatCard
            variant="chatRoomHeader"
            props={{
              imageUrl: '/images/defaultBookClub.jpg',
              isHost: false,
              title: '독서모임 제목',
              location: '강남역',
              datetime: '12/25(월) 오후 2:00',
              meetingType: 'OFFLINE',
              onClick: () => console.log('헤더 클릭'),
            }}
          />
        </div>
      </header>
      <ChatBubbleList
        groupedMessages={groupedMessagesExample}
        hostId={chatId}
        onProfileClick={() => {}}
      />
    </>
  );
}

export default ChatRoomPage;
