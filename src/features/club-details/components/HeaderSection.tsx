'use client';

import { bookClubs, useJoinBookClub } from '@/api/book-club/react-query';
import Card from '@/components/card/Card';
import { CardProps } from '@/components/card/types';
import PopUp from '@/components/pop-up/PopUp';
import { showToast } from '@/components/toast/toast';
import { clubStatus } from '@/lib/utils/clubUtils';
import { formatDateForUI } from '@/lib/utils/formatDateForUI';
import { useAuthStore } from '@/store/authStore';
import { useQuery } from '@tanstack/react-query';
import { useParams, useRouter } from 'next/navigation';

import { useEffect, useState } from 'react';

function HeaderSection() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [isMember, setIsMember] = useState<{
    label: string;
    isTwoButton: boolean;
    handlePopUpConfirm?: () => void;
  } | null>(null);

  const { id } = useParams();
  const idAsString = Array.isArray(id) ? id[0] : id || '';
  const idAsNumber = Number(idAsString);
  const { isLoggedIn, checkLoginStatus } = useAuthStore();
  const { data, isLoading, error } = useQuery({
    ...bookClubs.detail(idAsNumber),
  });
  const { mutate } = useJoinBookClub();

  const router = useRouter();

  useEffect(() => {
    checkLoginStatus();
  }, [checkLoginStatus]);

  useEffect(() => {
    if (isFinite(Number(idAsString))) {
      alert('잘못된 접근입니다. 메인 페이지로 이동합니다.');
      router.replace('/');
    }
  }, [idAsString]);

  // TODO: 공통 로딩 컴포넌트로 교체
  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  // TODO: 응답값 추가 후 제거
  const EXAMPLE_IMAGE = '/images/profile.png';

  const clubInfo = data?.data;

  const handleJoin = () => {
    if (!isLoggedIn) {
      setIsMember({
        label: '로그인 후 이용해주세요!',
        isTwoButton: true,
        handlePopUpConfirm: () => router.replace('/login'),
      });
      setIsOpen(true);
      return;
    }

    mutate(clubInfo.id, {
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
    onCancel: () => alert('모임 취소하기 클릭!'),
    onParticipate: handleJoin,
    onCancelParticipation: () => alert('참여 취소하기 클릭!'),
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
    </header>
  );
}
export default HeaderSection;
