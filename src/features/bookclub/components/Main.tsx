import SimpleCard from '@/components/card/simple-card/SimpleCard';
import { Meeting } from '@/components/card/types';

const mockImgSrc = '/images/profile.png';

const mockMeeting: Meeting = {
  meetingInfo: {
    title: '을지로에서 만나는 독서 모임',
    category: '자유책',
    location: '을지로 3가',
    datetime: '12/14(토) 오전 10:00',
  },
  participationStatus: {
    currentParticipants: 17,
    maxParticipants: 20,
    isConfirmed: true,
    confirmedVariant: 'confirmed',
    participants: [
      {
        src: mockImgSrc,
        alt: '참가자1',
      },
      {
        src: mockImgSrc,
        alt: '참가자2',
      },
      {
        src: mockImgSrc,
        alt: '참가자3',
      },
    ],
  },
  imageInfo: {
    url: mockImgSrc,
    isLiked: true,
    onLikeClick: () => alert('좋아요를 눌렀습니다!'),
  },
  isPast: false,
  isCanceled: false,
  actions: {
    onClick: () => alert('카드를 클릭했습니다!'),
    onDelete: () => alert('모임을 삭제했습니다!'),
  },
};

function Main() {
  return (
    <main className="flex w-full min-w-[336px] flex-col items-center gap-y-[26px] bg-gray-light-01 px-[20px] pt-[18px] sm:justify-between md:px-[24px] lg:px-[102px]">
      <SimpleCard meeting={mockMeeting} />
      <SimpleCard meeting={mockMeeting} />
    </main>
  );
}

export default Main;
