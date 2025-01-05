'use client';
import { bookClubs } from '@/api/book-club/react-query';
import { useQuery } from '@tanstack/react-query';
import { ClubListProps } from '../types';
import { NO_LIST_MESSAGE } from '../constants/meassage';
import { Review } from '@/types/review';
import ProfileWrittenReview from '../components/clubs/ProfileWrittenReview';

import { useGetUserByPath } from '@/lib/hooks/useGetUserByPath';
import Loading from '@/components/loading/Loading';

export default function WrittenReviewList({ order }: ClubListProps) {
  const user = useGetUserByPath();

  const { data, isLoading, error } = useQuery(
    bookClubs.user(user?.id)._ctx.reviews({ order, page: 1, size: 100 }),
  );

  const ReviewList: Review[] = data?.reviews || [];

  return (
    <div className="flex w-full flex-col items-center justify-center gap-y-[26px]">
      {error && <p>Error: {error.message}</p>}
      {isLoading ? (
        <Loading />
      ) : ReviewList?.length === 0 ? (
        <div className="flex h-full pt-[255px] text-center font-medium text-gray-normal-03">
          <span className="whitespace-pre-wrap">
            {NO_LIST_MESSAGE['CLUB_REVIEW']}
          </span>
        </div>
      ) : (
        ReviewList?.map((review) => (
          <div key={review.id} className="md:w-full">
            <ProfileWrittenReview review={review} />
          </div>
        ))
      )}
    </div>
  );
}
