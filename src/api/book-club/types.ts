export interface WrittenReviewParams {
  bookClubId: number;
  order?: string;
  size?: number;
  page?: number;
}

export interface WriteReviewParams {
  bookClubId: number;
  rating: number;
  content: string;
}
