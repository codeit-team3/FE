import apiClient from '@/lib/utils/apiClient';
import { WriteReviewParams, DetailClubReviewParams } from './types';
import { MyProfileParams } from '@/types/bookclubs';

export const bookClubReviewAPI = {
  //리뷰 삭제하기

  //단일 북클럽 리뷰 목록 조회
  getReviews: async ({
    bookClubId,
    params = { order: 'DESC' },
  }: {
    bookClubId: number;
    params?: DetailClubReviewParams;
  }) => {
    return await apiClient.get(`book-clubs/${bookClubId}/reviews`, {
      params,
    });
  },

  //특정 유저의 리뷰 조회
  userReviews: async ({
    userId,
    params = { order: 'DESC' },
  }: {
    userId: number;
    params?: MyProfileParams;
  }) => {
    const response = await apiClient.get(
      `/book-clubs/users/${userId}/reviews`,
      {
        params,
      },
    );
    return response.data;
  },

  //내가 작성한 리뷰 조회
  myReviews: async (params?: MyProfileParams) => {
    const response = await apiClient.get('/book-clubs/my-reviews', {
      params,
    });
    return response.data;
  },

  //리뷰 작성하기
  write: async ({ bookClubId, rating, content }: WriteReviewParams) => {
    await apiClient.post(`book-clubs/${bookClubId}/reviews`, {
      rating,
      content,
    });
  },
};
