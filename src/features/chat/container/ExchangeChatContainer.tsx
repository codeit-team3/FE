import React from 'react';
import ChatCard from '../components/chat-card/ChatCard';

interface BookClubChatData {
  imageUrl: string;
  isHost: boolean;
  title: string;
  currentParticipants: number;
  lastMessage: string;
  lastMessageTime: string;
  unreadCount: number;
}

export default function ExchangeChatContainer() {
  const message = '아직 참여중인 채팅이 없어요.';
  const mockBookClubChats: BookClubChatData[] = [];

  return (
    <section className="flex flex-1 bg-gray-light-02 px-6 py-5">
      <div className="mx-auto flex w-full max-w-[996px] flex-col gap-5">
        {mockBookClubChats.length === 0 ? (
          <div className="flex h-full justify-center pt-[255px] text-center text-gray-dark-02">
            <span className="whitespace-pre-wrap">{message}</span>
          </div>
        ) : (
          mockBookClubChats.map((chat, index) => (
            <ChatCard
              key={index}
              variant="bookClub"
              props={{
                ...chat,
                onClick: () => console.log('채팅방 클릭'),
              }}
            />
          ))
        )}
      </div>
    </section>
  );
}
