import apiClient from '@/lib/utils/apiClient';
import { EditProfileParams } from '@/types/profile';

export const authClientAPI = {
  //회원정보 확인

  //회원정보 수정
  editProfile: async ({ nickname, image, description }: EditProfileParams) => {
    try {
      await apiClient.post('auths/user', {
        nickname,
        image,
        description,
      });
    } catch (err) {
      console.error(err);
      throw err;
    }
  },

  //회원가입
  //액세스 토큰 재발급
};
