import { useLikeBookClub } from '@/api/book-club/react-query';
import { showToast } from '@/components/toast/toast';

export const useLikeClub = () => {
  const { mutate: likeClub } = useLikeBookClub();

  const onConfirmLike = (selectedClubId: number) => {
    likeClub(selectedClubId, {
      onSuccess: () => {
        showToast({
          message: '찜 완료! 찜한 모임은 찜 목록 페이지에서 확인하세요',
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

  return onConfirmLike;
};
