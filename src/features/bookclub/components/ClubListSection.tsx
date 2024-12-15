// import { Meeting } from '@/components/card/types';

import Card from '@/components/card/Card';
import { CardProps } from '@/components/card/types';

// const mockImgSrc = '/images/profile.png';

// const mockMeeting: Meeting = {
//   meetingInfo: {
//     title: '을지로에서 만나는 독서 모임',
//     category: '자유책',
//     location: '을지로 3가',
//     datetime: '12/14(토) 오전 10:00',
//   },
//   participationStatus: {
//     currentParticipants: 17,
//     maxParticipants: 20,
//     isConfirmed: true,
//     confirmedVariant: 'confirmed',
//     participants: [
//       {
//         src: mockImgSrc,
//         alt: '참가자1',
//       },
//       {
//         src: mockImgSrc,
//         alt: '참가자2',
//       },
//       {
//         src: mockImgSrc,
//         alt: '참가자3',
//       },
//     ],
//   },
//   imageInfo: {
//     url: mockImgSrc,
//     isLiked: true,
//     onLikeClick: () => alert('좋아요를 눌렀습니다!'),
//   },
//   isPast: false,
//   isCanceled: false,
//   actions: {
//     onClick: () => alert('카드를 클릭했습니다!'),
//     onDelete: () => alert('모임을 삭제했습니다!'),
//   },
// };

const defaultCardProps: CardProps = {
  variant: 'defaultClub',
  isLiked: false,
  isCanceled: false,
  current: 3,
  max: 8,
  imageUrl: '/images/profile.png',
  imageAlt: '모임 이미지',
  clubId: 45,
  title: '독서 모임',
  location: '서울 강남구',
  datetime: '2024-01-20 14:00',
  meetingType: 'OFFLINE',
  bookClubType: 'FIXED',
  isPast: false,
  clubStatus: 'pending',
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

function ClubListSection() {
  return (
    <main className="flex w-full min-w-[336px] flex-col items-center gap-y-[26px] bg-gray-light-01 px-[20px] pt-[18px] sm:justify-between md:px-[24px] lg:px-[102px]">
      <Card {...defaultCardProps} />
      <Card {...defaultCardProps} />
      <Card {...defaultCardProps} />
      <Card {...defaultCardProps} />
    </main>
  );
}

export default ClubListSection;
