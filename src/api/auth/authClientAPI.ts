import { EditInfoParams } from '@/features/profile/types';
import apiClient from '@/lib/utils/apiClient';

export const authClientAPI = {
  //회원정보 확인

  //회원정보 수정
  editInfo: async ({ nickname, image, description }: EditInfoParams) => {
    await apiClient.post('auths/user', {
      nickname,
      image,
      description,
    });
  },

  //회원가입

  //액세스 토큰 재발급
};
