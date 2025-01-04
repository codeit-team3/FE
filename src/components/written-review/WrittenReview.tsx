import Image from 'next/image';
import RatingDisplay from '../rating-display/RatingDisplay';
import {
  ClubImageProps,
  ClubInfoProps,
  CommentProps,
  RatingProps,
  UserProfileProps,
  WrittenReviewProps,
} from './types/writtenReview';
import ClubChip from '../chip/club-chip/ClubChip';
import { twMerge } from 'tailwind-merge';

// 기본 이미지 (변경될 수 있음)
const defaultProfileImage = '/images/profile.png';
const defaultClubImage = '/images/profile.png';

function handleImageError(
  event: React.SyntheticEvent<HTMLImageElement>,
  defaultSrc: string,
) {
  event.currentTarget.src = defaultSrc;
}

export default function WrittenReview({
  children,
  onClickReview,
}: WrittenReviewProps) {
  return (
    <article
      className="flex w-full flex-col items-start sm:justify-center"
      onClick={onClickReview}
    >
      {children}
      <hr className="border-t-1 mt-4 w-full border-gray-normal-01" />
    </article>
  );
}

function Rating({ ratingCount }: RatingProps) {
  return <RatingDisplay ratingCount={ratingCount} />;
}

function Comment({ text }: CommentProps) {
  return (
    <p className="max-w-full flex-wrap text-sm font-medium text-gray-darker">
      {text}
    </p>
  );
}

function UserProfile({
  profileImage,
  userName,
  createdAt,
  className,
  onClick,
}: UserProfileProps) {
  return (
    <div className={twMerge(`flex items-center gap-x-[6px]`, className)}>
      {profileImage && (
        <Image
          width={24}
          height={24}
          src={profileImage || defaultProfileImage}
          alt={`${userName}'s profile picture`}
          className="h-6 w-6 cursor-pointer rounded-full object-cover"
          onClick={onClick}
          onError={(e) => handleImageError(e, defaultProfileImage)}
        />
      )}
      <p className="flex h-[1em] items-center text-xs font-semibold text-gray-darker">
        {userName}
      </p>
      <p className="text-xs font-medium text-gray-normal-03">{createdAt}</p>
    </div>
  );
}

function ClubImage({ src, alt }: ClubImageProps) {
  return (
    <div className="relative min-h-[180px] w-[336px] overflow-hidden rounded-[20px] lg:w-[384px]">
      <Image
        src={src || defaultClubImage}
        alt={alt || 'Club image'}
        fill
        className="object-cover"
        onError={(e) => handleImageError(e, defaultClubImage)}
      />
    </div>
  );
}

function ClubInfo({ clubName, bookClubType }: ClubInfoProps) {
  return (
    <div className="flex items-center gap-x-2">
      <p className="text-xl font-semibold">{clubName}</p>
      <ClubChip variant={bookClubType} />
    </div>
  );
}

// WrittenReview의 자식 컴포넌트 연결
WrittenReview.Rating = Rating;
WrittenReview.Comment = Comment;
WrittenReview.UserProfile = UserProfile;
WrittenReview.ClubInfo = ClubInfo;
WrittenReview.ClubImage = ClubImage;
