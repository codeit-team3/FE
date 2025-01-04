import apiClient from '@/lib/utils/apiClient';

export const authClientAPI = {
  //회원정보 확인

  //회원정보 수정
  editInfo: async (formData: FormData) => {
    const response = await apiClient.post('auths/user', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  },

  //회원가입

  //액세스 토큰 재발급
};
