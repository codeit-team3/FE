import { createQueryKeys } from '@lukemorales/query-key-factory';
import apiClient from '@/lib/utils/apiClient';
import { BookClubParams, orderType } from '@/types/bookclubs';
import { ClubDetailReviewFilters } from '@/types/review';

export interface MyProfileParams {
  order?: orderType;
}

export const bookClubs = createQueryKeys('bookClubs', {
  // 전체 북클럽 쿼리의 base
  all: null,

  // 북클럽 목록 조회
  list: (filters?: BookClubParams) => ({
    queryKey: ['list', { filters: filters || {} }],
    queryFn: (ctx) =>
      apiClient.get('/book-clubs', {
        params: {
          ...filters,
          page: ctx.pageParam ?? 1,
          size: 10,
        },
      }),
  }),

  // 북클럽 상세 조회
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

  myJoined: (filters?: MyProfileParams) => ({
    queryKey: ['my', { filters: filters || {} }],
    queryFn: (ctx) =>
      apiClient.get('/book-clubs/my-joined', {
        params: {
          ...filters,
          page: ctx.pageParam ?? 1,
          size: 10,
        },
      }),
  }),

  myCreated: (filters?: MyProfileParams) => ({
    queryKey: ['my', { filters: filters || {} }],
    queryFn: (ctx) =>
      apiClient.get('/book-clubs/my-created', {
        params: {
          ...filters,
          page: ctx.pageParam ?? 1,
          size: 10,
        },
      }),
  }),

  myReviews: (filters?: MyProfileParams) => ({
    queryKey: ['my', { filters: filters || {} }],
    queryFn: (ctx) =>
      apiClient.get('/book-clubs/my-reviews', {
        params: {
          ...filters,
          page: ctx.pageParam ?? 1,
          size: 10,
        },
      }),
  }),

  // 특정 유저의 북클럽 관련
  userJoined: (userId: number, filters?: MyProfileParams) => ({
    queryKey: ['user', userId, { filters: filters || {} }],
    queryFn: (ctx) =>
      apiClient.get(`/book-clubs/user/${userId}/joined`, {
        params: {
          ...filters,
          page: ctx.pageParam ?? 1,
          size: 10,
        },
      }),
  }),

  userCreated: (userId: number, filters?: MyProfileParams) => ({
    queryKey: ['user', userId, { filters: filters || {} }],
    queryFn: (ctx) =>
      apiClient.get(`/book-clubs/user/${userId}/created`, {
        params: {
          ...filters,
          page: ctx.pageParam ?? 1,
          size: 10,
        },
      }),
  }),

  userReviews: (userId: number, filters?: MyProfileParams) => ({
    queryKey: ['user', userId, { filters: filters || {} }],
    queryFn: (ctx) =>
      apiClient.get(`/book-clubs/users/${userId}/reviews`, {
        params: {
          ...filters,
          page: ctx.pageParam ?? 1,
          size: 10,
        },
      }),
  }),
});
