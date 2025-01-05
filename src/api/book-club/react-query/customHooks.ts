import { useMutation, useQueryClient } from '@tanstack/react-query';
import { bookClubs } from './queries';
import { showToast } from '@/components/toast/toast';
import {
  bookClubLikeAPI,
  bookClubMainAPI,
  bookClubMemberAPI,
  bookClubReviewAPI,
} from '../index';
import { WriteReviewParams } from '../types';
import { AxiosError } from 'axios';
import { BookClub, BookClubParams } from '@/types/bookclubs';

export function useBookClubCreateMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (formData: FormData) => bookClubMainAPI.create(formData),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: bookClubs.list().queryKey,
      });
      queryClient.invalidateQueries({
        queryKey: bookClubs.my().queryKey,
      });
    },
    onError: () => {
      showToast({ message: '북클럽 생성에 실패했습니다.', type: 'error' });
    },
  });
}

export function useJoinBookClub() {
  const queryClient = useQueryClient();

  return useMutation<void, AxiosError<{ message: string }>, number>({
    mutationFn: (id: number) => bookClubMemberAPI.join(id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: bookClubs._def,
      });
    },
  });
}

//북클럽 참여 취소하기
export function useLeaveBookClub() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: number) => bookClubMemberAPI.leave(id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: bookClubs._def,
      });
    },
  });
}

//리뷰 작성하기
export function useWriteReview() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ bookClubId, rating, content }: WriteReviewParams) =>
      bookClubReviewAPI.write({ bookClubId, rating, content }),

    onSuccess: (data, variables) => {
      const { bookClubId } = variables;

      queryClient.invalidateQueries({
        queryKey: bookClubs.detail(bookClubId).queryKey, // bookClubId에 해당하는 모임 상세 무효화
      });

      queryClient.invalidateQueries({
        queryKey: bookClubs.my()._ctx.reviews().queryKey,
      });
      showToast({ message: '리뷰 작성을 완료하였습니다', type: 'success' });
    },
    onError: (error) => {
      console.error(error);

      showToast({ message: '리뷰 작성을 실패하였습니다.', type: 'error' });
    },
  });
}

//북클럽 취소하기
export function useCancelBookClub() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: number) => bookClubMainAPI.cancel(id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: bookClubs.my()._ctx.created().queryKey,
      });
      queryClient.invalidateQueries({
        queryKey: bookClubs.my()._ctx.joined().queryKey,
      });
    },
  });
}

export function useLikeBookClub() {
  const queryClient = useQueryClient();

  return useMutation<
    void,
    AxiosError<{ message: string }>,
    number,
    { previousBookClubs?: any }
  >({
    mutationFn: (id: number) => bookClubLikeAPI.like(id),

    onMutate: async (id) => {
      const filters: BookClubParams = {
        bookClubType: 'ALL',
        meetingType: 'ALL',
        order: 'DESC',
        page: 1,
        size: 10,
        searchKeyword: '',
      };

      const queryKey = bookClubs.list(filters).queryKey;

      // console.log('onMutate 쿼리 키:', queryKey);

      // 기존 캐시 데이터 확인
      const previousBookClubs = queryClient.getQueryData<{
        bookClubs: BookClub[];
      }>(queryKey);

      // console.log('onMutate 이전 캐시 데이터:', previousBookClubs);

      if (previousBookClubs) {
        queryClient.setQueryData(queryKey, {
          ...previousBookClubs,
          bookClubs: previousBookClubs.bookClubs.map((club: any) =>
            club.id === id ? { ...club, isLiked: true } : club,
          ),
        });
      }

      return { previousBookClubs };
    },

    onError: (_error, _id, context) => {
      // 요청 실패 시 이전 상태 복구
      if (context?.previousBookClubs) {
        queryClient.setQueryData(
          bookClubs.list().queryKey,
          context.previousBookClubs,
        );
      }
    },
  });
}

export function useUnLikeBookClub() {
  const queryClient = useQueryClient();

  return useMutation<void, AxiosError<{ message: string }>, number>({
    mutationFn: (id: number) => bookClubLikeAPI.unlike(id),
    onSuccess: (_, id) => {
      queryClient.invalidateQueries({
        queryKey: bookClubs.list().queryKey,
      });
      queryClient.invalidateQueries({
        queryKey: bookClubs.detail(id).queryKey,
      });
    },
  });
}
