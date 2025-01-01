import apiClient from '@/lib/utils/apiClient';

export const bookClubLikeAPI = {
  //찜 취소
  unlike: async (id: number) => {
    apiClient.delete(`/book-clubs/${id}/likes`);
  },
  //찜하기
  like: async (id: number) => {
    apiClient.post(`/book-clubs/${id}/likes`).then((res) => res.data);
  },

  //찜 목록 조회
};
