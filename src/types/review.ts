export interface Review {
  reviewId: number;
  userId: number;
  bookClubId: number;
  clubName: string;
  rating: number;
  comment: string;
  clubImgUrl?: string | undefined;
  clubImgAlt?: string | undefined;
  profileImg?: string;
  userName?: string;
  createdAt: string;
  bookClubType: 'FREE' | 'FIXED';
}

export interface ClubDetailReviewFilters {
  order?: 'DESC' | 'RATE_DESC' | 'RATE_ASC';
  size?: number;
  page?: number;
}
