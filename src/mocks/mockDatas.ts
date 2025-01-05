import { BookClub } from '@/types/bookclubs';
import { Review } from '@/types/review';
import { User } from '@/types/user';

const defaultBookClub = '/images/defaultBookClub.jpg';
const defaultProfile = '/images/profile.png';
export const mockBookClubs: BookClub[] = [
  {
    id: 1,
    title: '문학 사랑 모임',
    description: '문학을 사랑하는 사람들의 모임입니다.',
    meetingType: 'ONLINE',
    bookClubType: 'FREE',
    targetDate: '2025-02-10',
    endDate: '2025-01-30',
    imageUrl: defaultBookClub,
    memberLimit: 20,
    memberCount: 15,
    city: '서울',
    town: '강남',
    address: '서울 강남구 역삼동',
    detailAddress: '5층',
    hostId: 101,
    hostNickname: '진영',
    hostProfileImage: defaultProfile,
    averageScore: 4.5,
    clubStatus: 'confirmed',
    isLiked: true,
    isInactive: false,
    isJoined: true,
  },
  {
    id: 2,
    title: '책과 커피 모임',
    description: '커피와 함께 책을 읽는 모임입니다.',
    meetingType: 'OFFLINE',
    bookClubType: 'FREE',
    targetDate: '2025-03-01',
    endDate: '2025-02-25',
    imageUrl: defaultBookClub,
    memberLimit: 15,
    memberCount: 10,
    city: '부산',
    town: '서면',
    address: '부산 부산진구 서면',
    detailAddress: "커피숍 '북카페'",
    hostId: 102,
    hostNickname: '민지',
    hostProfileImage: defaultProfile,
    averageScore: 4.8,
    clubStatus: 'pending',
    isLiked: false,
    isInactive: false,
    isJoined: false,
  },
  {
    id: 3,
    title: 'SF 소설 모임',
    description: 'SF 소설을 좋아하는 사람들의 모임입니다.',
    meetingType: 'ONLINE',
    bookClubType: 'FIXED',
    targetDate: '2025-04-10',
    endDate: '2025-03-30',
    imageUrl: defaultBookClub,
    memberLimit: 25,
    memberCount: 18,
    city: '서울',
    town: '홍대',
    address: '서울 마포구 홍대',
    detailAddress: '도서관 3층',
    hostId: 103,
    hostNickname: '수연',
    hostProfileImage: defaultProfile,
    averageScore: 4.2,
    clubStatus: 'confirmed',
    isLiked: true,
    isInactive: false,
    isJoined: true,
  },
  {
    id: 4,
    title: '역사 탐방 모임',
    description: '역사를 사랑하는 사람들의 모임입니다.',
    meetingType: 'OFFLINE',
    bookClubType: 'FREE',
    targetDate: '2025-05-15',
    endDate: '2025-05-01',
    imageUrl: defaultBookClub,
    memberLimit: 30,
    memberCount: 25,
    city: '대구',
    town: '동성로',
    address: '대구 중구 동성로',
    detailAddress: '역사 박물관 앞',
    hostId: 104,
    hostNickname: '지훈',
    hostProfileImage: defaultProfile,
    averageScore: 4.7,
    clubStatus: 'closed',
    isLiked: false,
    isInactive: true,
    isJoined: false,
  },
  {
    id: 5,
    title: '시집 독서 모임',
    description: '시집을 함께 읽고 토론하는 모임입니다.',
    meetingType: 'ONLINE',
    bookClubType: 'FIXED',
    targetDate: '2025-06-01',
    endDate: '2025-05-20',
    imageUrl: defaultBookClub,
    memberLimit: 12,
    memberCount: 10,
    city: '서울',
    town: '이태원',
    address: '서울 용산구 이태원',
    detailAddress: '온라인 Zoom',
    hostId: 105,
    hostNickname: '정민',
    hostProfileImage: defaultProfile,
    averageScore: 5.0,
    clubStatus: 'confirmed',
    isLiked: true,
    isInactive: false,
    isJoined: true,
  },
  {
    id: 6,
    title: '경제학 토론 모임',
    description: '경제학에 대해 자유롭게 토론하는 모임입니다.',
    meetingType: 'OFFLINE',
    bookClubType: 'FREE',
    targetDate: '2025-07-10',
    endDate: '2025-06-30',
    imageUrl: defaultBookClub,
    memberLimit: 20,
    memberCount: 16,
    city: '인천',
    town: '송도',
    address: '인천 연수구 송도',
    detailAddress: '송도 도서관',
    hostId: 106,
    hostNickname: '현수',
    hostProfileImage: defaultProfile,
    averageScore: 3.8,
    clubStatus: 'pending',
    isLiked: false,
    isInactive: false,
    isJoined: false,
  },
  {
    id: 7,
    title: '문학과 영화 모임',
    description: '문학 작품을 영화로 만든 작품을 리뷰하는 모임입니다.',
    meetingType: 'ONLINE',
    bookClubType: 'FIXED',
    targetDate: '2025-08-01',
    endDate: '2025-07-20',
    imageUrl: defaultBookClub,
    memberLimit: 18,
    memberCount: 14,
    city: '서울',
    town: '강남',
    address: '서울 강남구 삼성동',
    detailAddress: '온라인 Zoom',
    hostId: 107,
    hostNickname: '태영',
    hostProfileImage: defaultProfile,
    averageScore: 4.1,
    clubStatus: 'confirmed',
    isLiked: true,
    isInactive: false,
    isJoined: true,
  },
  {
    id: 8,
    title: '여행 사진 모임',
    description: '여행 중 찍은 사진을 공유하고 이야기를 나누는 모임입니다.',
    meetingType: 'OFFLINE',
    bookClubType: 'FREE',
    targetDate: '2025-09-05',
    endDate: '2025-08-30',
    imageUrl: defaultBookClub,
    memberLimit: 10,
    memberCount: 8,
    city: '서울',
    town: '홍대',
    address: '서울 마포구 홍대',
    detailAddress: "홍대 카페 '여행자'",
    hostId: 108,
    hostNickname: '수아',
    hostProfileImage: defaultProfile,
    averageScore: 3.9,
    clubStatus: 'pending',
    isLiked: false,
    isInactive: false,
    isJoined: false,
  },
  {
    id: 9,
    title: '디지털 기술 토론 모임',
    description: '디지털 기술의 미래에 대해 토론하는 모임입니다.',
    meetingType: 'ONLINE',
    bookClubType: 'FREE',
    targetDate: '2025-10-10',
    endDate: '2025-09-30',
    imageUrl: defaultBookClub,
    memberLimit: 30,
    memberCount: 20,
    city: '대전',
    town: '유성',
    address: '대전 유성구',
    detailAddress: '온라인 Discord',
    hostId: 109,
    hostNickname: '정호',
    hostProfileImage: defaultProfile,
    averageScore: 4.6,
    clubStatus: 'closed',
    isLiked: true,
    isInactive: true,
    isJoined: true,
  },
  {
    id: 10,
    title: '고전 문학 독서 모임',
    description: '고전 문학 작품을 읽고 토론하는 모임입니다.',
    meetingType: 'OFFLINE',
    bookClubType: 'FREE',
    targetDate: '2025-11-01',
    endDate: '2025-10-25',
    imageUrl: defaultBookClub,
    memberLimit: 25,
    memberCount: 20,
    city: '서울',
    town: '강북',
    address: '서울 강북구',
    detailAddress: '강북 도서관',
    hostId: 110,
    hostNickname: '지은',
    hostProfileImage: defaultProfile,
    averageScore: 4.3,
    clubStatus: 'confirmed',
    isLiked: false,
    isInactive: false,
    isJoined: true,
  },
];

export const mockReviews: Review[] = [
  {
    id: 1,
    userId: 101,
    bookClubId: 1,
    rating: 5,
    content:
      '이 책클럽은 정말 좋았습니다. 책 선정도 훌륭하고, 참여자들 간의 토론도 활발했어요.',
    userImage: defaultProfile,
    createdAt: '2025-01-10T14:30:00Z',
    bookClubImageUrl: defaultBookClub,
    nickname: '진영',
    bookClubTitle: '문학 사랑 모임',
    bookClubType: 'FREE',
  },
  {
    id: 2,
    userId: 102,
    bookClubId: 2,
    rating: 4,
    content:
      '모임 분위기는 좋았지만, 책의 주제가 조금 어려웠어요. 그래도 유익한 시간이었어요.',
    userImage: defaultBookClub,
    createdAt: '2025-01-12T16:45:00Z',
    bookClubImageUrl: defaultBookClub,
    nickname: '민지',
    bookClubTitle: '책과 커피 모임',
    bookClubType: 'FREE',
  },
  {
    id: 3,
    userId: 103,
    bookClubId: 3,
    rating: 3,
    content:
      '책은 좋았지만, 온라인 모임이라 참여자들과의 소통이 부족했던 것 같아요.',
    createdAt: '2025-01-14T17:00:00Z',
    bookClubImageUrl: defaultBookClub,
    nickname: '수연',
    bookClubTitle: 'SF 소설 모임',
    bookClubType: 'FIXED',
  },
  {
    id: 4,
    userId: 104,
    bookClubId: 4,
    rating: 4,
    content:
      '좋은 모임이었지만, 장소가 조금 좁았어요. 그 외엔 정말 유익한 시간이었습니다.',
    createdAt: '2025-01-15T18:10:00Z',
    bookClubImageUrl: defaultBookClub,
    nickname: '지훈',
    bookClubTitle: '역사 탐방 모임',
    bookClubType: 'FREE',
  },
  {
    id: 5,
    userId: 105,
    bookClubId: 5,
    rating: 5,
    content:
      '시집에 대한 다양한 해석을 나누어서 매우 흥미로운 모임이었어요. 다음 모임이 기대됩니다.',
    userImage: defaultBookClub,
    createdAt: '2025-01-16T12:00:00Z',
    bookClubImageUrl: defaultBookClub,
    nickname: '정민',
    bookClubTitle: '시집 독서 모임',
    bookClubType: 'FIXED',
  },
  {
    id: 6,
    userId: 106,
    bookClubId: 6,
    rating: 4,
    content:
      '경제학 토론이 매우 유익했고, 다른 사람들의 의견을 들을 수 있어 좋았습니다.',
    createdAt: '2025-01-17T13:30:00Z',
    bookClubImageUrl: defaultBookClub,
    nickname: '현수',
    bookClubTitle: '경제학 토론 모임',
    bookClubType: 'FREE',
  },
  {
    id: 7,
    userId: 107,
    bookClubId: 7,
    rating: 3,
    content:
      '영화와 책을 비교하는 재미는 있었으나, 일부 영화가 책의 내용을 잘 반영하지 못한 것 같아요.',
    createdAt: '2025-01-18T19:00:00Z',
    bookClubImageUrl: defaultBookClub,
    nickname: '태영',
    bookClubTitle: '문학과 영화 모임',
    bookClubType: 'FIXED',
  },
  {
    id: 8,
    userId: 108,
    bookClubId: 8,
    rating: 5,
    content:
      '여행 사진과 이야기를 나누는 모임은 정말 즐거웠어요. 다른 사람들의 경험을 듣는 것이 너무 흥미로웠습니다.',
    userImage: defaultBookClub,
    createdAt: '2025-01-19T20:30:00Z',
    bookClubImageUrl: defaultBookClub,
    nickname: '수아',
    bookClubTitle: '여행 사진 모임',
    bookClubType: 'FREE',
  },
  {
    id: 9,
    userId: 109,
    bookClubId: 9,
    rating: 4,
    content:
      '디지털 기술에 대한 최신 정보를 나눌 수 있어 좋았고, 많은 토론이 이루어졌습니다.',
    createdAt: '2025-01-20T21:45:00Z',
    bookClubImageUrl: defaultBookClub,
    nickname: '정호',
    bookClubTitle: '디지털 기술 토론 모임',
    bookClubType: 'FREE',
  },
  {
    id: 10,
    userId: 110,
    bookClubId: 10,
    rating: 4,
    content:
      '고전 문학을 다시 한번 되새길 수 있는 좋은 시간이었어요. 다만, 책 선정이 조금 아쉬웠습니다.',
    createdAt: '2025-01-21T22:30:00Z',
    bookClubImageUrl: defaultBookClub,
    nickname: '지은',
    bookClubTitle: '고전 문학 독서 모임',
    bookClubType: 'FREE',
  },
];

export const mockUser: User = {
  id: 1,
  name: 'John Doe',
  nickname: 'Johnny',
  email: 'john.doe@example.com',
  description: 'A software developer.',
  image: '',
  createdAt: '2024-12-30T05:37:19.084Z',
  updatedAt: '2024-12-30T05:37:19.084Z',
};
