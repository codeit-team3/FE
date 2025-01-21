import { users } from '@/api/user/react-query/queries';
import { useQuery } from '@tanstack/react-query';
import { usePathname } from 'next/navigation';

export function useGetUserByPath() {
  const pathname = usePathname();
  const userId = pathname?.split('/')[2];

  const isValidUserId: boolean = Boolean(userId && !isNaN(Number(userId)));

  const { data } = useQuery({
    ...users.userInfo(Number(userId)),
    enabled: isValidUserId,
  });

  return data?.data;
}
