import { useMutation, useQueryClient } from '@tanstack/react-query';
import { BookClubForm } from '@/features/club-create/types';
import { createBookClub } from '@/features/club-create/api';
import { bookClubs } from '@/api/book-club/react-query';

export function useBookClubCreateMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: BookClubForm) => createBookClub(data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: bookClubs.all().queryKey,
      });
      queryClient.invalidateQueries({
        queryKey: bookClubs.myCreated().queryKey,
      });
    },
  });
}
