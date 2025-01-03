import { createQueryKeys } from '@lukemorales/query-key-factory';
import apiClient from '@/lib/utils/apiClient';
import { BookClubParams, MyProfileParams } from '@/types/bookclubs';
import { ClubDetailReviewFilters } from '@/types/review';
import { bookClubReviewAPI } from '@/api/book-club/bookClubReviewAPI';
import { bookClubMainAPI } from '@/api/book-club/bookClubMainAPI';

export const bookClubs = createQueryKeys('bookClubs', {
  list: (filters?: BookClubParams) => ({
    queryKey: [{ filters }],
    queryFn: () => bookClubMainAPI.getBookClubs(filters),
  }),

  detail: (bookClubId: number) => ({
    queryKey: [bookClubId],
    queryFn: () => apiClient.get(`/book-clubs/${bookClubId}`),
    contextQueries: {
      reviews: (filters?: ClubDetailReviewFilters) => ({
        queryKey: [{ filters }],
        queryFn: () =>
          bookClubReviewAPI.getReviews({
            bookClubId,
            params: filters,
          }),
      }),
    },
  }),

  my: () => ({
    queryKey: [{}],
    queryFn: () => ({}),
    contextQueries: {
      joined: (filters?: MyProfileParams) => ({
        queryKey: [{ filters }],
        queryFn: () => bookClubMainAPI.myJoined(filters),
      }),
      created: (filters?: MyProfileParams) => ({
        queryKey: [{ filters }],
        queryFn: () => bookClubMainAPI.myCreated(filters),
      }),
      reviews: (filters?: MyProfileParams) => ({
        queryKey: [{ filters }],
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
        queryKey: [{ filters }],
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
