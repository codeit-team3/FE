import { createQueryKeys } from '@lukemorales/query-key-factory';
import apiClient from '@/lib/utils/apiClient';
import { BookClubParams, MyProfileParams } from '@/types/bookclubs';

import { ClubDetailReviewFilters } from '@/types/review';
// TODO: 추후 각자 구현하는 api 명세에 맞게 filter 타입 정의해주세요

export const bookClubs = createQueryKeys('bookClubs', {
  all: (filters?: BookClubParams) => ({
    queryKey: [{ filters: filters || {} }],
    queryFn: (ctx) =>
      apiClient.get('/book-clubs', {
        params: {
          ...filters,
          page: ctx.pageParam ?? 1,
          size: 10,
        },
      }),
  }),

  detail: (bookClubId: number) => ({
    queryKey: [bookClubId],
    queryFn: () => apiClient.get(`/book-clubs/${bookClubId}`),
    contextQueries: {
      reviews: (filters?: ClubDetailReviewFilters) => ({
        queryKey: [{ filters: filters || {} }],
        queryFn: (ctx) =>
          apiClient.get(`/book-clubs/${bookClubId}/reviews`, {
            params: {
              ...filters,
              page: ctx.pageParam ?? 1,
              size: 10,
            },
          }),
      }),
    },
  }),

  //유저가 참여한 북클럽 조회
  userJoined: (userId: number, filters?: MyProfileParams) => ({
    queryKey: [userId, { filter: filters || {} }],
    queryFn: (ctx) =>
      apiClient.get(`/book-clubs/user/${userId}/joined`, {
        params: {
          ...filters,
          page: ctx.pageParam ?? 1,
          size: 10,
        },
      }),
  }),

  //유저가 만든 북클럽 조회
  userCreated: (userId: number, filters?: MyProfileParams) => ({
    queryKey: [userId, { filter: filters || {} }],
    queryFn: (ctx) =>
      apiClient.get(`/book-clubs/user/${userId}/created`, {
        params: {
          ...filters,
          page: ctx.pageParam ?? 1,
          size: 10,
        },
      }),
  }),

  //유저가 작성한 리뷰 조회
  userReviewd: (userId: number, filters?: MyProfileParams) => ({
    queryKey: [userId, { filter: filters || {} }],
    queryFn: (ctx) =>
      apiClient.get(`/book-clubs/users/${userId}/reviews`, {
        params: {
          ...filters,
          page: ctx.pageParam ?? 1,
          size: 10,
        },
      }),
  }),

  //내가 참여한 북클럽 조회
  myJoined: (filters?: MyProfileParams) => ({
    queryKey: [{ filters: filters || {} }],
    queryFn: (ctx) =>
      apiClient.get('/book-clubs/my-joined', {
        params: {
          ...filters,
          page: ctx.pageParam ?? 1,
          size: 10,
        },
      }),
  }),

  //내가 만든 북클럽 조회
  myCreated: (filters?: MyProfileParams) => ({
    queryKey: [{ filters: filters || {} }],
    queryFn: (ctx) =>
      apiClient.get('/book-clubs/my-created', {
        params: {
          ...filters,
          page: ctx.pageParam ?? 1,
          size: 10,
        },
      }),
  }),

  //내가 작성한 리뷰 조회
  myReviews: (filters?: MyProfileParams) => ({
    queryKey: [{ filters: filters || {} }],
    queryFn: (ctx) =>
      apiClient.get('/book-clubs/my-reviews', {
        params: {
          ...filters,
          page: ctx.pageParam ?? 1,
          size: 10,
        },
      }),
  }),
});
