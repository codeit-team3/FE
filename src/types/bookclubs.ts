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
  memberLimitMin?: number;
  memberLimitMax?: number;
}

export interface MyProfileParams {
  order?: orderType;
  page?: number;
  size?: number;
}

//TODO: imageUrl. isPast, clubStatus, reviewScore 수정
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
  address: string;
  isLiked: boolean;
  isInactive: boolean;
  imageUrl?: string | undefined;
  isPast: boolean;
  clubStatus: 'pending' | 'confirmed' | 'closed'; // TODO: 내가 만든 모임에서 '모임 완료' 상태 추가
  reviewScore?: number | undefined;
}

export type orderType = 'DESC' | 'ASC' | 'END' | 'RATE_DESC' | 'RATE_ASC';
