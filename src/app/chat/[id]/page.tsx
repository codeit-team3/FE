'use client';

import React from 'react';
import ChatBubbleList from '@/features/chat-room/container/chat-bubble-list/ChatBubbleList';
import { usePathname } from 'next/navigation';
import { GroupedMessage } from '@/features/chat-room/types/chatBubbleList';
import ChatCard from '@/features/chat/components/chat-card/ChatCard';
import ParticipantCounter from '@/components/participant-counter/ParticipantCounter';
import IconButton from '@/components/icon-button/IconButton';
import GoBackIcon from '../../../../public/icons/GoBackIcon';
import HamburgerMenuIcon from '../../../../public/icons/HamburgerMenuIcon';

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
    <div className="flex w-full flex-col gap-3">
      <header className="flex w-full min-w-[336px] items-end bg-gray-light-02 px-[20px] py-[30px] sm:justify-between md:px-[24px] lg:px-[102px]">
        <div className="flex w-full flex-col gap-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <IconButton
                icon={<GoBackIcon />}
                onClick={() => console.log('채팅 버튼 클릭')}
                className="bg-gray-light-02"
              />
              <h3>채팅</h3>
              <ParticipantCounter current={10} />
            </div>
            <div>
              <IconButton
                icon={<HamburgerMenuIcon width={16} height={12} />}
                onClick={() => console.log('메뉴 열기 버튼 클릭')}
                className="bg-gray-light-02"
              />
            </div>
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
    </div>
  );
}

export default ChatRoomPage;
