import apiClient from '@/lib/utils/apiClient';
import { BookClubParams, MyProfileParams } from '@/types/bookclubs';

export const bookClubMainAPI = {
  //북클럽 삭제
  cancel: async (id: number) => {
    const res = await apiClient.delete(`book-clubs/${id}`);
    return res;
  },

  //북클럽 목록 조회
  getBookClubs: async (params?: BookClubParams) => {
    const response = await apiClient.get('/book-clubs', { params });
    return response.data;
  },

  //단일 북클럽 조회
  getBookClubDetail: async (bookClubId: number) => {
    const response = await apiClient.get(`/book-clubs/${bookClubId}`);
    return response.data;
  },

  //유저가 참가한 북클럽 조회
  userJoined: async (userId: number, params?: MyProfileParams) => {
    const response = await apiClient.get(`/book-clubs/users/${userId}/joined`, {
      params,
    });
    return response.data;
  },

  //유저가 만든 북클럽 조회
  userCreated: async (userId: number, params?: MyProfileParams) => {
    const response = await apiClient.get(
      `/book-clubs/users/${userId}/created`,
      {
        params,
      },
    );
    return response.data;
  },

  //내가 참여한 북클럽 조회
  myJoined: async (params?: MyProfileParams) => {
    const response = await apiClient.get('/book-clubs/my-joined', { params });
    return response.data;
  },

  //내가 만든 북클럽 조회
  myCreated: async (params?: MyProfileParams) => {
    const response = await apiClient.get('/book-clubs/my-created', { params });
    return response.data;
  },

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
