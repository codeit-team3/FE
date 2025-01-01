'use client';

import ClubReview from '@/components/written-review/club-review/ClubReview';
import { ClubReviewResponse } from '../types';
import DropDown from '@/components/drop-down/DropDown';
import { DetailClubReviewParams } from '@/api/book-club/types';
import EmptyState from '@/components/common-layout/EmptyState';

function ReviewList({
  reviewInfo,
  setFilters,
}: {
  reviewInfo: ClubReviewResponse;
  setFilters: (newFilters: Partial<DetailClubReviewParams>) => void;
}) {
  const setSortingOrder = (selectedLabel: string | undefined) => {
    if (['DESC', 'RATE_DESC', 'RATE_ASC'].includes(selectedLabel || '')) {
      setFilters({ order: selectedLabel as 'DESC' | 'RATE_DESC' | 'RATE_ASC' });
    }
  };

  return (
    <section>
      <div className="mb-[10px] flex h-full items-center justify-between">
        <h2 className="text-[20px] font-semibold text-gray-black">
          다른 북코들은 이 모임을 이렇게 느꼈어요!
        </h2>
        <DropDown
          variant={'sortingReview'}
          onChangeSelection={(selectedLabel) => setSortingOrder(selectedLabel)}
        />
      </div>
      <div className="flex min-h-[554px] flex-col gap-4 rounded-xl border-2 border-gray-normal-01 p-6 md:min-h-[434px]">
        {reviewInfo.reviews?.length > 0 ? (
          reviewInfo.reviews.map((review) => (
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
          ))
        ) : (
          <EmptyState
            title="아직 등록된 리뷰가 없어요."
            subtitle="지금 바로 모임에 참여하고 리뷰를 남겨보세요."
          />
        )}
      </div>
    </section>
  );
}
export default ReviewList;
