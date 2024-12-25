import { useMutation, useQueryClient } from '@tanstack/react-query';
import { BookClubForm } from '@/features/club-create/types';
import { createBookClub } from '@/features/club-create/api';
import { bookClubs } from './queries';
import { leaveBookClub } from '@/api/leaveBookClub';
import { toast } from 'react-toastify';

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
      toast.success('모임 참여가 취소되었습니다.');
    },
    onError: (error: any) => {
      toast.error('모임 취소를 실패하였습니다.');
      console.error(error);
    },
  });
}
