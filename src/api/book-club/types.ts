export interface DetailClubReviewParams {
  bookClubId: number;
  order?: 'DESC' | 'RATE_DESC' | 'RATE_ASC';
  size?: number;
  page?: number;
}

export interface WriteReviewParams {
  bookClubId: number;
  rating: number;
  content: string;
}
