import { createQueryKeys } from '@lukemorales/query-key-factory';
import apiClient from '@/lib/utils/apiClient';
import { BookClubParams, orderType } from '@/types/bookclubs';
import { ClubDetailReviewFilters } from '@/types/review';

export interface MyProfileParams {
  order?: orderType;
}

export const bookClubs = createQueryKeys('bookClubs', {
  all: null,

  list: (filters?: BookClubParams) => ({
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

  my: () => ({
    queryKey: ['my'],
    queryFn: () => ({}),
    contextQueries: {
      joined: (filters?: MyProfileParams) => ({
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
      created: (filters?: MyProfileParams) => ({
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
      reviews: (filters?: MyProfileParams) => ({
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
    },
  }),

  user: (userId: number) => ({
    queryKey: [userId],
    queryFn: () => ({}),
    contextQueries: {
      joined: (filters?: MyProfileParams) => ({
        queryKey: [{ filters: filters || {} }],
        queryFn: (ctx) =>
          apiClient.get(`/book-clubs/user/${userId}/joined`, {
            params: {
              ...filters,
              page: ctx.pageParam ?? 1,
              size: 10,
            },
          }),
      }),
      created: (filters?: MyProfileParams) => ({
        queryKey: [{ filters: filters || {} }],
        queryFn: (ctx) =>
          apiClient.get(`/book-clubs/user/${userId}/created`, {
            params: {
              ...filters,
              page: ctx.pageParam ?? 1,
              size: 10,
            },
          }),
      }),
      reviews: (filters?: MyProfileParams) => ({
        queryKey: [{ filters: filters || {} }],
        queryFn: (ctx) =>
          apiClient.get(`/book-clubs/users/${userId}/reviews`, {
            params: {
              ...filters,
              page: ctx.pageParam ?? 1,
              size: 10,
            },
          }),
      }),
    },
  }),
});
