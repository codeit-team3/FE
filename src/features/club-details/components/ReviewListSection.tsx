'use client';

import ClubReview from '@/components/written-review/club-review/ClubReview';
// import DropDown from '@/components/drop-down/DropDown';
// import { useState } from 'react';

const MOCK_REVIEWS = [
  {
    id: '1',
    ratingCount: 4,
    comment: '너무 좋았어요! 다음에도 참여할래요~',
    userProfile: {
      profileImage: '/images/profile.png',
      userName: '다람쥐쥐',
      createdAt: '2024.01.25',
    },
  },
  {
    id: '2',
    ratingCount: 4,
    comment: '두번째 이용이에요! 만족합니다.',
    userProfile: {
      profileImage: '/images/profile.png',
      userName: '동글동글이',
      createdAt: '2024.01.25',
    },
  },
  {
    id: '3',
    ratingCount: 3,
    comment:
      '강사분도 하시고 ~ ^^ 너무 좋은 공간에서 긴장과 스트레스 모두 잘 풀고 가요 ~ ^^',
    userProfile: {
      profileImage: '/images/profile.png',
      userName: '모닝러너',
      createdAt: '2024.01.25',
    },
  },
  {
    id: '4',
    ratingCount: 3,
    comment: '수업이 단조로워요.',
    userProfile: {
      profileImage: '/images/profile.png',
      userName: '해보자고',
      createdAt: '2024.01.25',
    },
  },
];

function ReviewListSection() {
  // 상위로 올려함
  // 레이아웃을 위한 임시 배치
  // const [selectedMemberCount, setSelectedMemberCount] = useState<
  //   string | undefined
  // >(undefined);
  return (
    <section>
      <div className="mb-[10px] flex h-full items-center justify-between">
        <h2 className="text-[20px] font-semibold text-gray-black">
          다른 북코들은 이 모임을 이렇게 느꼈어요!
        </h2>
        {/* <DropDown
          variant={'sortingReview'}
          onChangeSelection={setSelectedMemberCount}
        /> */}
      </div>
      <div className="flex flex-col gap-4 rounded-xl border-2 border-gray-normal-01 p-6">
        {MOCK_REVIEWS.map((review, index) => (
          <ClubReview
            key={`review-${index}`}
            ratingCount={review.ratingCount}
            comment={review.comment}
            userProfile={review.userProfile}
          />
        ))}
      </div>
    </section>
  );
}
export default ReviewListSection;
