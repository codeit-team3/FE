import { useJoinBookClub } from '@/api/book-club/react-query';
import { showToast } from '@/components/toast/toast';
import { TOAST_MESSAGES } from '@/constants/messages/toast';

export const useJoinClub = () => {
  const { mutate: joinClub } = useJoinBookClub();

  const handleJoin = (clubId: number) => {
    joinClub(clubId, {
      onSuccess: () => {
        showToast({
          message: TOAST_MESSAGES.SUCCESS.CLUB_JOIN,
          type: 'success',
        });
      },
      onError: (error) => {
        if (error.response?.data?.message) {
          showToast({
            message: error.response.data.message,
            type: 'error',
          });
        } else {
          showToast({
            message: TOAST_MESSAGES.ERROR.CLUB_JOIN_FAILED,
            type: 'error',
          });
        }
      },
    });
  };

  return { handleJoin };
};
