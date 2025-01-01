'use client';

import Card from '@/components/card/Card';
import { CardProps } from '@/components/card/types';
import PopUp from '@/components/pop-up/PopUp';
import { showToast } from '@/components/toast/toast';
import { clubStatus } from '@/lib/utils/clubUtils';
import { formatDateForUI } from '@/lib/utils/formatDateForUI';
import { useAuthStore } from '@/store/authStore';
import { BookClub } from '@/types/bookclubs';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useJoinClub } from '../hooks/useJoinClub';
import { useCancelClub } from '@/lib/hooks/useCancelClub';

interface HeaderSectionProps {
  clubInfo: BookClub;
  idAsNumber: number;
}

function HeaderSection({ clubInfo, idAsNumber }: HeaderSectionProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [isMember, setIsMember] = useState<{
    label: string;
    isTwoButton: boolean;
    handlePopUpConfirm?: () => void;
  } | null>(null);

  const { handleJoin } = useJoinClub();
  const { popUpState, onCancel, onConfirmCancel, onClosePopUp } =
    useCancelClub();
  const { isLoggedIn, checkLoginStatus } = useAuthStore();

  const router = useRouter();

  useEffect(() => {
    console.log(clubInfo);
  });

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

    handleJoin(
      clubInfo.id,
      () => {
        showToast({
          message: '참여 완료! 함께하게 돼서 기뻐요🥰',
          type: 'success',
        });
      },
      (error) => {
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
    );
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
    onLikeClick: () => {
      setIsLiked(!isLiked);
    }, // api 연동 후 수정
    // TODO: 응답값 추가 후 수정
    host: {
      id: 'host1',
      name: '호스트',
      profileImage: EXAMPLE_IMAGE,
    },
    isHost: false,
    isParticipant: false,
    hasWrittenReview: false,
    onCancel: () => onCancel(clubInfo.id),
    onParticipate: handleJoinClick,
    onCancelParticipation: () => alert('모임 참여 취소하기 클릭!'),
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
        isOpen={popUpState.isOpen}
        isLarge={true}
        isTwoButton={true}
        label={popUpState.label}
        handlePopUpClose={onClosePopUp}
        handlePopUpConfirm={onConfirmCancel}
      />
    </header>
  );
}
export default HeaderSection;
