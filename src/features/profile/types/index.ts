import { User } from '@/types/user';
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
export interface ProfilePageProps {
  user?: User | null | undefined;
  isMyPage: boolean;
}

export interface ClubListProps {
  user?: User | null | undefined;
  order: orderType;
}

export interface EditInfoParams {
  nickname?: string;
  description?: string;
  image?: string | null;
}
