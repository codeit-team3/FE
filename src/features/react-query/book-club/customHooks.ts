import { useMutation, useQueryClient } from '@tanstack/react-query';
import { BookClubForm } from '@/features/club-create/types';
import { createBookClub } from '@/features/club-create/api';
import { bookClubs } from './queries';
import { leaveBookClub } from '@/api/leaveBookClub';
import { writeReview } from '@/features/profile/api/writeReviewApi';
import { toast } from 'react-toastify';

interface WriteReviewParams {
  bookClubId: number;
  rating: number;
  content: string;
}

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

export function useLeaveBookClub() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: number) => leaveBookClub(id),
    onSuccess: () => {
      // 성공 후 데이터를 새로고침
      queryClient.invalidateQueries({
        queryKey: bookClubs.myJoined().queryKey,
      });
    },
    onError: (error: any) => {
      console.error(error);
    },
  });
}

export function useWriteReview() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ bookClubId, rating, content }: WriteReviewParams) =>
      writeReview({ bookClubId, rating, content }),

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

      toast.success('리뷰 작성을 완료하였습니다');
    },
    onError: (error) => {
      console.error(error);
      toast.error('리뷰 작성을 실패하였습니다');
    },
  });
}
