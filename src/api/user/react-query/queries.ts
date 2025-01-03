import apiClient from '@/lib/utils/apiClient';
import { createQueryKeys } from '@lukemorales/query-key-factory';

//타유저 프로필 정보 조회
//TODO: 에러 처리
export const users = createQueryKeys('users', {
  userInfo: (userId: number) => ({
    queryKey: [userId],
    queryFn: () => apiClient.get(`auths/user/${userId}`),
  }),
});
