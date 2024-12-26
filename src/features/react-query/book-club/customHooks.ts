import { useMutation, useQueryClient } from '@tanstack/react-query';
import { BookClubForm } from '@/features/club-create/types';
import { createBookClub } from '@/features/club-create/api';
import { bookClubs } from './queries';
// import { editProfile } from '@/features/profile/api/editProfileApi';
// import { editProfileParams } from '@/features/profile/types/profile';

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

// export function useEditProfile() {
//   const queryClient = useQueryClient();

//   return useMutation({
//     mutationFn: (data: editProfileParams) => editProfile(data),
//     onSuccess: () => {},
//   });
// }
