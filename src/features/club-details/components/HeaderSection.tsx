'use client';

import { bookClubs } from '@/api/book-club/react-query';
import Card from '@/components/card/Card';
import { CardProps } from '@/components/card/types';
import PopUp from '@/components/pop-up/PopUp';
import { formatDateForUI } from '@/lib/utils/formatDateForUI';
import { useAuthStore } from '@/store/authStore';
import { useQuery } from '@tanstack/react-query';
import { useParams, useRouter } from 'next/navigation';

import { useEffect, useState } from 'react';

function HeaderSection() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  const { id } = useParams();
  const idAsString = Array.isArray(id) ? id[0] : id || '';
  const idAsNumber = Number(idAsString);
  const { isLoggedIn, checkLoginStatus } = useAuthStore();
  const { data, isLoading, error } = useQuery({
    ...bookClubs.detail(idAsNumber),
  });

  const router = useRouter();

  useEffect(() => {
    checkLoginStatus();
  }, [checkLoginStatus]);

  if (isNaN(Number(idAsString))) {
    return <p>잘못된 접근입니다. 올바른 URL로 이동해주세요.</p>;
  }

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  let isMember;

  if (isLoggedIn) {
    isMember = {
      label: '참여 완료!', // 응답 성공시 로직에 여기서부터
      // isParticipant: true
      isTwoButton: false, // 여기까지 추가
      handlePopUpConfirm: () => setIsOpen(false),
    };
  } else {
    isMember = {
      label: '로그인 후 이용해주세요!',
      isTwoButton: true,
      handlePopUpConfirm: () => router.replace('/login'),
    };
  }

  // TODO: 응답값 추가 후 제거
  const EXAMPLE_IMAGE = '/images/profile.png';

  const clubInfo = data?.data;

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
    clubStatus: 'pending',
    onLikeClick: () => {
      setIsLiked(!isLiked);
    }, // api 연동 후 수정
    host: {
      id: 'host1',
      name: '호스트',
      profileImage: EXAMPLE_IMAGE,
    },
    isHost: false,
    isParticipant: false,
    hasWrittenReview: false,
    onCancel: () => alert('모임 취소하기 클릭!'),
    onParticipate: () => {
      setIsOpen(true);
    },
    onCancelParticipation: () => alert('참여 취소하기 클릭!'),
    onWriteReview: () => alert('리뷰 작성하기 클릭!'),
  };

  return (
    <header className="flex justify-center py-6">
      <Card {...defaultCardProps} />
      <PopUp
        isOpen={isOpen}
        isTwoButton={isMember.isTwoButton}
        label={isMember.label}
        handlePopUpClose={() => {
          setIsOpen(false);
        }}
        handlePopUpConfirm={isMember.handlePopUpConfirm}
      />
    </header>
  );
}
export default HeaderSection;
