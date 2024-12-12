'use client';

import React, { useState } from 'react';
import Modal from '@/components/modal/Modal';
import ReviewHeartIcon from '../../../../public/icons/ReviewHeartIcon';

const INITIAL_RATING = 5;
const RATING_RANGE = [1, 2, 3, 4, 5] as const;

interface WriteReviewContentProps {
  rating: number;
  setRating: (rating: number) => void;
  review: string;
  setReview: (review: string) => void;
}

interface WriteReviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (rating: number, review: string) => void;
}
function WriteReviewContent({
  rating,
  setRating,
  review,
  setReview,
}: WriteReviewContentProps) {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h3 className="mb-4 text-lg font-bold text-gray-darker">
          모임은 어떠셨나요?
        </h3>
        <div className="flex gap-1">
          {RATING_RANGE.map((heart) => (
            <button key={heart} onClick={() => setRating(heart)}>
              <ReviewHeartIcon isClicked={heart <= rating} />
            </button>
          ))}
        </div>
      </div>
      <div>
        <p className="mb-4 text-lg font-bold text-gray-darker">
          모임에 참여한 경험을 공유해주세요.
        </p>
        <textarea
          value={review}
          onChange={(e) => setReview(e.target.value)}
          className="min-h-[120px] w-full resize-none rounded-xl bg-gray-light-02 p-4 text-gray-darker"
          placeholder="남겨주신 리뷰는 모임 운영에 큰 도움이 될 거에요!"
        />
      </div>
    </div>
  );
}

function WriteReviewModal({
  isOpen,
  onClose,
  onConfirm,
}: WriteReviewModalProps) {
  const [rating, setRating] = useState(INITIAL_RATING);
  const [review, setReview] = useState('');

  const handleSubmit = () => {
    onConfirm(rating, review);
    onClose();
    setRating(INITIAL_RATING);
    setReview('');
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="리뷰 작성하기"
      onConfirm={handleSubmit}
      cancelText="취소하기"
      confirmText="작성완료"
      cancelButtonProps={{
        themeColor: 'gray-dark-01',
        lightColor: 'gray-normal-01',
        fillType: 'lightSolid',
      }}
      confirmButtonProps={{
        themeColor: 'green-normal-01',
        lightColor: 'green-light-03',
        fillType: 'lightSolid',
      }}
    >
      <WriteReviewContent
        rating={rating}
        setRating={setRating}
        review={review}
        setReview={setReview}
      />
    </Modal>
  );
}

export default WriteReviewModal;
