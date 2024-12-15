export interface User {
  teamId: string;
  id: number;
  email: string;
  name: string;
  companyName?: string | null;
  image?: string | null;
  createdAt: Date;
  updatedAt: Date;
}

export interface ProfilePageProps {
  user: User | null;
}

export interface ProfileEditData {
  name: string;
  companyName?: string;
  image?: string | null;
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
  memberLimit: number;
  town: string;
  memberCount: number;
  isLiked: boolean;
  isCanceled: boolean;
  imageUrl: string;
  isPast: boolean;
  status: 'completed' | 'scheduled' | 'pending' | 'confirmed' | 'closed';
}
