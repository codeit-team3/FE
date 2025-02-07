import { useUnLikeBookClub } from '@/api/book-club/react-query';
import { showToast } from '@/components/toast/toast';
import { TOAST_MESSAGES } from '@/constants/messages/toast';
import { BookClubParams } from '@/types/bookclubs';
import { DEFAULT_FILTERS } from '../constants/filters';

export const useUnLikeClub = (filter?: BookClubParams) => {
  const { mutate: unLikeClub } = useUnLikeBookClub(filter || DEFAULT_FILTERS);

  const onConfirmUnLike = (selectedClubId: number) => {
    unLikeClub(selectedClubId, {
      onSuccess: () => {
        showToast({
          message: TOAST_MESSAGES.SUCCESS.CLUB_UNLIKE,
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
            message:
              error instanceof Error
                ? error.message
                : TOAST_MESSAGES.ERROR.UNKNOWN,
            type: 'error',
          });
        }
      },
    });
  };

  return { onConfirmUnLike };
};
