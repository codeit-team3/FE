'use client';

import Card from '@/components/card/Card';
import { useRouter } from 'next/navigation';

function ClubListSection() {
  const router = useRouter();

  const cardData = [
    {
      id: 1,
      imageUrl: '/images/profile.png',
      imageAlt: '모임 이미지',
      title: '독서 모임 1',
      location: '서울 강남구',
      datetime: '2024-01-20 14:00',
      isLiked: false,
      current: 3,
      max: 8,
      isPast: false,
      isCanceled: false,
      // meetingType: 'FIXED', // 정확한 리터럴 값 설정
      // status: 'pending',
    },
    {
      id: 2,
      imageUrl: '/images/profile.png',
      imageAlt: '모임 이미지',
      title: '독서 모임 1',
      location: '서울 강남구',
      datetime: '2024-01-20 14:00',
      isLiked: false,
      current: 3,
      max: 8,
      isPast: false,
      isCanceled: false,
      // meetingType: 'FIXED', // 정확한 리터럴 값 설정
      // status: 'pending',
    },
    {
      id: 3,
      imageUrl: '/images/profile.png',
      imageAlt: '모임 이미지',
      title: '독서 모임 1',
      location: '서울 강남구',
      datetime: '2024-01-20 14:00',
      isLiked: false,
      current: 3,
      max: 8,
      isPast: false,
      isCanceled: false,
      // meetingType: 'FIXED', // 정확한 리터럴 값 설정
      // status: 'pending',
    },
    {
      id: 4,
      imageUrl: '/images/profile.png',
      imageAlt: '모임 이미지',
      title: '독서 모임 1',
      location: '서울 강남구',
      datetime: '2024-01-20 14:00',
      isLiked: false,
      current: 3,
      max: 8,
      isPast: false,
      isCanceled: false,
      // meetingType: 'FIXED', // 정확한 리터럴 값 설정
      // status: 'pending',
    },
  ];

  return (
    <main className="flex w-full min-w-[336px] flex-col items-center gap-y-[26px] bg-gray-light-01 px-[20px] pt-[18px] sm:justify-between md:px-[24px] lg:px-[102px]">
      {cardData.map((card, index) => (
        <div className="md:w-full" key={index}>
          <Card
            meetingType={'FIXED' as 'FIXED'}
            status="pending"
            {...card}
            onClick={() => router.push(`/bookclub/${card.id}`)}
            onLikeClick={() => console.log('좋아요 클릭')}
            onDelete={() => console.log('삭제 클릭')}
          />
        </div>
      ))}
    </main>
  );
}

export default ClubListSection;
