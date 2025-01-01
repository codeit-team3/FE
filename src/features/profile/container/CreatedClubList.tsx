'use client';

import Card from '@/components/card/Card';
import { NO_LIST_MESSAGE } from '../constants/meassage';
import { useRouter } from 'next/navigation';
import { ClubListProps } from '../types';
import { bookClubs } from '@/api/book-club/react-query';
import { useQuery } from '@tanstack/react-query';
import { formatDateForUI, isPastDate } from '@/lib/utils/formatDateForUI';
import { clubStatus } from '@/lib/utils/clubUtils';
import { BookClub } from '@/types/bookclubs';
import { useGetUserByPath } from '@/lib/hooks/useGetUserByPath';

export default function CreatedClubList({ order }: ClubListProps) {
  const router = useRouter();
  const user = useGetUserByPath();

  const { queryKey, queryFn } = bookClubs.userCreated(user?.id, {
    order: order,
  });
  const { data, isLoading, error } = useQuery({
    queryKey,
    queryFn,
  });

  const CreatedList: BookClub[] = data?.data?.bookClubs || [];
  const today = new Date();

  // 카드 클릭 이벤트
  const onClick = (clubId: number) => {
    alert(clubId);
    router.push(`/bookclub/${clubId}`);
  };

  const onLikeClick = (clubId: number) => {
    alert(clubId);
  };

  return (
    <div className="flex w-full flex-col items-center justify-center gap-y-[26px]">
      {/* TODO: 로딩 컴포넌트 */}
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {CreatedList?.length === 0 ? (
        <div className="flex h-full pt-[255px] text-center text-gray-normal-03">
          <span className="whitespace-pre-wrap">
            {NO_LIST_MESSAGE['CREATED']}
          </span>
        </div>
      ) : (
        CreatedList?.filter((bookClub) => !bookClub.isInactive)?.map(
          (bookClub) => (
            <div key={bookClub.id} className="md:w-full">
              {/* TODO: imageUrl. isPast, status 수정 */}
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
          ),
        )
      )}
    </div>
  );
}
