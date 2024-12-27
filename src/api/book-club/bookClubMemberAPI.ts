import apiClient from '@/lib/utils/apiClient';

export const bookClubMemberAPI = {
  //북클럽 참여하기

  //북클럽 참여 취소하기
  leave: async (id: number) => {
    await apiClient.delete(`/book-clubs/${id}/leave`);
  },
};
