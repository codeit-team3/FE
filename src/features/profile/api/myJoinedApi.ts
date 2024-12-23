import apiClient from '@/lib/utils/apiClient';
import { myJoinedParams } from '../types';

export const getMyJoined = async (params: myJoinedParams) => {
  const response = await apiClient.get('/book-clubs/my-joined', { params });
  return response.data;
};
