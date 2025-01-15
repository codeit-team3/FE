import { BookClubParams } from '@/types/bookclubs';

export const DEFAULT_FILTERS: BookClubParams = {
  bookClubType: 'ALL',
  meetingType: 'ALL',
  order: 'DESC',
  page: 1,
  size: 10,
  searchKeyword: '',
};
