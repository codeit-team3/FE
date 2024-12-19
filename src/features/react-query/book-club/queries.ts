import { createQueryKeys } from '@lukemorales/query-key-factory';
import apiClient from '@/lib/utils/apiClient';

interface BookClubFilters {
  category?: string;
  status?: string;
  search?: string;
  sort?: 'latest' | 'popular';
}

interface ReviewFilters {
  rating?: number;
  hasComment?: boolean;
  sort?: 'latest' | 'rating';
}

export const bookClubs = createQueryKeys('bookClubs', {
  all: (filters?: BookClubFilters) => ({
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
  detail: (bookClubId: string) => ({
    queryKey: [bookClubId],
    queryFn: () => apiClient.get(`/book-clubs/${bookClubId}`),
    contextQueries: {
      reviews: (filters?: ReviewFilters) => ({
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
      likes: {
        queryKey: ['likes'],
        queryFn: () => apiClient.get(`/book-clubs/${bookClubId}/likes`),
      },
    },
  }),
  myJoined: (filters?: BookClubFilters) => ({
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
  myCreated: (filters?: BookClubFilters) => ({
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
  myReviews: (filters?: ReviewFilters) => ({
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
