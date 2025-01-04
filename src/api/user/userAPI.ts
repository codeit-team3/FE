import apiClient from '@/lib/utils/apiClient';

export const userAPI = {
  getInfo: async (userId: number) => {
    const response = await apiClient.get(`auths/user/${userId}`);
    return response.data;
  },
};
