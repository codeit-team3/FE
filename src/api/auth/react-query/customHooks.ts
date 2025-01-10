import { useMutation } from '@tanstack/react-query';
import { showToast } from '@/components/toast/toast';
import { TOAST_MESSAGES } from '@/constants/messages/toast';
import { authClientAPI } from '../authClientAPI';
import { getUserInfo } from '@/features/auth/api/auth';

//프로필 수정하기
export function useEditInfoMutation() {
  return useMutation({
    mutationFn: (formData: FormData) => authClientAPI.editInfo(formData),
    onSuccess: () => {
      getUserInfo();
      showToast({
        message: TOAST_MESSAGES.SUCCESS.PROFILE_EDIT,
        type: 'success',
      });
    },
    onError: (error) => {
      showToast({
        message: TOAST_MESSAGES.ERROR.PROFILE_EDIT_FAILED,
        type: 'error',
      });
      console.error(error);
    },
  });
}
