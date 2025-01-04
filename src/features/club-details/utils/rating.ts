import { ClubReviewResponse } from '@/features/club-details/types';

type RatingCounts = ClubReviewResponse['ratingCounts'];

export const getRatingCount = (score: number, ratingCounts: RatingCounts) => {
  return ratingCounts[
    score === 5
      ? 'five'
      : score === 4
        ? 'four'
        : score === 3
          ? 'three'
          : score === 2
            ? 'two'
            : 'one'
  ];
};

export const calculateRatingPercentage = (
  score: number,
  ratingCounts: RatingCounts,
) => {
  const totalCount = Object.values(ratingCounts).reduce(
    (sum, count) => sum + count,
    0,
  );
  return totalCount === 0
    ? 0
    : (getRatingCount(score, ratingCounts) / totalCount) * 100;
};
