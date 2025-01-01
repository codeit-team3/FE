import { useUnLikeBookClub } from '@/api/book-club/react-query';
import { showToast } from '@/components/toast/toast';

export const useUnLikeClub = () => {
  const { mutate: unLikeClub } = useUnLikeBookClub();

  const onConfirmUnLike = (selectedClubId: number) => {
    unLikeClub(selectedClubId, {
      onSuccess: () => {
        showToast({
          message: '찜이 취소되었습니다다',
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
                : '알 수 없는 오류가 발생했습니다. 다시 시도해주세요.',
            type: 'error',
          });
        }
      },
    });
  };

  return { onConfirmUnLike };
};
