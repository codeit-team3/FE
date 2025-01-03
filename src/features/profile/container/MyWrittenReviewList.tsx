'use client';

import { bookClubs } from '@/api/book-club/react-query';
import { useQuery } from '@tanstack/react-query';
import { ClubListProps } from '../types';
import { NO_LIST_MESSAGE } from '../constants/meassage';
import { Review } from '@/types/review';
import Loading from '@/components/loading/Loading';
import ProfileWrittenReview from '../components/clubs/ProfileWrittenReview';

export default function MyWrittenReviewList({ order }: ClubListProps) {
  const { queryKey, queryFn } = bookClubs.myReviews({ order });
  const { data, isLoading, error } = useQuery({
    queryKey,
    queryFn,
  });

  const myReviewList: Review[] = data?.data?.reviews || [];

  return (
    <div className="flex w-full flex-col items-center justify-center gap-y-[26px]">
      {error && <p>Error: {error.message}</p>}
      {isLoading ? (
        <Loading fullHeight={false} />
      ) : myReviewList?.length === 0 ? (
        <div className="flex h-full pt-[255px] text-center text-gray-normal-03">
          <span className="whitespace-pre-wrap">
            {NO_LIST_MESSAGE['CLUB_REVIEW']}
          </span>
        </div>
      ) : (
        myReviewList?.map((review) => (
          // TODO:리뷰 컴포넌트로 분리
          <div key={review.id} className="md:w-full">
            <ProfileWrittenReview review={review} />
          </div>
        ))
      )}
    </div>
  );
}
