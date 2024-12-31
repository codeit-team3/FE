'use client';

import React from 'react';
import ChatCard from '@/features/chat/components/chat-card/ChatCard';
import { bookClubs } from '@/api/book-club/react-query';
import { useQuery } from '@tanstack/react-query';
import { BookClubProps } from '@/features/chat/components/chat-card/types/variantChatCard';
import Link from 'next/link';

export default function BookClubChatContainer() {
  const { queryKey, queryFn } = bookClubs.myJoined({ order: 'DESC' });
  const { data, isLoading, error } = useQuery({
    queryKey,
    queryFn,
  });

  const bookClubChats = data?.data?.bookClubs || [];

  if (isLoading) return <div>로딩중...</div>;
  if (error) return <div>에러가 발생했습니다</div>;

  return (
    <section className="flex flex-1 bg-gray-light-02 px-6 py-5">
      <div className="mx-auto flex w-full max-w-[996px] flex-col gap-5">
        {bookClubChats.map((chat: BookClubProps, id: number) => (
          <Link key={id} href={`/chat/${chat.id}`}>
            <ChatCard
              variant="bookClub"
              props={{
                ...chat,
              }}
            />
          </Link>
        ))}
      </div>
    </section>
  );
}
