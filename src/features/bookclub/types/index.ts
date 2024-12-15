export interface BookClubParams {
  bookClubType?: 'ALL' | 'FIXED' | 'FREE';
  meetingType?: 'ALL' | 'ONLINE' | 'OFFLINE';
  order?: 'DESC' | 'END';
  memberLimit?: number;
  location?: string;
  targetDate?: string;
  page?: number;
  size?: number;
  searchKeyword?: string;
}
