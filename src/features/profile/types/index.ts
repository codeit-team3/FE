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
  imageUrl: string;
  isPast: boolean;
  clubStatus: 'pending' | 'confirmed' | 'closed';
}

export interface Review {
  reviewId: number;
  userId: number;
  bookClubId: number;
  rating: number;
  content: string;
  clubImgUrl: string | undefined;
  clubImgAlt: string | undefined;
  clubName: string;
  bookClubType: 'FREE' | 'FIXED';
  createdAt: string;
}
