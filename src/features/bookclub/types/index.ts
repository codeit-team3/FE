import { BookTab } from '@/constants';

export interface BookClubParams {
  bookClubType?: BookTab;
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
  bookClubType?: BookTab; // 필터 타입
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
  bookClubType: BookTab;
  targetDate: string;
  endDate: string;
  memberLimit: number;
  town: string | null;
  memberCount: number;
  isLiked: boolean;
  imageUrl?: string;
}
