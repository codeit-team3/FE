import apiClient from '@/lib/utils/apiClient';
import { BookClubParams } from '../../../types/bookclubs';

export const getBookClubs = async (params?: BookClubParams) => {
  const response = await apiClient.get('/book-clubs', { params });
  return response.data.bookClubs;
};
