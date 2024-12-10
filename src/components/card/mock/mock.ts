import { Meeting, FullMeeting } from '../types';

export const mockMeeting: Meeting = {
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
    participants: [
      { src: 'https://picsum.photos/seed/1/200', alt: '참가자1' },
      { src: 'https://picsum.photos/seed/2/200', alt: '참가자2' },
      { src: 'https://picsum.photos/seed/3/200', alt: '참가자3' },
    ],
  },
  imageInfo: {
    url: 'https://picsum.photos/seed/bookclub/800/450',
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

export const mockFullMeeting: FullMeeting = {
  ...mockMeeting,
  hostInfo: {
    nickname: '호스트',
    onHostClick: () => alert('호스트 프로필을 클릭했습니다!'),
  },
  actions: {
    onJoinClick: () => alert('참여하기를 클릭했습니다!'),
  },
};

export const mockPastMeeting = {
  ...mockMeeting,
  isPast: true,
};

export const mockPastFullMeeting = {
  ...mockFullMeeting,
  isPast: true,
};

export const mockCanceledMeeting = {
  ...mockMeeting,
  isCanceled: true,
};

export const mockCanceledFullMeeting = {
  ...mockFullMeeting,
  isCanceled: true,
};
