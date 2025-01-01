import { useJoinBookClub } from '@/api/book-club/react-query';
import { AxiosError } from 'axios';

export const useJoinClub = () => {
  const { mutate: joinClub } = useJoinBookClub();

  const handleJoin = (
    clubId: number,
    onSuccess: () => void,
    onError: (error: AxiosError<{ message: string }>) => void,
  ) => {
    joinClub(clubId, {
      onSuccess,
      onError,
    });
  };

  return {
    handleJoin,
  };
};
