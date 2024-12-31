import { useCancelBookClub } from '@/api/book-club/react-query';
import { showToast } from '@/components/toast/toast';
import { useState } from 'react';
import { useAuthStore } from '@/store/authStore';

export function useCancelClub() {
  const { user } = useAuthStore();
  const userId = user?.id ?? 0;

  const { mutateAsync: cancelClub } = useCancelBookClub(userId);

  const [popUpState, setPopUpState] = useState({
    isOpen: false,
    label: '',
    selectedClubId: null as number | null,
  });

  const onCancel = (clubId: number) => {
    setPopUpState({
      isOpen: true,
      label: '정말 모임을 취소하시겠어요?',
      selectedClubId: clubId,
    });
  };

  const onClosePopUp = () => {
    setPopUpState({ isOpen: false, label: '', selectedClubId: null });
  };

  const onConfirmCancel = async () => {
    try {
      if (popUpState.selectedClubId) {
        const res = await cancelClub(popUpState.selectedClubId);
        if (res) {
          showToast({
            message: '모임을 취소하였습니다.',
            type: 'success',
          });
        }
      }
    } catch (error) {
      showToast({
        message: '모임 취소를 실패하였습니다.',
        type: 'error',
      });
      console.error(error);
    } finally {
      onClosePopUp();
    }
  };

  return {
    popUpState,
    onCancel,
    onConfirmCancel,
    onClosePopUp,
  };
}
