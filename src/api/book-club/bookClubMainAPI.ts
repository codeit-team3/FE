import apiClient from '@/lib/utils/apiClient';

export const bookClubMainAPI = {
  //북클럽 삭제

  //북클럽 목록 조회

  //단일 북클럽 조회

  //북클럽 생성

  //내가 참여한 북클럽 조회

  //내가 만든 북클럽 조회

  //북클럽 생성
  leave: async (id: number) => {
    await apiClient.delete(`/book-clubs/${id}/leave`);
  },
};
