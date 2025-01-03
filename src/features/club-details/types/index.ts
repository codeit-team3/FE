import { DetailReview } from '@/types/review';

export interface ClubReviewResponse {
  averageScore: number;
  reviews: DetailReview[];
}
