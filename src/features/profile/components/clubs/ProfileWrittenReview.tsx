import WrittenReview from '@/components/written-review/WrittenReview';
import { formatDateSimple } from '@/lib/utils/dateUtils';
import { Review } from '@/types/review';
import { useRouter } from 'next/navigation';

interface ProfileWrittenReviewProps {
  review: Review;
}

export default function ProfileWrittenReview({
  review,
}: ProfileWrittenReviewProps) {
  const router = useRouter();
  const defaultClubImage = '/images/defaultBookClub.jpg';
  return (
    <WrittenReview
      onClickReview={() => router.push(`/bookclub/${review.bookClubId}`)}
    >
      <div className="flex cursor-pointer items-center gap-x-6 sm:flex-col sm:items-start sm:gap-y-6 md:flex-row">
        <WrittenReview.ClubImage
          src={review.bookClubImageUrl || defaultClubImage}
          alt="review_club_image"
        />
        <div className="relative flex min-h-[180px] w-[336px] flex-1 flex-col gap-y-1.5 text-sm font-medium text-gray-darker md:w-full">
          <WrittenReview.Rating ratingCount={review.rating} />
          <div className="flex flex-col gap-y-2">
            <WrittenReview.ClubInfo
              clubName={review.bookClubTitle}
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
  );
}
