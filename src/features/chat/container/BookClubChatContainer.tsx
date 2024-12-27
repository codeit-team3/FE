'use client';

import React from 'react';
import ChatCard from '@/components/chat-card/ChatCard';

interface BookClubChatData {
  imageUrl: string;
  isHost: boolean;
  title: string;
  currentParticipants: number;
  lastMessage: string;
  lastMessageTime: string;
  unreadCount: number;
}

export default function BookClubChatContainer() {
  const mockBookClubChats: BookClubChatData[] = [
    {
      imageUrl: '/images/profile.png',
      isHost: true,
      title: '철학으로 보는 현대사회',
      currentParticipants: 8,
      lastMessage: '다음 모임은 니체의 차라투스트라를 읽어볼까요?',
      lastMessageTime: '11:30',
      unreadCount: 5,
    },
    {
      imageUrl: '/images/profile.png',
      isHost: false,
      title: 'SF 소설 읽기 모임',
      currentParticipants: 12,
      lastMessage: '듄 시리즈 완독하신 분들 계신가요?',
      lastMessageTime: '09:15',
      unreadCount: 2,
    },
    {
      imageUrl: '/images/profile.png',
      isHost: true,
      title: '심리학 북클럽',
      currentParticipants: 6,
      lastMessage: '이번주 토론 주제는 프로이트의 꿈의 해석입니다.',
      lastMessageTime: '어제',
      unreadCount: 0,
    },
    {
      imageUrl: '/images/profile.png',
      isHost: false,
      title: '시 읽는 청춘들',
      currentParticipants: 15,
      lastMessage: '이상의 시를 함께 감상해보아요',
      lastMessageTime: '어제',
      unreadCount: 7,
    },
    {
      imageUrl: '/images/profile.png',
      isHost: false,
      title: '경제경영 독서모임',
      currentParticipants: 10,
      lastMessage: '이번 주 도서: 넛지',
      lastMessageTime: '2일 전',
      unreadCount: 1,
    },
    {
      imageUrl: '/images/profile.png',
      isHost: true,
      title: '세계문학 산책',
      currentParticipants: 7,
      lastMessage: '카프카 변신 읽고 오세요!',
      lastMessageTime: '3일 전',
      unreadCount: 4,
    },
    {
      imageUrl: '/images/profile.png',
      isHost: false,
      title: '에세이 교환일기',
      currentParticipants: 4,
      lastMessage: '무라카미 하루키의 에세이집 추천합니다',
      lastMessageTime: '1주일 전',
      unreadCount: 0,
    },
    {
      imageUrl: '/images/profile.png',
      isHost: true,
      title: '미스터리 소설 탐독',
      currentParticipants: 9,
      lastMessage: '애거사 크리스티 특집 시작합니다',
      lastMessageTime: '1주일 전',
      unreadCount: 12,
    },
    {
      imageUrl: '/images/profile.png',
      isHost: false,
      title: '인문학 스터디',
      currentParticipants: 11,
      lastMessage: '유발 하라리의 사피엔스 함께 읽어요',
      lastMessageTime: '2주일 전',
      unreadCount: 3,
    },
    {
      imageUrl: '/images/profile.png',
      isHost: true,
      title: '고전문학 독파',
      currentParticipants: 6,
      lastMessage: '돈키호테 완독 인증하신 분들 계신가요?',
      lastMessageTime: '2주일 전',
      unreadCount: 8,
    },
  ];

  return (
    <section className="flex flex-1 bg-gray-light-02 px-6 py-5">
      <div className="mx-auto flex w-full max-w-[996px] flex-col gap-5">
        {mockBookClubChats.map((chat, index) => (
          <ChatCard
            key={index}
            variant="bookClub"
            props={{
              ...chat,
              onClick: () => console.log('채팅방 클릭'),
            }}
          />
        ))}
      </div>
    </section>
  );
}
