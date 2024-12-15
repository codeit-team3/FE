import apiClient from '@/lib/utils/apiClient';

export const getBookClubList = async () => {
  const response = await apiClient.get('/book-clubs');
  return response.data.bookClubs;
};
