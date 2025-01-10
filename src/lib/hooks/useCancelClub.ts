import { useCancelBookClub } from '@/api/book-club/react-query';
import { showToast } from '@/components/toast/toast';
import { TOAST_MESSAGES } from '@/constants/messages/toast';
import { useState } from 'react';

export function useCancelClub() {
  const { mutateAsync: cancelClub } = useCancelBookClub();

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
            message: TOAST_MESSAGES.SUCCESS.CLUB_CANCEL,
            type: 'success',
          });
        }
      }
    } catch (error) {
      showToast({
        message: TOAST_MESSAGES.ERROR.CLUB_CANCEL_FAILED,
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
