'use client';

import Card from '@/components/card/Card';
import { CardProps } from '@/components/card/types';
import PopUp from '@/components/pop-up/PopUp';
import { useAuthStore } from '@/store/authStore';
import { useRouter } from 'next/navigation';

import { useEffect, useState } from 'react';

function HeaderSection() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  const { isLoggedIn, checkLoginStatus } = useAuthStore();
  const router = useRouter();

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

  useEffect(() => {
    checkLoginStatus();
  }, [checkLoginStatus]);

  const EXAMPLE_IMAGE = '/images/profile.png';

  const defaultCardProps: CardProps = {
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
    bookClubType: 'FIXED',
    status: 'pending',
    onClick: () => {},
    onLikeClick: () => {
      setIsLiked(!isLiked);
    }, // api 연동 후 수정
    participants: [
      {
        id: '1',
        name: '참여자1',
        profileImage: EXAMPLE_IMAGE,
        profileImageAlt: '참여자1 프로필 이미지',
      },
      {
        id: '2',
        name: '참여자2',
        profileImage: EXAMPLE_IMAGE,
        profileImageAlt: '참여자2 프로필 이미지',
      },
      {
        id: '3',
        name: '참여자3',
        profileImage: EXAMPLE_IMAGE,
        profileImageAlt: '참여자3 프로필 이미지',
      },
      {
        id: '4',
        name: '참여자4',
        profileImage: EXAMPLE_IMAGE,
        profileImageAlt: '참여자4 프로필 이미지',
      },
      {
        id: '5',
        name: '참여자5',
        profileImage: EXAMPLE_IMAGE,
        profileImageAlt: '참여자5 프로필 이미지',
      },
    ],
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
    <header className="py-6">
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
