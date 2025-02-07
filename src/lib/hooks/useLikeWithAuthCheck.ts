import { useState } from 'react';

export const useLikeWithAuthCheck = () => {
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);
  const [popUpLabel, setPopUpLabel] = useState('');

  const onShowAuthPopUp = () => {
    setPopUpLabel(
      `로그인 후 이용할 수 있어요.\n로그인 페이지로 이동하시겠어요?`,
    );
    setIsPopUpOpen(true);
  };

  const onCloseCheckAuthPopup = () => {
    setIsPopUpOpen(false);
    setPopUpLabel('');
  };

  return {
    isLikePopUpOpen: isPopUpOpen,
    likePopUpLabel: popUpLabel,
    onShowAuthPopUp,
    onCloseCheckAuthPopup,
  };
};
