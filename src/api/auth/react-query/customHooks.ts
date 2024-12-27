import { useMutation } from '@tanstack/react-query';
import { showToast } from '@/components/toast/toast';
import { authClientAPI } from '../authClientAPI';
import { getUserInfo } from '@/features/auth/api/auth';
import { EditProfileParams } from '@/types/profile';

//프로필 수정하기
export function useEditProfile() {
  return useMutation({
    mutationFn: (data: EditProfileParams) => authClientAPI.editProfile(data),
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
