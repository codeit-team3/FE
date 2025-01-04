// TODO: profileImg, userName, clubName, bookClubType
export interface Review {
  id: number;
  userId: number;
  bookClubId: number;
  rating: number;
  content: string;
  image?: string | undefined;
  createdAt: string;

  clubImgUrl?: string;
  nickname?: string;
  clubName: string;
  bookClubType: 'FREE' | 'FIXED';
}

export interface DetailReview
  extends Omit<Review, 'bookClubType' | 'clubName'> {
  userName: string;
  bookClubType?: 'FREE' | 'FIXED';
  clubName?: string;
}

export interface ClubDetailReviewFilters {
  order?: 'DESC' | 'RATE_DESC' | 'RATE_ASC';
  size?: number;
  page?: number;
}
