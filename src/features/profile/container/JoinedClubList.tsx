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
import { usePathname } from 'next/navigation';

export default function JoinedClubList({ order }: ClubListProps) {
  const router = useRouter();
  const pathname = usePathname();
  const userId = Number(pathname?.split('/')[2]);

  const { queryKey, queryFn } = bookClubs.userJoined(userId, { order: order });
  const { data, isLoading, error } = useQuery({
    queryKey,
    queryFn,
  });

  const myJoinedList: BookClub[] = data?.data?.bookClubs || [];
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
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {myJoinedList?.length === 0 ? (
        <div className="flex h-full pt-[255px] text-center text-gray-normal-03">
          <span className="whitespace-pre-wrap">
            {NO_LIST_MESSAGE['JOINED']}
          </span>
        </div>
      ) : (
        myJoinedList
          ?.filter((bookClub) => !bookClub.isInactive)
          ?.map((bookClub) => (
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
