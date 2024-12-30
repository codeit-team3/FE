import WrittenReview from '@/components/written-review/WrittenReview';
import { formatDateSimple } from '@/lib/utils/dateUtils';
import { useRouter } from 'next/navigation';
import { orderType } from '@/types/bookclubs';
import { bookClubs } from '@/api/book-club/react-query';
import { useQuery } from '@tanstack/react-query';
import { Review } from '../types';
import { NO_LIST_MESSAGE } from '../constants/meassage';

interface MyReviewListProps {
  order: orderType;
}

export default function MyReviewList({ order }: MyReviewListProps) {
  const router = useRouter();

  const { queryKey, queryFn } = bookClubs.myReviews({ order });
  const { data, isLoading, error } = useQuery({
    queryKey,
    queryFn,
  });

  const myReviewList: Review[] = data?.data?.reviews || [];
  // const myReviewList: Review[] = mockReviews;

  return (
    <div className="flex w-full flex-col items-center justify-center gap-y-[26px]">
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {myReviewList?.length === 0 ? (
        <div className="flex h-full pt-[255px] text-center text-gray-normal-03">
          <span className="whitespace-pre-wrap">
            {NO_LIST_MESSAGE['MY_REVIEW']}
          </span>
        </div>
      ) : (
        myReviewList?.map((review) => (
          <div key={review.reviewId} className="md:w-full">
            <WrittenReview
              onClickReview={() =>
                router.push(`/bookclub/${review.bookClubId}`)
              }
            >
              <div className="flex items-center gap-x-6 sm:flex-col sm:items-start sm:gap-y-6 md:flex-row">
                <WrittenReview.ClubImage
                  src={review.clubImgUrl || '/images/defaultBookClub.jpg'}
                  alt={review.clubImgAlt}
                />
                <div className="relative flex min-h-[180px] w-[336px] flex-1 flex-col gap-y-1.5 text-sm font-medium text-gray-darker md:w-full">
                  <WrittenReview.Rating ratingCount={review.rating} />
                  <div className="flex flex-col gap-y-2">
                    <WrittenReview.ClubInfo
                      clubName={review.clubName}
                      bookClubType={review.bookClubType}
                    />
                    <WrittenReview.Comment text={review.content} />
                    <WrittenReview.UserProfile
                      createdAt={formatDateSimple(review.createdAt)}
                      className="gap-x-0"
                    />
                  </div>
                </div>
              </div>
            </WrittenReview>
          </div>
        ))
      )}
    </div>
  );
}
