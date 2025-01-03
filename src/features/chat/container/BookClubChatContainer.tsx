'use client';

import React, { useEffect, useState } from 'react';
import ChatCard from '@/features/chat/components/chat-card/ChatCard';
import { bookClubs } from '@/api/book-club/react-query';
import { useQuery } from '@tanstack/react-query';
import { BookClubProps } from '@/features/chat/components/chat-card/types/variantChatCard';
import Link from 'next/link';
import { getRecentChats, getStompClient } from '@/features/chat/utils/socket';
import { findRecentMessage } from '@/features/chat/utils/chatRoom';
import { formatDateForUI } from '@/lib/utils/formatDateForUI';

export default function BookClubChatContainer() {
  const [recentMessages, setRecentMessages] = useState<
    Array<{
      bookClubId: number;
      content: string;
      date: string;
    }>
  >([]);

  const { queryKey, queryFn } = bookClubs.myJoined({ order: 'DESC' });

  const { data, isLoading, error } = useQuery({
    queryKey,
    queryFn,
  });

  useEffect(() => {
    const fetchRecentChats = async () => {
      try {
        const response = await getRecentChats();
        console.log('최근 채팅 내용 조회 성공:', response);
        setRecentMessages(response || []);
      } catch (error) {
        console.error('최근 채팅 내용 조회 실패:', error);
      }
    };

    try {
      getStompClient();
      fetchRecentChats();
    } catch (error) {
      console.error('소켓이 초기화되지 않았습니다:', error);
    }
  }, []);

  const bookClubChats = data?.data?.bookClubs || [];
  console.log('bookClubChats', bookClubChats);

  if (isLoading) return <div>로딩중...</div>;
  if (error) return <div>에러가 발생했습니다</div>;

  return (
    <section className="flex flex-1 bg-gray-light-02 px-6 py-5">
      <div className="mx-auto flex w-full max-w-[996px] flex-col gap-5">
        {bookClubChats.map((bookClub: BookClubProps, id: number) => {
          const recentMessage = findRecentMessage(
            recentMessages,
            Number(bookClub.id),
          );

          return (
            <Link key={id} href={`/chat/${bookClub.id}`}>
              <ChatCard
                variant="bookClub"
                props={{
                  ...bookClub,
                  lastMessage: recentMessage?.content || '',
                  lastMessageTime: recentMessage?.date
                    ? formatDateForUI(recentMessage.date, 'CHAT_ROOM')
                    : '',
                }}
              />
            </Link>
          );
        })}
      </div>
    </section>
  );
}
