import { useMutation, useQueryClient } from '@tanstack/react-query';
import { showToast } from '@/components/toast/toast';
import { authClientAPI } from '../authClientAPI';
import { getUserInfo } from '@/features/auth/api/auth';
import { EditInfoParams } from '@/features/profile/types';
import { users } from '@/api/user/react-query/queries';

//프로필 수정하기
export function useEditInfo(userId: number) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: EditInfoParams) => authClientAPI.editInfo(data),
    onSuccess: () => {
      getUserInfo();
      queryClient.invalidateQueries({
        queryKey: users.userInfo(userId).queryKey,
      });
      showToast({ message: '프로필 수정이 완료되었습니다.', type: 'success' });
    },
    onError: (error) => {
      showToast({ message: '프로필 수정을 실패하였습니다', type: 'error' });
      console.error(error);
    },
  });
}
