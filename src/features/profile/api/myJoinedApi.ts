import apiClient from '@/lib/utils/apiClient';
import { myClubParams } from '../types';

export const getMyJoined = async (params: myClubParams) => {
  const response = await apiClient.get('/book-clubs/my-joined', { params });
  return response.data;
};
