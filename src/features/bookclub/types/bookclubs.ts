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

// API 타입
export type ApiBookClubType = 'ALL' | 'FREE' | 'FIXED';

// UI 타입
export type UiBookClubType = '전체' | '자유책' | '지정책';

export interface Filters {
  searchKeyword?: string;
  bookClubType?: ApiBookClubType;
  meetingType?: 'ALL' | 'ONLINE' | 'OFFLINE';
  order?: 'DESC' | 'END';
  memberLimit?: number;
  page?: number;
  size?: number;
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
