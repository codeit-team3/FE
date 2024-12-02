import Image from 'next/image';
import RatingDisplay from '../rating/RatingDisplay';

interface WrittenReviewProps {
  ratingCount: number;
  comment: string;
  profileImage?: string;
  userName: string;
  createdAt: string;
}

export default function WrittenReview({
  ratingCount,
  comment,
  profileImage,
  userName,
  createdAt,
}: WrittenReviewProps) {
  // 디자인 확정시, 기본 이미지 변경
  const defaultProfileImage = profileImage
    ? profileImage
    : 'https://cdn.pixabay.com/photo/2024/02/17/00/18/cat-8578562_1280.jpg';

  return (
    <article className="flex flex-col items-start">
      <RatingDisplay ratingCount={ratingCount} />
      <p className="mb-2 mt-[10px] flex-wrap text-sm text-gray-700">
        {comment}
      </p>
      <div className="flex items-center">
        <Image
          width={24}
          height={24}
          src={defaultProfileImage}
          alt={`${userName}'s profile picture`}
          className="h-6 w-6 rounded-full"
        />
        <p className="flex h-[1em] items-center border-r-2 border-r-gray-700 px-2 text-xs text-gray-700">
          {userName}
        </p>
        <p className="ml-3 text-xs text-gray-500">{createdAt}</p>
      </div>
      <hr className="mt-4 w-full border-t-2 border-dashed border-gray-200" />
    </article>
  );
}
