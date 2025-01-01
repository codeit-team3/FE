export interface ClubReviewResponse {
  averageScore: number;
  reviews: Review[];
}

export interface Review {
  id: number;
  userId: number;
  bookClubId: number;
  rating: number;
  content: string;
  nickname: string;
  image: string | undefined;
  createdAt: string;
}
