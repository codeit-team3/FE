'use client';

import Image from 'next/image';
import RatingDisplay from '../rating-display/RatingDisplay';
import { useState, useEffect } from 'react';

// 디자인 확정시, 기본 이미지 변경
const defaultProfileImage = '/images/profile.png';

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
  const [imgSrc, setImgSrc] = useState(profileImage || defaultProfileImage);

  useEffect(() => {
    setImgSrc(profileImage || defaultProfileImage);
  }, [profileImage]);

  const handleImageError = () => {
    setImgSrc(defaultProfileImage);
  };

  return (
    <article className="flex w-full max-w-[948px] flex-col items-start">
      <RatingDisplay ratingCount={ratingCount} />
      <p className="mb-2 mt-[10px] max-w-full flex-wrap text-sm font-medium text-gray-darker">
        {comment}
      </p>
      <div className="flex items-center gap-x-[6px]">
        <Image
          width={24}
          height={24}
          src={imgSrc}
          alt={`${userName}'s profile picture`}
          className="h-6 w-6 rounded-full object-cover"
          onError={handleImageError}
        />
        <p className="flex h-[1em] items-center text-xs font-semibold text-gray-darker">
          {userName}
        </p>
        <p className="text-xs font-medium text-gray-normal-03">{createdAt}</p>
      </div>
      <hr className="border-t-1 mt-4 w-full border-gray-normal-01" />
    </article>
  );
}
