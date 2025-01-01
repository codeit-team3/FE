import { useEffect, useState } from 'react';
import { useLikeClub } from './useLikeClub';
import { useAuthStore } from '@/store/authStore';

export const useLikeWithAuthCheck = () => {
  const { onConfirmLike } = useLikeClub();
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);
  const [popUpLabel, setPopUpLabel] = useState('');

  const { isLoggedIn, checkLoginStatus } = useAuthStore();

  useEffect(() => {
    checkLoginStatus();
  }, [checkLoginStatus]);

  const onCheckAuthPopUp = (clubId: number) => {
    if (isLoggedIn) {
      onConfirmLike(clubId);
    } else {
      setPopUpLabel(
        `로그인 후 이용할 수 있어요.\n로그인 페이지로 이동하시겠어요?`,
      );
      setIsPopUpOpen(true);
    }
  };

  const onCloseCheckAuthPopup = () => {
    setIsPopUpOpen(false);
    setPopUpLabel('');
  };

  return {
    isLikePopUpOpen: isPopUpOpen,
    likePopUpLabel: popUpLabel,
    onCheckAuthPopUp,
    onCloseCheckAuthPopup,
  };
};
