import { useLeaveBookClub } from '@/api/book-club/react-query';
import { showToast } from '@/components/toast/toast';
import { TOAST_MESSAGES } from '@/constants/messages/toast';
import { useState } from 'react';

export const useLeaveClub = () => {
  const { mutateAsync: leaveClub } = useLeaveBookClub();
  const [popUpState, setPopUpState] = useState({
    isOpen: false,
    label: '',
    selectedClubId: null as number | null,
  });

  const onCancelParticipation = (clubId: number) => {
    setPopUpState({
      isOpen: true,
      label: '정말 모임 참여를 취소하시겠어요?',
      selectedClubId: clubId,
    });
  };

  const onCloseLeavePopUp = () => {
    setPopUpState({ isOpen: false, label: '', selectedClubId: null });
  };

  const onConfirmLeave = async () => {
    try {
      if (popUpState.selectedClubId) {
        await leaveClub(popUpState.selectedClubId);
        showToast({
          message: TOAST_MESSAGES.SUCCESS.CLUB_LEAVE,
          type: 'success',
        });
      }
    } catch (error) {
      if (error instanceof Error) {
        showToast({ message: error.message, type: 'error' });
      } else {
        showToast({
          message: TOAST_MESSAGES.ERROR.UNKNOWN,
          type: 'error',
        });
      }
    } finally {
      onCloseLeavePopUp();
    }
  };

  return {
    leavePopUpState: popUpState,
    onCancelParticipation,
    onConfirmLeave,
    onCloseLeavePopUp,
  };
};
