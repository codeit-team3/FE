import { bookClubs } from '@/api/book-club/react-query';
import { useQuery } from '@tanstack/react-query';

export function useClubDetails(idAsNumber: number) {
  const { data, isLoading, error } = useQuery(bookClubs.detail(idAsNumber));

  const clubInfo = data;

  return {
    clubInfo,
    isLoading,
    error,
  };
}
