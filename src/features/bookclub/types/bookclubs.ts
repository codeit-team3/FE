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

export interface Filters {
  searchKeyword?: string;
  bookClubType?: 'ALL' | 'FREE' | 'FIXED';
  meetingType?: 'ALL' | 'ONLINE' | 'OFFLINE';
  order?: 'DESC' | 'END';
  page?: number;
  size?: number;
}

export interface BookClub {
  id: number;
  title: string;
  description: string;
  meetingType: 'ONLINE' | 'OFFLINE';
  bookClubType: 'FREE' | 'FIXED';
  targetDate: string;
  endDate: string;
  memberLimit: number;
  town: string | null;
  memberCount: number;
  isLiked: boolean;
  imageUrl?: string;
}
