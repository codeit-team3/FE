'use client';

import ClubReview from '@/components/written-review/club-review/ClubReview';
import { ClubReviewResponse } from '../types';
// import DropDown from '@/components/drop-down/DropDown';
// import { useState } from 'react';

function ReviewList({ reviewInfo }: { reviewInfo: ClubReviewResponse }) {
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
        {reviewInfo.reviews.map((review) => (
          <ClubReview
            key={review.id}
            ratingCount={review.rating}
            comment={review.content}
            userProfile={{
              profileImage: review.image || '/images/profile.png',
              userName: review.nickname,
              createdAt: review.createdAt,
            }}
          />
        ))}
      </div>
    </section>
  );
}
export default ReviewList;
