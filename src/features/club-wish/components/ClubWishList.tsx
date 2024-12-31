'use client';

import Card from '@/components/card/Card';
import { formatDateForUI, isPastDate } from '@/lib/utils/formatDateForUI';
import { useRouter } from 'next/navigation';
import { useMemo } from 'react';
import EmptyState from '@/components/common-layout/EmptyState';
import { clubStatus } from '@/lib/utils/clubUtils';
import { BookClub } from '@/types/bookclubs';

interface ClubWishListProps {
  bookClubs: BookClub[];
}

function ClubWishList({ bookClubs = [] }: ClubWishListProps) {
  const router = useRouter();

  const today = useMemo(() => new Date(), []);

  const getCardProps = (club: BookClub) => ({
    clubId: club.id,
    imageUrl: club.imageUrl || '/images/profile.png',
    imageAlt: club.title,
    title: club.title,
    location: club.town || '',
    datetime: formatDateForUI(club.targetDate, 'KOREAN'),
    isLiked: club.isLiked,
    current: club.memberCount,
    max: club.memberLimit,
    isPast: isPastDate(club.endDate, today), // 지난 모임 여부
    isCanceled: false, // 모임 취소 여부 (API 값에 따라 변경 가능)
    bookClubType: club.bookClubType,
    meetingType: club.meetingType,
    clubStatus: clubStatus(
      club.memberCount,
      club.memberLimit,
      club.endDate,
      today,
    ) as 'closed' | 'confirmed' | 'pending',
    onLikeClick: () => console.log(`${club.title} 좋아요 클릭`),
    onClick: () => router.push(`/bookclub/${club.id}`),
    onDelete: () => console.log(`${club.title} 삭제 클릭`),
  });

  return (
    <main className="flex w-full min-w-[336px] flex-col items-center gap-y-[26px] bg-gray-light-01 px-[20px] pb-[33px] pt-[18px] sm:justify-between md:px-[24px] md:pb-[46px] lg:px-[102px]">
      {bookClubs?.length > 0 ? (
        bookClubs.map((club) => <Card key={club.id} {...getCardProps(club)} />)
      ) : (
        <EmptyState
          title="아직 찜한 모임이 없어요."
          subtitle="지금 바로 책 모임을 찜 해보세요."
        />
      )}
    </main>
  );
}

export default ClubWishList;
