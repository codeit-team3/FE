export interface User {
  id: number;
  email: string;
  name: string;
  nickname: string;
  description?: string | null;
  image?: string | null;
  createdAt: Date;
  updatedAt: Date;
}

export interface ProfilePageProps {
  user: User | null;
}

//TODO: isCanceled, imageUrl. isPast, status 수정
export interface BookClub {
  id: number;
  title: string;
  description: string;
  meetingType: 'ONLINE' | 'OFFLINE';
  bookClubType: 'FREE' | 'FIXED';
  targetDate: string;
  endDate: string;
  town: string;
  memberLimit: number;
  memberCount: number;
  isLiked: boolean;
  isCanceled: boolean;
  imageUrl?: string | undefined;
  isPast: boolean;
  clubStatus: 'pending' | 'confirmed' | 'closed';
  reviewScore?: number | undefined;
}

export interface Review {
  reviewId: number;
  userId: number;
  bookClubId: number;
  clubName: string;
  rating: number;
  content: string;
  clubImgUrl?: string | undefined;
  clubImgAlt?: string | undefined;
  profileImg?: string;
  userName?: string;
  createdAt: string;
  bookClubType: 'FREE' | 'FIXED';
}

export interface myClubParams {
  order?: orderType;
  size?: number;
  page?: number;
}

export type orderType = 'DESC' | 'ASC' | 'END';

export interface myJoinedParams {
  order?: orderType;
  size?: number;
  page?: number;
}
