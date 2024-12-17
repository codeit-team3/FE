'use client';

import Card from '@/components/card/Card';
import { useRouter } from 'next/navigation';

const cardData = [
  {
    clubId: 1,
    imageUrl: '/images/defaultBookClub.jpg',
    imageAlt: '모임 이미지',
    title: '독서 모임 1',
    location: '서울 강남구',
    datetime: '2024-01-20 14:00',
    isLiked: false,
    current: 3,
    max: 8,
    isPast: false,
    isCanceled: false,
    clubStatus: 'pending' as const,
    meetingType: 'OFFLINE' as const,
    bookClubType: 'FIXED' as const,

    // meetingType: 'FIXED', // 정확한 리터럴 값 설정
    // status: 'pending',
  },
  {
    clubId: 2,
    imageUrl: '/images/defaultBookClub.jpg',
    imageAlt: '모임 이미지',
    title: '독서 모임 1',
    location: '서울 강남구',
    datetime: '2024-01-20 14:00',
    isLiked: false,
    current: 3,
    max: 8,
    isPast: false,
    isCanceled: false,
    clubStatus: 'pending' as const,
    meetingType: 'OFFLINE' as const,
    bookClubType: 'FIXED' as const,

    // meetingType: 'FIXED', // 정확한 리터럴 값 설정
    // status: 'pending',
  },
  {
    clubId: 3,
    imageUrl: '/images/defaultBookClub.jpg',
    imageAlt: '모임 이미지',
    title: '독서 모임 1',
    location: '서울 강남구',
    datetime: '2024-01-20 14:00',
    isLiked: false,
    current: 3,
    max: 8,
    isPast: false,
    isCanceled: false,
    clubStatus: 'pending' as const,
    meetingType: 'OFFLINE' as const,
    bookClubType: 'FIXED' as const,

    // meetingType: 'FIXED', // 정확한 리터럴 값 설정
    // status: 'pending',
  },
  {
    clubId: 4,
    imageUrl: '/images/defaultBookClub.jpg',
    imageAlt: '모임 이미지',
    title: '독서 모임 1',
    location: '서울 강남구',
    datetime: '2024-01-20 14:00',
    isLiked: false,
    current: 3,
    max: 8,
    isPast: false,
    isCanceled: false,
    clubStatus: 'pending' as const,
    meetingType: 'OFFLINE' as const,
    bookClubType: 'FIXED' as const,

    // meetingType: 'FIXED', // 정확한 리터럴 값 설정
    // status: 'pending',
  },
];

function ClubListSection() {
  const router = useRouter();
  return (
    <main className="flex w-full min-w-[336px] flex-col items-center gap-y-[26px] bg-gray-light-01 px-[20px] pt-[18px] sm:justify-between md:px-[24px] lg:px-[102px]">
      {cardData.map((card, index) => (
        <div className="md:w-full" key={index}>
          <Card
            {...card}
            // // meetingType={'FIXED' as 'FIXED'}
            // // status="pending"
            // {...card}
            variant="defaultClub"
            onClick={() => router.push(`/bookclub/${card.clubId}`)}
            onLikeClick={() => console.log('좋아요 클릭')}
            onDelete={() => console.log('삭제 클릭')}
          />
        </div>
      ))}
    </main>
  );
}

export default ClubListSection;
