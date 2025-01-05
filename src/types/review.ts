// TODO: profileImg, userName, clubName, bookClubType
export interface Review {
  id: number;
  userId: number;
  bookClubId: number;
  rating: number;
  content: string;
  nickname: string;
  userImage?: string | undefined;
  createdAt: string;

  bookClubImageUrl?: string;
  bookClubTitle: string;
  bookClubType: 'FREE' | 'FIXED';
}

export interface DetailReview
  extends Omit<Review, 'bookClubType' | 'bookClubTitle' | 'bookClubImageUrl'> {
  bookClubType?: 'FREE' | 'FIXED';
  bookClubTitle?: string;
  bookClubImageUrl?: string;
}

export interface ClubDetailReviewFilters {
  order?: 'DESC' | 'RATE_DESC' | 'RATE_ASC';
  size?: number;
  page?: number;
}
