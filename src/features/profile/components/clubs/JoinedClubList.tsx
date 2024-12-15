import Card from '@/components/card/Card';
import { BookClub, User } from '../../types';

interface JoinedClubListProps {
  user: User | null;
  sortBy: string | undefined;
}

const mockJoinedBookClubList: BookClub[] = [
  {
    id: 1,
    title: '문학의 밤',
    description: '다양한 문학 작품을 함께 읽고 토론하는 모임입니다.',
    meetingType: 'OFFLINE',
    bookClubType: 'FIXED',
    targetDate: '2024-01-10',
    endDate: '2024-12-10',
    memberLimit: 20,
    town: '서울',
    memberCount: 15,
    isLiked: true,
    isCanceled: false,
    imageUrl: '/images/profile.png',
    isPast: false,
    status: 'scheduled',
  },
  {
    id: 2,
    title: '과학 탐험',
    description:
      '최신 과학 서적을 읽고 실험을 통해 내용을 공유하는 모임입니다.',
    meetingType: 'ONLINE',
    bookClubType: 'FREE',
    targetDate: '2024-02-15',
    endDate: '2024-08-15',
    memberLimit: 30,
    town: '부산',
    memberCount: 25,
    isLiked: false,
    isCanceled: true,
    imageUrl: '/images/profile.png',
    isPast: true,
    status: 'closed',
  },
  {
    id: 3,
    title: '추리 소설 독서회',
    description: '추리 소설을 읽고 결말을 예측하며 토론하는 모임입니다.',
    meetingType: 'OFFLINE',
    bookClubType: 'FIXED',
    targetDate: '2024-03-20',
    endDate: '2024-11-20',
    memberLimit: 10,
    town: '대전',
    memberCount: 8,
    isLiked: true,
    isCanceled: false,
    imageUrl: '/images/profile.png',
    isPast: false,
    status: 'confirmed',
  },
  {
    id: 4,
    title: '로맨스 북클럽',
    description: '사랑과 감정을 주제로 한 로맨스 소설을 읽는 모임입니다.',
    meetingType: 'ONLINE',
    bookClubType: 'FREE',
    targetDate: '2024-04-25',
    endDate: '2024-10-25',
    memberLimit: 25,
    town: '인천',
    memberCount: 20,
    isLiked: false,
    isCanceled: false,
    imageUrl: '/images/profile.png',
    isPast: true,
    status: 'completed',
  },
  {
    id: 5,
    title: '비즈니스 책 모임',
    description:
      '성공적인 비즈니스 전략과 아이디어를 다룬 책을 읽고 토론합니다.',
    meetingType: 'OFFLINE',
    bookClubType: 'FIXED',
    targetDate: '2024-05-30',
    endDate: '2024-11-30',
    memberLimit: 15,
    town: '경기',
    memberCount: 12,
    isLiked: true,
    isCanceled: false,
    imageUrl: '/images/profile.png',
    isPast: false,
    status: 'scheduled',
  },
  {
    id: 6,
    title: '고전 문학',
    description: '고전 문학 작품을 읽고 그 의미를 되새기는 모임입니다.',
    meetingType: 'ONLINE',
    bookClubType: 'FREE',
    targetDate: '2024-06-05',
    endDate: '2024-12-05',
    memberLimit: 18,
    town: '서울',
    memberCount: 10,
    isLiked: true,
    isCanceled: false,
    imageUrl: '/images/profile.png',
    isPast: false,
    status: 'scheduled',
  },
  {
    id: 7,
    title: '환경 보호 독서회',
    description: '환경과 관련된 주제의 책을 읽고 토론하는 모임입니다.',
    meetingType: 'OFFLINE',
    bookClubType: 'FIXED',
    targetDate: '2024-07-15',
    endDate: '2024-12-15',
    memberLimit: 20,
    town: '대구',
    memberCount: 17,
    isLiked: false,
    isCanceled: true,
    imageUrl: '/images/profile.png',
    isPast: true,
    status: 'closed',
  },
  {
    id: 8,
    title: '스타트업 독서 모임',
    description:
      '스타트업과 관련된 책을 읽고 창업 아이디어를 나누는 모임입니다.',
    meetingType: 'ONLINE',
    bookClubType: 'FREE',
    targetDate: '2024-08-10',
    endDate: '2024-12-10',
    memberLimit: 10,
    town: '서울',
    memberCount: 7,
    isLiked: true,
    isCanceled: false,
    imageUrl: '/images/profile.png',
    isPast: false,
    status: 'confirmed',
  },
  {
    id: 9,
    title: '디지털 혁명',
    description: '디지털 시대를 맞이한 혁신적 책들을 읽고 토론하는 모임입니다.',
    meetingType: 'OFFLINE',
    bookClubType: 'FIXED',
    targetDate: '2024-09-05',
    endDate: '2024-11-05',
    memberLimit: 30,
    town: '부산',
    memberCount: 22,
    isLiked: false,
    isCanceled: true,
    imageUrl: '/images/profile.png',
    isPast: true,
    status: 'closed',
  },
  {
    id: 10,
    title: '인문학 읽기',
    description: '인문학적 사유를 통해 삶에 대한 통찰을 얻는 독서 모임입니다.',
    meetingType: 'ONLINE',
    bookClubType: 'FREE',
    targetDate: '2024-10-12',
    endDate: '2024-12-12',
    memberLimit: 20,
    town: '광주',
    memberCount: 15,
    isLiked: true,
    isCanceled: false,
    imageUrl: '/images/profile.png',
    isPast: false,
    status: 'scheduled',
  },
];

export default function JoinedClubList({ user, sortBy }: JoinedClubListProps) {
  // const bookClubList: BookClub[] = [];
  const bookClubList = mockJoinedBookClubList;
  console.log(user, sortBy);

  return (
    <div className="flex flex-col gap-y-[26px]">
      {bookClubList.length === 0 ? (
        <div className="text-gray-normal-03">
          아직 신청한 모임이 없어요.\n 지금 바로 책 모임을 신청해 보세요
        </div>
      ) : (
        bookClubList.map((bookClub, index) => (
          <div key={index}>
            {/* TODO: isCanceled, imageUrl. isPast, status 수정 */}
            <Card
              variant="participatedClub"
              isLiked={bookClub.isLiked}
              isCanceled={bookClub.isCanceled}
              onLikeClick={() => alert('찜 버튼 클릭')}
              onDelete={() => alert('취소된 모임 삭제하기 버튼 클릭')}
              onWriteReview={() => alert('리뷰 작성하기 버튼 클릭')}
              imageUrl={bookClub.imageUrl}
              title={bookClub.title}
              location={bookClub.town}
              datetime={bookClub.targetDate}
              meetingType={bookClub.meetingType}
              bookClubType={bookClub.bookClubType}
              isPast={bookClub.isPast}
              status={bookClub.status}
              onClick={() => alert('카드 컴포넌트 클릭')}
              onCancel={() => alert('onCancel?')}
            />
          </div>
        ))
      )}
    </div>
  );
}
