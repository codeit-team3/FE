import { createQueryKeys } from '@lukemorales/query-key-factory';
import apiClient from '@/lib/utils/apiClient';
import { orderType } from '@/features/profile/types';

// TODO: 추후 각자 구현하는 api 명세에 맞게 filter 타입 정의해주세요
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

interface MyProfileFilters {
  order?: orderType;
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
    },
  }),
  myJoined: (filters?: MyProfileFilters) => ({
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
  myCreated: (filters?: MyProfileFilters) => ({
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
  myReviews: (filters?: MyProfileFilters) => ({
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
