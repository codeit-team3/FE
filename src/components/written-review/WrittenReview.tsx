'use client';

import Image from 'next/image';
import RatingDisplay from '../rating-display/RatingDisplay';
import { useState, useEffect } from 'react';

// 디자인 확정시, 기본 이미지 변경
const defaultProfileImage =
  'https://cdn.pixabay.com/photo/2018/02/12/10/45/heart-3147976_1280.jpg';

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
    <article className="flex flex-col items-start">
      <RatingDisplay ratingCount={ratingCount} />
      <p className="mb-2 mt-[10px] flex-wrap text-sm text-gray-700">
        {comment}
      </p>
      <div className="flex items-center">
        <Image
          width={24}
          height={24}
          src={imgSrc}
          alt={`${userName}'s profile picture`}
          className="h-6 w-6 rounded-full"
          onError={handleImageError}
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
