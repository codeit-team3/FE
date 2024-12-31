import { bookClubs, useJoinBookClub } from '@/api/book-club/react-query';
import { useCancelClub } from '@/lib/hooks/useCancelClub';
import { useQuery } from '@tanstack/react-query';

export function useClubDetails(idAsNumber: number) {
  const { data, isLoading, error } = useQuery({
    ...bookClubs.detail(idAsNumber),
  });
  const { mutate: joinClub } = useJoinBookClub();
  const { popUpState, onCancel, onConfirmCancel, onClosePopUp } =
    useCancelClub();

  const clubInfo = data?.data;

  return {
    clubInfo,
    isLoading,
    error,
    joinClub,
    popUpState,
    onCancel,
    onConfirmCancel,
    onClosePopUp,
  };
}
