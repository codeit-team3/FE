'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export const usePopup = () => {
  const router = useRouter();
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  const handlePopUpClose = () => {
    setShowSuccessPopup(true);
    router.push('/bookclub');
  };

  const handlePopUpConfirm = () => {
    setShowSuccessPopup(true);
    router.push('/bookclub');
  };

  return {
    showSuccessPopup,
    setShowSuccessPopup,
    handlePopUpClose,
    handlePopUpConfirm,
  };
};
