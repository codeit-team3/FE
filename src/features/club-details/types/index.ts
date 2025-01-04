import { DetailReview } from '@/types/review';

export interface ClubReviewResponse {
  averageScore: number;
  ratingCounts: {
    one: number;
    two: number;
    three: number;
    four: number;
    five: number;
  };
  reviews: DetailReview[];
}
