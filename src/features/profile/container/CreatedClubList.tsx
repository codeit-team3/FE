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
import Loading from '@/components/loading/Loading';
import { useLikeClub, useUnLikeClub } from '@/lib/hooks';

export default function CreatedClubList({ order }: ClubListProps) {
  const router = useRouter();
  const user = useGetUserByPath();
  const defaultClubImage = '/images/defaultBookClub.jpg';

  const { data, isLoading, error } = useQuery(
    bookClubs.user(user?.id)._ctx.created({ order, page: 1, size: 10 }),
  );

  const { onConfirmUnLike } = useUnLikeClub();
  const { onConfirmLike } = useLikeClub();

  const handleLikeClub = (isLiked: boolean, id: number) => {
    isLiked ? onConfirmUnLike(id) : onConfirmLike(id);
  };

  const CreatedList: BookClub[] = data?.bookClubs ?? [];
  const today = new Date();

  return (
    <div className="flex w-full flex-col items-center justify-center gap-y-[26px]">
      {error && <p>Error: {error.message}</p>}
      {isLoading ? (
        <div className="h-[400px]">
          <Loading fullHeight={false} />
        </div>
      ) : CreatedList?.length === 0 ? (
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
                imageUrl={bookClub.imageUrl || defaultClubImage}
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
                onClick={() => router.push(`/bookclub/${bookClub.id}`)}
                onLikeClick={() =>
                  handleLikeClub(bookClub.isLiked, bookClub.id)
                }
              />
            </div>
          ),
        )
      )}
    </div>
  );
}
