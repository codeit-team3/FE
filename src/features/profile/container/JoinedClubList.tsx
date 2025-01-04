'use client';

import { useRouter } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import Card from '@/components/card/Card';
import { NO_LIST_MESSAGE } from '../constants/meassage';
import { ClubListProps } from '../types';
import { formatDateForUI, isPastDate } from '@/lib/utils/formatDateForUI';
import { clubStatus } from '@/lib/utils/clubUtils';
import { BookClub } from '@/types/bookclubs';
import { bookClubs } from '@/api/book-club/react-query';
import { useGetUserByPath } from '@/lib/hooks/useGetUserByPath';
import { showToast } from '@/components/toast/toast';
import { useEffect } from 'react';
import Loading from '@/components/loading/Loading';

export default function JoinedClubList({ order }: ClubListProps) {
  const router = useRouter();
  const user = useGetUserByPath();

  const { data, isLoading, isError, error } = useQuery(
    bookClubs.user(user?.id)._ctx.joined({ order, page: 1, size: 10 }),
  );

  const JoinedList: BookClub[] = data?.bookClubs ?? [];

  const today = new Date();

  // 카드 클릭 이벤트
  const onClick = (clubId: number) => {
    router.push(`/bookclub/${clubId}`);
  };

  const onLikeClick = (clubId: number) => {
    alert(clubId);
  };

  useEffect(() => {
    if (isError) {
      showToast({
        message: '사용자 프로필 조회에 실패하였습니다. 주소를 확인해주세요 ',
        type: 'error',
      });
    }
  }, [isError]);

  return (
    <div className="flex w-full flex-col items-center justify-center gap-y-[26px]">
      {error && <p>Error: {error.message}</p>}
      {isLoading ? (
        <Loading fullHeight={false} />
      ) : JoinedList?.length === 0 ? (
        <div className="flex h-full pt-[255px] text-center text-gray-normal-03">
          <span className="whitespace-pre-wrap">
            {NO_LIST_MESSAGE['JOINED']}
          </span>
        </div>
      ) : (
        JoinedList?.filter(
          (bookClub) => !bookClub.isInactive && bookClub.hostId !== user.id,
        )?.map((bookClub) => (
          <div key={bookClub.id} className="md:w-full">
            <Card
              variant="defaultClub"
              clubId={bookClub.id}
              imageUrl={bookClub.imageUrl || '/images/defaultBookClub.jpg'}
              imageAlt="club_image"
              title={bookClub.title}
              location={bookClub.town}
              datetime={formatDateForUI(bookClub.targetDate, 'KOREAN')}
              isLiked={bookClub.isLiked}
              current={bookClub.memberCount}
              max={bookClub.memberLimit}
              isPast={isPastDate(bookClub.targetDate, today)}
              isCanceled={bookClub.isInactive}
              meetingType={bookClub.meetingType}
              bookClubType={bookClub.bookClubType}
              clubStatus={clubStatus(
                bookClub.memberCount,
                bookClub.memberLimit,
                bookClub.endDate,
                today,
              )}
              isMyPage={false}
              onClick={() => onClick(bookClub.id)}
              onLikeClick={() => onLikeClick(bookClub.id)}
            />
          </div>
        ))
      )}
    </div>
  );
}
