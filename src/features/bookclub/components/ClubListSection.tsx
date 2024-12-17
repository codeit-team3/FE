import Card from '@/components/card/Card';
import { CardProps } from '@/components/card/types';
import { BookClub } from '../types/bookclubs';

const defaultCardProps: CardProps = {
  imageUrl: '/images/profile.png',
  imageAlt: '모임 이미지',
  title: '독서 모임',
  location: '서울 강남구',
  datetime: '2024-01-20 14:00',
  isLiked: false,
  current: 3,
  max: 8,
  isPast: false,
  isCanceled: false,
  bookClubType: 'FIXED',
  status: 'pending',
  onLikeClick: () => {
    console.log('좋아요 클릭');
  },
  onClick: () => {
    console.log('카드 클릭');
  },
  onDelete: () => {
    console.log('삭제 클릭');
  },
};
interface ClubListSectionProps {
  bookClubs: BookClub[]; // bookClubs 데이터 타입 정의
}

function ClubListSection({ bookClubs }: ClubListSectionProps) {
  return (
    <main className="flex w-full min-w-[336px] flex-col items-center gap-y-[26px] bg-gray-light-01 px-[20px] pt-[18px] sm:justify-between md:px-[24px] lg:px-[102px]">
      {bookClubs.map((club) => (
        <Card
          key={club.id}
          imageUrl={club.imageUrl || '/images/profile.png'}
          imageAlt={club.title}
          title={club.title}
          location={club.town || '위치 정보 없음'}
          datetime={club.targetDate}
          isLiked={club.isLiked}
          current={club.memberCount}
          max={club.memberLimit}
          isPast={new Date(club.targetDate) < new Date()} // 지난 모임 여부
          isCanceled={false} // 모임 취소 여부 (API 값에 따라 변경 가능)
          bookClubType={club.bookClubType} // 타입 통일 필요
          status="pending" // 기본 상태 (필요에 따라 변경)
          onLikeClick={() => console.log(`${club.title} 좋아요 클릭`)}
          onClick={() => console.log(`${club.title} 카드 클릭`)}
          onDelete={() => console.log(`${club.title} 삭제 클릭`)}
        />
      ))}

      <Card {...defaultCardProps} />
      <Card {...defaultCardProps} />
      <Card {...defaultCardProps} />
      <Card {...defaultCardProps} />
    </main>
  );
}

export default ClubListSection;
