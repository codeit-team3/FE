import { usePathname } from 'next/navigation';

export function useUserIdFromPath() {
  const pathname = usePathname();
  const userId = Number(pathname?.split('/')[2]);

  return userId;
}
