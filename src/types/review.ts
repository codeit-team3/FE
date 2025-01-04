// TODO: profileImg, userName, clubName, bookClubType
export interface Review {
  id: number;
  userId: number;
  bookClubId: number;
  rating: number;
  content: string;
  userImage?: string | undefined;
  createdAt: string;

  nickname?: string;
  bookClubImageUrl?: string;
  bookClubTitle: string;
  bookClubType: 'FREE' | 'FIXED';
}

export interface DetailReview
  extends Omit<Review, 'bookClubType' | 'clubName'> {
  nickname: string;
  bookClubType?: 'FREE' | 'FIXED';
  clubName?: string;
}

export interface ClubDetailReviewFilters {
  order?: 'DESC' | 'RATE_DESC' | 'RATE_ASC';
  size?: number;
  page?: number;
}
