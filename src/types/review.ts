// TODO: profileImg, userName, clubName, bookClubType
export interface Review {
  id: number;
  userId: number;
  bookClubId: number;
  rating: number;
  content: string;
  image?: string | undefined; // TODO:clubImgUrl로 변경 필요
  createdAt: string;

  profileImg?: string;
  userName?: string;
  clubName: string;
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
