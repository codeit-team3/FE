import apiClient from '@/lib/utils/apiClient';
import { createQueryKeys } from '@lukemorales/query-key-factory';

//auth queries
export const auths = createQueryKeys('auths', {
  userInfo: (userId: number) => ({
    queryKey: [userId],
    queryFn: () => apiClient.get(`auths/user/${userId}`),
  }),
});
