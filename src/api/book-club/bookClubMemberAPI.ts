import apiClient from '@/lib/utils/apiClient';

export const bookClubMemberAPI = {
  //북클럽 참여하기
  join: async (id: number) => {
    await apiClient.post(`/book-clubs/${id}/join`);
  },
  //북클럽 참여 취소하기
  leave: async (id: number) => {
    const res = await apiClient.delete(`/book-clubs/${id}/leave`);
    return res;
  },
};
