'use client';

import Card from '@/components/card/Card';
import { CardProps } from '@/components/card/types';
import PopUp from '@/components/pop-up/PopUp';
import { bookClubs } from '@/features/react-query/book-club';
import { useAuthStore } from '@/store/authStore';
import { useQuery } from '@tanstack/react-query';
import { useParams, useRouter } from 'next/navigation';

import { useEffect, useState } from 'react';

function HeaderSection() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  const { id } = useParams();
  const idAsString = Array.isArray(id) ? id[0] : id || '';
  const { isLoggedIn, checkLoginStatus } = useAuthStore();
  const { data, isLoading, error } = useQuery({
    ...bookClubs.detail(idAsString),
  });

  const router = useRouter();

  useEffect(() => {
    checkLoginStatus();
  }, [checkLoginStatus]);

  useEffect(() => {
    console.log(data);
  });

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

  const EXAMPLE_IMAGE = '/images/profile.png';

  const defaultCardProps: CardProps = {
    clubId: 45,
    variant: 'detailedClub',
    imageUrl: EXAMPLE_IMAGE,
    imageAlt: '모임 이미지',
    title: '독서 모임',
    location: '서울 강남구',
    datetime: '2024-01-20 14:00',
    isLiked: isLiked,
    current: 3,
    max: 8,
    isPast: false,
    meetingType: 'OFFLINE',
    bookClubType: 'FIXED',
    clubStatus: 'pending',
    onClick: () => {},
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
