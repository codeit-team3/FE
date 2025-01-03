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
        queryFn: () => bookClubReviewAPI.myReviews(filters),
      }),
    },
  }),

  user: (userId: number) => ({
    queryKey: [userId],
    queryFn: () => ({}),
    contextQueries: {
      joined: (filters?: MyProfileParams) => ({
        queryKey: [{ filters }],
        queryFn: () => bookClubMainAPI.userJoined(userId, filters),
      }),
      created: (filters?: MyProfileParams) => ({
        queryKey: [{ filters }],
        queryFn: () => bookClubMainAPI.userCreated(userId, filters),
      }),
      reviews: (filters?: MyProfileParams) => ({
        queryKey: [{ filters }],
        queryFn: () =>
          bookClubReviewAPI.userReviews({ userId, params: filters }),
      }),
    },
  }),
});
