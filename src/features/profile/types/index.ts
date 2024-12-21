export interface User {
  teamId: string;
  id: number;
  email: string;
  name: string;
  description?: string | null;
  image?: string | null;
  createdAt: Date;
  updatedAt: Date;
}

export interface ProfilePageProps {
  user: User | null;
}

export interface ProfileEditData {
  name: string;
  description?: string;
  image?: string | null;
}

//TODO: isCanceled, imageUrl. isPast, status 수정
export interface BookClub {
  clubId: number;
  title: string;
  description: string;
  meetingType: 'ONLINE' | 'OFFLINE';
  bookClubType: 'FREE' | 'FIXED';
  targetDate: string;
  endDate: string;
  memberLimit: number;
  town: string;
  memberCount: number;
  isLiked: boolean;
  isCanceled: boolean;
  imageUrl: string | undefined;
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
  comment: string;
  clubImgUrl?: string | undefined;
  clubImgAlt?: string | undefined;
  profileImg?: string;
  userName?: string;
  createdAt: string;
  bookClubType: 'FREE' | 'FIXED';
}
