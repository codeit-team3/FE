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
import { likeOnError, likeOnMutate } from './likeOptimisticUpdate';

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
        queryKey: bookClubs.list().queryKey,
      });
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

  return useMutation<void, AxiosError<{ message: string }>, number>({
    mutationFn: (id: number) => bookClubLikeAPI.like(id),

    onMutate: async (id) => {
      return likeOnMutate(queryClient, id, true);
    },
    //TODO: 로직 확인 후 변경 필요
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: bookClubs._def,
      });
    },

    onError: (_error, id, context) => {
      if (context) {
        likeOnError(queryClient, id, context);
      }
    },
  });
}

export function useUnLikeBookClub() {
  const queryClient = useQueryClient();

  return useMutation<void, AxiosError<{ message: string }>, number>({
    mutationFn: (id: number) => bookClubLikeAPI.unlike(id),

    onMutate: async (id) => {
      return likeOnMutate(queryClient, id, false);
    },
    //TODO: 로직 확인 후 변경 필요
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: bookClubs._def,
      });
    },

    onError: (_error, id, context) => {
      if (context) {
        likeOnError(queryClient, id, context);
      }
    },
  });
}
