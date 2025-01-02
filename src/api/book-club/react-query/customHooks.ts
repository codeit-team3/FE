import { useMutation, useQueryClient } from '@tanstack/react-query';
import { BookClubForm } from '@/features/club-create/types';
import { createBookClub } from '@/features/club-create/api';
import { bookClubs } from './queries';
import { showToast } from '@/components/toast/toast';
import {
  bookClubMainAPI,
  bookClubMemberAPI,
  bookClubReviewAPI,
} from '../index';
import { WriteReviewParams } from '../types';
import { AxiosError } from 'axios';

export function useBookClubCreateMutation(userId: number) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: BookClubForm) => createBookClub(data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: bookClubs.all().queryKey,
      });
      queryClient.invalidateQueries({
        queryKey: bookClubs.myCreated(userId).queryKey,
      });
      queryClient.invalidateQueries({
        queryKey: bookClubs.myJoined(userId).queryKey,
      });
      queryClient.invalidateQueries({
        queryKey: bookClubs.userCreated(userId).queryKey,
      });
      queryClient.invalidateQueries({
        queryKey: bookClubs.userJoined(userId).queryKey,
      });
    },
  });
}

export function useJoinBookClub(userId: number) {
  const queryClient = useQueryClient();

  return useMutation<void, AxiosError<{ message: string }>, number>({
    mutationFn: (id: number) => bookClubMemberAPI.join(id),
    onSuccess: (_, id) => {
      queryClient.invalidateQueries({
        queryKey: bookClubs.detail(userId, id).queryKey,
      });
      queryClient.invalidateQueries({
        queryKey: bookClubs.myJoined(userId).queryKey,
      });
      queryClient.invalidateQueries({
        queryKey: bookClubs.userJoined(userId).queryKey,
      });
    },
  });
}

//북클럽 참여 취소하기
export function useLeaveBookClub(userId: number) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: number) => bookClubMemberAPI.leave(id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: bookClubs.myJoined(userId).queryKey,
      });
      queryClient.invalidateQueries({
        queryKey: bookClubs.userJoined(userId).queryKey,
      });
    },
  });
}

//리뷰 작성하기
export function useWriteReview(userId: number) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ bookClubId, rating, content }: WriteReviewParams) =>
      bookClubReviewAPI.write({ bookClubId, rating, content }),

    onSuccess: (data, variables) => {
      const { bookClubId } = variables;

      queryClient.invalidateQueries({
        queryKey: bookClubs.detail(userId, bookClubId).queryKey, // bookClubId에 해당하는 모임 상세 무효화
      });

      queryClient.invalidateQueries({
        queryKey: bookClubs.userReviewd(userId).queryKey,
      });

      queryClient.invalidateQueries({
        queryKey: bookClubs.myReviews(userId).queryKey,
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
export function useCancelBookClub(userId: number) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: number) => bookClubMainAPI.cancel(id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: bookClubs.myCreated(userId).queryKey,
      });
      queryClient.invalidateQueries({
        queryKey: bookClubs.myJoined(userId).queryKey,
      });
    },
  });
}
