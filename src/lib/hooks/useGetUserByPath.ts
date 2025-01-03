import { users } from '@/api/user/react-query/queries';
import { useQuery } from '@tanstack/react-query';
import { usePathname } from 'next/navigation';

export function useGetUserByPath() {
  const pathname = usePathname();
  const userId = Number(pathname?.split('/')[2]);

  const { queryKey, queryFn } = users.userInfo(userId);
  const { data } = useQuery({
    queryKey,
    queryFn,
  });

  const user = data?.data;

  return user;
}
