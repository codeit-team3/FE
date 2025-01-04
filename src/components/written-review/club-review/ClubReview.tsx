import WrittenReview from '../WrittenReview';

interface ClubReviewProps {
  ratingCount: number;
  comment: string;
  userProfile: {
    profileImage: string;
    userName: string;
    createdAt: string;
  };
  onClick: () => void;
}

function ClubReview({
  ratingCount,
  comment,
  userProfile,
  onClick,
}: ClubReviewProps) {
  return (
    <WrittenReview>
      <div className="flex flex-col gap-y-2">
        <WrittenReview.Rating ratingCount={ratingCount} />
        <WrittenReview.Comment text={comment} />
        <WrittenReview.UserProfile
          profileImage={userProfile.profileImage}
          userName={userProfile.userName}
          createdAt={userProfile.createdAt}
          onClick={onClick}
        />
      </div>
    </WrittenReview>
  );
}
export default ClubReview;
