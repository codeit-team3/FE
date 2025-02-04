'use client';

import Card from '@/components/card/Card';
import { formatDateForUI, isPastDate } from '@/lib/utils/formatDateForUI';
import { useRouter } from 'next/navigation';
import { useMemo } from 'react';
import EmptyState from '@/components/common-layout/EmptyState';
import { clubStatus } from '@/lib/utils/clubUtils';
import { BookClub, BookClubParams } from '@/types/bookclubs';
import { useLikeClub, useUnLikeClub } from '@/lib/hooks';

interface ClubListSectionProps {
  bookClubs: BookClub[];
  filter: BookClubParams;
}

function ClubListSection({ bookClubs = [], filter }: ClubListSectionProps) {
  const router = useRouter();
  const { onConfirmUnLike } = useUnLikeClub(filter);
  const { onConfirmLike } = useLikeClub(filter);

  const today = useMemo(() => new Date(), []);

  // console.log('🔍 ClubListSection 데이터:', bookClubs);

  const handleLikeClub = (isLiked: boolean, id: number) => {
    isLiked ? onConfirmUnLike(id) : onConfirmLike(id);
  };

  return (
    <main className="flex w-full min-w-[336px] flex-1 flex-col items-center gap-y-[26px] bg-gray-light-01 px-[20px] pt-[18px] md:px-[24px] lg:px-[102px]">
      {bookClubs?.length > 0 ? (
        bookClubs.map((club) => (
          <Card
            key={club.id}
            clubId={club.id}
            imageUrl={club.imageUrl || '/images/defaultBookClub.jpg'}
            imageAlt={club.title}
            title={club.title}
            location={club.town || ''}
            datetime={formatDateForUI(club.targetDate, 'KOREAN')}
            isLiked={club.isLiked}
            current={club.memberCount}
            max={club.memberLimit}
            isPast={isPastDate(club.targetDate, today)} // 지난 모임 여부
            isCanceled={club.isInactive} // 모임 취소 여부
            bookClubType={club.bookClubType}
            meetingType={club.meetingType}
            clubStatus={clubStatus(
              club.memberCount,
              club.memberLimit,
              club.endDate,
              today,
            )}
            onLikeClick={() => handleLikeClub(club.isLiked, club.id)}
            onClick={() => router.push(`/bookclub/${club.id}`)}
          />
        ))
      ) : (
        <EmptyState
          title="아직 책 모임이 없어요."
          subtitle="지금 바로 책 모임을 만들어보세요."
        />
      )}
    </main>
  );
}

export default ClubListSection;
