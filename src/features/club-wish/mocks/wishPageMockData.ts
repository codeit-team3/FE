import { BookClubParams } from '@/types/bookclubs';

export const filters: BookClubParams = {
  bookClubType: 'ALL',
  meetingType: 'ALL',
  order: 'DESC',
  page: 1,
  size: 10,
  searchKeyword: '',
};
