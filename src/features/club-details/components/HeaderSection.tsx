'use client';

import Card from '@/components/card/Card';
import { CardProps } from '@/components/card/types';
import PopUp from '@/components/pop-up/PopUp';
import { clubStatus } from '@/lib/utils/clubUtils';
import { formatDateForUI } from '@/lib/utils/formatDateForUI';
import { useAuthStore } from '@/store/authStore';
import { BookClub } from '@/types/bookclubs';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useLeaveClub, useJoinClub } from '../hooks';
import {
  useCancelClub,
  useLikeWithAuthCheck,
  useUnLikeClub,
} from '@/lib/hooks/index';

interface HeaderSectionProps {
  clubInfo: BookClub;
  idAsNumber: number;
}

function HeaderSection({ clubInfo, idAsNumber }: HeaderSectionProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isMember, setIsMember] = useState<{
    label: string;
    isTwoButton: boolean;
    handlePopUpConfirm?: () => void;
  } | null>(null);

  const { handleJoin } = useJoinClub();
  const { popUpState, onCancel, onConfirmCancel, onClosePopUp } =
    useCancelClub();
  const {
    leavePopUpState,
    onCancelParticipation,
    onConfirmLeave,
    onCloseLeavePopUp,
  } = useLeaveClub();
  const {
    isLikePopUpOpen,
    likePopUpLabel,
    onCheckAuthPopUp,
    onCloseCheckAuthPopup,
  } = useLikeWithAuthCheck();
  const { onConfirmUnLike } = useUnLikeClub();

  const { isLoggedIn, checkLoginStatus } = useAuthStore();

  const router = useRouter();

  useEffect(() => {
    console.log(clubInfo);
  }, []);

  useEffect(() => {
    checkLoginStatus();
  }, [checkLoginStatus]);

  useEffect(() => {
    if (isNaN(idAsNumber)) {
      alert('잘못된 접근입니다. 메인 페이지로 이동합니다.');
      router.replace('/');
    }
  }, [idAsNumber]);

  // TODO: 응답값 추가 후 제거
  const EXAMPLE_IMAGE = '/images/profile.png';

  const handleJoinClick = () => {
    if (!isLoggedIn) {
      setIsMember({
        label: '로그인 후 이용해주세요!',
        isTwoButton: true,
        handlePopUpConfirm: () => router.replace('/login'),
      });
      setIsOpen(true);
      return;
    }

    handleJoin(clubInfo.id);
  };

  const handleLikeClub = () => {
    clubInfo.isLiked
      ? onCheckAuthPopUp(clubInfo.id)
      : onConfirmUnLike(clubInfo.id);
  };

  const handleLikePopUpConfirm = () => {
    router.push('/login');
  };

  const defaultCardProps: CardProps = {
    clubId: clubInfo.id,
    variant: 'detailedClub',
    imageUrl: EXAMPLE_IMAGE,
    imageAlt: '모임 이미지',
    title: clubInfo.title,
    location: clubInfo.town || '',
    datetime: formatDateForUI(clubInfo.targetDate, 'KOREAN'),
    isLiked: clubInfo.isLiked,
    current: clubInfo.memberCount,
    max: clubInfo.memberLimit,
    isPast: false, // TODO: new Date() 최적화 후 수정
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
      // TODO: 응답값 추가 후 수정
      id: 'host1',
      name: '호스트',
      profileImage: EXAMPLE_IMAGE,
    },
    isHost: false,
    isParticipant: true,
    hasWrittenReview: false,
    onCancel: () => onCancel(clubInfo.id),
    onParticipate: handleJoinClick,
    onCancelParticipation: () => onCancelParticipation(clubInfo.id),
    onWriteReview: () => alert('리뷰 작성하기 클릭!'),
  };

  return (
    <header className="flex justify-center py-6">
      <Card {...defaultCardProps} />
      {isMember && (
        <PopUp
          isOpen={isOpen}
          isTwoButton={isMember.isTwoButton}
          label={isMember.label}
          handlePopUpClose={() => {
            setIsOpen(false);
          }}
          handlePopUpConfirm={isMember.handlePopUpConfirm}
        />
      )}
      <PopUp
        isOpen={leavePopUpState.isOpen}
        isLarge={true}
        isTwoButton={true}
        label={leavePopUpState.label}
        handlePopUpClose={onCloseLeavePopUp}
        handlePopUpConfirm={onConfirmLeave}
      />
      <PopUp
        isOpen={popUpState.isOpen}
        isLarge={true}
        isTwoButton={true}
        label={popUpState.label}
        handlePopUpClose={onClosePopUp}
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
