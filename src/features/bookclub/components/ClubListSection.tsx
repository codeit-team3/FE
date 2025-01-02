'use client';

import Card from '@/components/card/Card';
import { formatDateForUI, isPastDate } from '@/lib/utils/formatDateForUI';
import { useRouter } from 'next/navigation';
import { useMemo } from 'react';
import EmptyState from '@/components/common-layout/EmptyState';
import { clubStatus } from '@/lib/utils/clubUtils';
import { BookClub } from '@/types/bookclubs';

interface ClubListSectionProps {
  bookClubs: BookClub[];
}

function ClubListSection({ bookClubs = [] }: ClubListSectionProps) {
  const router = useRouter();

  const today = useMemo(() => new Date(), []);

  return (
    <main className="flex w-full min-w-[336px] flex-1 flex-col items-center gap-y-[26px] bg-gray-light-01 px-[20px] pt-[18px] sm:justify-between md:px-[24px] lg:px-[102px]">
      {bookClubs?.length > 0 ? (
        bookClubs.map((club) => (
          <Card
            key={club.id}
            clubId={club.id}
            imageUrl={club.imageUrl || '/images/profile.png'}
            imageAlt={club.title}
            title={club.title}
            location={club.town || ''}
            datetime={formatDateForUI(club.targetDate, 'KOREAN')}
            isLiked={club.isLiked}
            current={club.memberCount}
            max={club.memberLimit}
            isPast={isPastDate(club.endDate, today)} // 지난 모임 여부
            isCanceled={false} // 모임 취소 여부 (API 값에 따라 변경 가능)
            bookClubType={club.bookClubType}
            meetingType={club.meetingType}
            clubStatus={clubStatus(
              club.memberCount,
              club.memberLimit,
              club.endDate,
              today,
            )}
            onLikeClick={() => console.log(`${club.title} 좋아요 클릭`)}
            onClick={() => router.push(`/bookclub/${club.id}`)}
            onDelete={() => console.log(`${club.title} 삭제 클릭`)}
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
