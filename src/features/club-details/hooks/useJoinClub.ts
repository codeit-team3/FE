import { useJoinBookClub } from '@/api/book-club/react-query';
import { showToast } from '@/components/toast/toast';

export const useJoinClub = () => {
  const { mutate: joinClub } = useJoinBookClub();

  const handleJoin = (clubId: number) => {
    joinClub(clubId, {
      onSuccess: () => {
        showToast({
          message: '참여 완료! 함께하게 돼서 기뻐요🥰',
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
            message: '참여 요청 중 문제가 발생했습니다. 다시 시도해주세요.',
            type: 'error',
          });
        }
      },
    });
  };

  return { handleJoin };
};
