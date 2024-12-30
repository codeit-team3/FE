import { BookClub, BookClubParams } from '../../../types/bookclubs';

export const filters: BookClubParams = {
  bookClubType: 'ALL',
  meetingType: 'ALL',
  order: 'DESC',
  page: 1,
  size: 10,
  searchKeyword: '',
};

export const mockBookClubs: BookClub[] = [
  {
    id: 3,
    title: '한국의 역사',
    description: '국책 읽기',
    meetingType: 'OFFLINE',
    bookClubType: 'FIXED',
    targetDate: '2025-01-30T11:11:10',
    endDate: '2025-01-29T12:30:30',
    memberLimit: 10,
    town: '서울 강남구',
    memberCount: 6,
    isLiked: true,
  },
  {
    id: 2,
    title: '같이 읽어요',
    description: '국책 읽기',
    meetingType: 'ONLINE',
    bookClubType: 'FREE',
    targetDate: '2025-11-30T11:11:10',
    endDate: '2025-11-29T12:30:30',
    memberLimit: 4,
    town: null,
    memberCount: 1,
    isLiked: true,
  },
  {
    id: 1,
    title: '독서 모임',
    description: '상세에설며엉',
    meetingType: 'ONLINE',
    bookClubType: 'FIXED',
    targetDate: '2025-11-30T11:11:10',
    endDate: '2025-11-29T12:30:30',
    memberLimit: 7,
    town: null,
    memberCount: 1,
    isLiked: true,
  },
];
