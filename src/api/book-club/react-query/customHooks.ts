import { useMutation, useQueryClient } from '@tanstack/react-query';
import { BookClubForm } from '@/features/club-create/types';
import { createBookClub } from '@/features/club-create/api';
import { bookClubs } from './queries';
import { showToast } from '@/components/toast/toast';
import { bookClubMemberAPI, bookClubReviewAPI } from '../index';
import { WriteReviewParams } from '../types';

export function useBookClubCreateMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: BookClubForm) => createBookClub(data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: bookClubs.all().queryKey,
      });
      queryClient.invalidateQueries({
        queryKey: bookClubs.myCreated().queryKey,
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
        queryKey: bookClubs.myJoined().queryKey,
      });
      showToast({ message: '모임 참여가 취소되었습니다.', type: 'success' });
    },
    onError: (error) => {
      showToast({
        message: '모임 참여 취소에 실패하였습니다',
        type: 'error',
      });
      console.error(error);
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

      //TODO: reviews 하위 쿼리 무효화
      // queryClient.invalidateQueries({
      //   queryKey: bookClubs.detail(bookClubId).contextQueries.reviews().queryKey, // reviews 무효화
      // });

      queryClient.invalidateQueries({
        queryKey: bookClubs.myReviews().queryKey,
      });
      showToast({ message: '리뷰 작성을 완료하였습니다', type: 'success' });
    },
    onError: (error) => {
      console.error(error);

      showToast({ message: '리뷰 작성을 실패하였습니다.', type: 'error' });
    },
  });
}
