'use client';

import Card from '@/components/card/Card';
import { CardProps } from '@/components/card/types';
import PopUp from '@/components/pop-up/PopUp';
import { clubStatus } from '@/lib/utils/clubUtils';
import { formatDateForUI, isPastDate } from '@/lib/utils/formatDateForUI';
import { useAuthStore } from '@/store/authStore';
import { BookClub } from '@/types/bookclubs';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useJoinClub } from '../hooks';
import {
  useCancelClub,
  useLeaveClub,
  useLikeClub,
  useLikeWithAuthCheck,
  useUnLikeClub,
} from '@/lib/hooks/index';

interface HeaderSectionProps {
  clubInfo: BookClub;
  idAsNumber: number;
}

function HeaderSection({ clubInfo, idAsNumber }: HeaderSectionProps) {
  const { handleJoin } = useJoinClub();
  const {
    popUpState: cancelPopUpState,
    onCancel,
    onConfirmCancel,
    onClosePopUp: onCloseCancelPopUp,
  } = useCancelClub();
  const {
    leavePopUpState,
    onCancelParticipation,
    onConfirmLeave,
    onCloseLeavePopUp,
  } = useLeaveClub();
  const {
    isLikePopUpOpen,
    likePopUpLabel,
    onShowAuthPopUp,
    onCloseCheckAuthPopup,
  } = useLikeWithAuthCheck();
  const { onConfirmLike } = useLikeClub();
  const { onConfirmUnLike } = useUnLikeClub();

  const { isLoggedIn, checkLoginStatus, user } = useAuthStore();

  const router = useRouter();

  useEffect(() => {
    checkLoginStatus();
  }, [checkLoginStatus]);

  useEffect(() => {
    if (isNaN(idAsNumber)) {
      alert('잘못된 접근입니다. 메인 페이지로 이동합니다.');
      router.replace('/');
    }
  }, [idAsNumber]);

  const handleJoinClick = () => {
    !isLoggedIn ? router.push('/login') : handleJoin(clubInfo.id);
  };

  const handleLikeClub = () => {
    if (!isLoggedIn) {
      onShowAuthPopUp();
      return;
    }
    if (clubInfo.isLiked) {
      onConfirmUnLike(clubInfo.id);
    } else {
      onConfirmLike(clubInfo.id);
    }
  };

  const handleLikePopUpConfirm = () => {
    router.push('/login');
  };

  const defaultCardProps: CardProps = {
    clubId: clubInfo.id,
    variant: 'detailedClub',
    imageUrl: clubInfo.imageUrl || '/images/defaultBookClub.jpg',
    imageAlt: '모임 이미지',
    title: clubInfo.title,
    location: clubInfo.town || '',
    datetime: formatDateForUI(clubInfo.targetDate, 'KOREAN'),
    isLiked: clubInfo.isLiked,
    current: clubInfo.memberCount,
    max: clubInfo.memberLimit,
    isPast: isPastDate(clubInfo.targetDate, new Date()), // TODO: new Date() 최적화
    meetingType: clubInfo.meetingType,
    bookClubType: clubInfo.bookClubType,
    clubStatus: clubStatus(
      clubInfo.memberCount,
      clubInfo.memberLimit,
      clubInfo.endDate,
      new Date(), // TODO: new Date() 최적화 후 수정
    ),
    onLikeClick: handleLikeClub,
    host: {
      id: clubInfo.hostId,
      name: clubInfo.hostNickname,
      profileImage: clubInfo.hostProfileImage,
    },
    isHost: clubInfo.hostId === user?.id,
    isParticipant: clubInfo.isJoined,
    // hasWrittenReview: false,
    onCancel: () => onCancel(clubInfo.id),
    onParticipate: handleJoinClick,
    onCancelParticipation: () => onCancelParticipation(clubInfo.id),
    // onWriteReview: () => alert('리뷰 작성하기 클릭!'),
    onHostClick: () => router.push(`/profile/${clubInfo.hostId}`),
  };

  return (
    <header className="flex justify-center py-6">
      <Card {...defaultCardProps} />
      <PopUp
        isOpen={leavePopUpState.isOpen}
        isLarge={true}
        isTwoButton={true}
        label={leavePopUpState.label}
        handlePopUpClose={onCloseLeavePopUp}
        handlePopUpConfirm={onConfirmLeave}
      />
      <PopUp
        isOpen={cancelPopUpState.isOpen}
        isLarge={true}
        isTwoButton={true}
        label={cancelPopUpState.label}
        handlePopUpClose={onCloseCancelPopUp}
        handlePopUpConfirm={onConfirmCancel}
      />
      {/* 찜하기 */}
      <PopUp
        isOpen={isLikePopUpOpen}
        isLarge={true}
        isTwoButton={true}
        label={likePopUpLabel}
        handlePopUpClose={onCloseCheckAuthPopup}
        handlePopUpConfirm={handleLikePopUpConfirm}
      />
    </header>
  );
}
export default HeaderSection;
