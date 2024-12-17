import Image from 'next/image';
import RatingDisplay from '../rating-display/RatingDisplay';
import { LocationIcon } from '../../../public/icons';
import {
  ClubImageProps,
  ClubInfoProps,
  CommentProps,
  RatingProps,
  UserProfileProps,
} from './types/writtenReview';

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
}: {
  children: React.ReactNode;
}) {
  return (
    <article className="flex w-full max-w-[948px] flex-col items-start sm:justify-center">
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
}: UserProfileProps) {
  return (
    <div className={`flex items-center gap-x-[6px] ${className}`}>
      {profileImage && (
        <Image
          width={24}
          height={24}
          src={profileImage || defaultProfileImage}
          alt={`${userName}'s profile picture`}
          className="h-6 w-6 rounded-full object-cover"
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
    <Image
      src={src}
      alt={alt || 'Club image'}
      width={0} // 너비를 Tailwind로 관리하므로 설정하지 않음
      height={0} // 비율을 유지하며 높이는 자동으로 설정됨
      sizes="(max-width: 744px) 311px, 280px"
      className="h-[156px] w-[311px] rounded-3xl object-cover md:w-[280px]"
      onError={(e) => handleImageError(e, defaultClubImage)}
    />
  );
}

function ClubInfo({ clubName, location }: ClubInfoProps) {
  return (
    <div className="flex items-center gap-x-2">
      <p className="text-sm font-bold">{clubName}</p>
      <div className="flex items-center">
        <LocationIcon />
        <span className="text-sm font-semibold text-gray-dark-03">
          {location}
        </span>
      </div>
    </div>
  );
}

// WrittenReview의 자식 컴포넌트 연결
WrittenReview.Rating = Rating;
WrittenReview.Comment = Comment;
WrittenReview.UserProfile = UserProfile;
WrittenReview.ClubInfo = ClubInfo;
WrittenReview.ClubImage = ClubImage;
