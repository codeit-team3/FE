'use client';

// import { bookClubs } from '@/api/book-club/react-query';
// import { useQuery } from '@tanstack/react-query';
import { ClubListProps } from '../types';
import { NO_LIST_MESSAGE } from '../constants/meassage';
import { mockReviews } from '../../../mocks/mockDatas';
import { Review } from '@/types/review';
import ProfileWrittenReview from '../components/clubs/ProfileWrittenReview';

export default function WrittenReviewList({ user, order }: ClubListProps) {
  console.log(user, order);
  // const { queryKey, queryFn } = bookClubs.myReviews({ order });
  // const { data, isLoading, error } = useQuery({
  //   queryKey,
  //   queryFn,
  // });

  // const myReviewList: Review[] = data?.data?.reviews || [];
  const myReviewList: Review[] = mockReviews;

  return (
    <div className="flex w-full flex-col items-center justify-center gap-y-[26px]">
      {/* {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>} */}
      {myReviewList?.length === 0 ? (
        <div className="flex h-full pt-[255px] text-center text-gray-normal-03">
          <span className="whitespace-pre-wrap">
            {NO_LIST_MESSAGE['MY_REVIEW']}
          </span>
        </div>
      ) : (
        myReviewList?.map((review) => (
          <div key={review.id} className="md:w-full">
            <ProfileWrittenReview review={review} />
          </div>
        ))
      )}
    </div>
  );
}
