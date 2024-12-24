export interface BookClubParams {
  bookClubType?: 'ALL' | 'FREE' | 'FIXED';
  meetingType?: 'ALL' | 'ONLINE' | 'OFFLINE';
  order?: 'DESC' | 'END';
  memberLimit?: number;
  location?: string;
  targetDate?: string;
  page?: number;
  size?: number;
  searchKeyword?: string;
}

export interface BookClub {
  id: number;
  title: string;
  description: string;
  meetingType: 'ONLINE' | 'OFFLINE';
  bookClubType: 'FREE' | 'FIXED';
  targetDate: string; // 모임일
  endDate: string; // 모집마감일
  memberLimit: number;
  town: string | null;
  memberCount: number;
  isLiked: boolean;
  imageUrl?: string;
}
