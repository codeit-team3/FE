import apiClient from '@/lib/utils/apiClient';
import { BookClubParams } from '@/types/bookclubs';

export const bookClubMainAPI = {
  //북클럽 삭제
  cancel: async (id: number) => {
    const res = await apiClient.delete(`book-clubs/${id}`);
    return res;
  },

  //북클럽 목록 조회
  getBookClubs: async (params?: BookClubParams) => {
    await apiClient.get('/book-clubs', { params });
  },

  //단일 북클럽 조회

  //내가 참여한 북클럽 조회

  //내가 만든 북클럽 조회

  //북클럽 생성
  create: async (formData: FormData) => {
    const response = await apiClient.post('/book-clubs', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  },
};
