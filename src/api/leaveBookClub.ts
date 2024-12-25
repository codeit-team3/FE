import apiClient from '@/lib/utils/apiClient';

export const leaveBookClub = async (id: number) => {
  try {
    await apiClient.delete(`/book-clubs/${id}/leave`);
  } catch (err) {
    console.error(err);
  }
};
