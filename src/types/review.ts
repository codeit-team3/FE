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
