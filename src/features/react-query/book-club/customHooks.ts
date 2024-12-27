import { useMutation, useQueryClient } from '@tanstack/react-query';
import { BookClubForm } from '@/features/club-create/types';
import { createBookClub } from '@/features/club-create/api';
import { editProfile } from '@/features/profile/api/editProfileApi';
import { showToast } from '@/components/toast/toast';
import { ProfileEditData } from '@/features/profile/types';
import { getUserInfo } from '@/features/auth/api/auth';
import { bookClubs } from '@/api/book-club/react-query';

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

export function useEditProfile() {
  return useMutation({
    mutationFn: (data: ProfileEditData) => editProfile(data),
    onSuccess: () => {
      getUserInfo();
      showToast({ message: '프로필 수정이 완료되었습니다.', type: 'success' });
    },
    onError: (error: any) => {
      showToast({ message: '프로필 수정을 실패하였습니다', type: 'error' });
      console.error(error);
    },
  });
}
