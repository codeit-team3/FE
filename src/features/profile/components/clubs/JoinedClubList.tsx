import Card from '@/components/card/Card';
import { BookClub, User } from '../../types';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { WriteReviewModal } from '../clubs';

interface JoinedClubListProps {
  user: User | null;
  sortBy: string | undefined;
}

const mockJoinedBookClubList: BookClub[] = [
  {
    clubId: 1,
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
    clubStatus: 'confirmed',
  },
  {
    clubId: 2,
    title: '과학 탐험',
    description:
      '최신 과학 서적을 읽고 실험을 통해 배운 내용을 공유하는 모임입니다.',
    meetingType: 'ONLINE',
    bookClubType: 'FREE',
    targetDate: '2024-02-15',
    endDate: '2024-08-15',
    memberLimit: 30,
    town: '부산',
    memberCount: 25,
    isLiked: false,
    isCanceled: false,
    imageUrl: '/images/profile.png',
    isPast: false,
    clubStatus: 'pending',
  },
  {
    clubId: 3,
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
    clubStatus: 'confirmed',
  },
  {
    clubId: 4,
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
    isCanceled: true,
    imageUrl: '/images/profile.png',
    isPast: false,
    clubStatus: 'closed',
  },
  {
    clubId: 5,
    title: '비즈니스 책 모임',
    description:
      '비즈니스 전략과 아이디어를 다룬 책을 읽고 토론하는 모임입니다.',
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
    isPast: true,
    clubStatus: 'closed',
  },
  {
    clubId: 6,
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
    clubStatus: 'confirmed',
  },
  {
    clubId: 7,
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
    isCanceled: false,
    imageUrl: '/images/profile.png',
    isPast: false,
    clubStatus: 'pending',
  },
  {
    clubId: 8,
    title: '스타트업 독서 모임',
    description: '스타트업 관련 책을 읽고 창업 아이디어를 나누는 모임입니다.',
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
    clubStatus: 'confirmed',
  },
  {
    clubId: 9,
    title: '디지털 혁명',
    description: '디지털 시대 혁신적인 책을 읽고 토론하는 모임입니다.',
    meetingType: 'OFFLINE',
    bookClubType: 'FIXED',
    targetDate: '2024-09-05',
    endDate: '2024-11-05',
    memberLimit: 30,
    town: '부산',
    memberCount: 22,
    isLiked: false,
    isCanceled: false,
    imageUrl: '/images/profile.png',
    isPast: false,
    clubStatus: 'confirmed',
  },
  {
    clubId: 10,
    title: '인문학 읽기',
    description: '인문학적 사유를 통해 통찰을 얻는 독서 모임입니다.',
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
    clubStatus: 'confirmed',
  },
];

export default function JoinedClubList({ user, sortBy }: JoinedClubListProps) {
  console.log(user, sortBy);

  const router = useRouter();

  const [isModalOpen, setIsModalOpen] = useState(false);

  // const bookClubList: BookClub[] = [];
  const bookClubList = mockJoinedBookClubList;
  const NO_LIST_MESSAGE =
    '아직 신청한 모임이 없어요.\n지금 바로 책 모임을 신청해 보세요';

  //카드 컴포넌트 클릭 시 해당 모임 상세페이지로 라우팅
  const handleCardClick = (clubId: number) => {
    router.push(`/bookclub/${clubId}`);
  };

  const handleCancelClick = (clubId: number) => {
    alert(`${clubId}취소하기`);
    //TODO: 취소 확인 팝업 표시, API작업 필요
  };

  const handleDeleteClick = (clubId: number) => {
    alert(`${clubId}삭제하기`);
    //TODO: 삭제 확인 팝업 표시, API 작업 필요
  };

  const onSubmitReview = (rating: number, review: string) => {
    alert(`점수:${rating} 리뷰:${review}`);
    //TODO: API 작업 필요
    setIsModalOpen(false);
  };

  return (
    <div className="flex w-full flex-col items-center justify-center gap-y-[26px]">
      <WriteReviewModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={(rating, review) => onSubmitReview(rating, review)}
      />
      {bookClubList.length === 0 ? (
        <div className="flex h-full pt-[255px] text-center text-gray-normal-03">
          <span className="whitespace-pre-wrap">{NO_LIST_MESSAGE}</span>
        </div>
      ) : (
        bookClubList.map((bookClub, index) => (
          <div key={index} className="w-full">
            {/* TODO: isCanceled, imageUrl. isPast, status 수정 */}
            <Card
              variant="participatedClub"
              clubId={bookClub.clubId}
              isCanceled={bookClub.isCanceled}
              imageUrl={bookClub.imageUrl}
              title={bookClub.title}
              location={bookClub.town}
              datetime={bookClub.targetDate}
              meetingType={bookClub.meetingType}
              bookClubType={bookClub.bookClubType}
              isPast={bookClub.isPast}
              clubStatus={bookClub.clubStatus}
              onClick={(clubId) => handleCardClick(clubId)}
              onCancel={(clubId) => handleCancelClick(clubId)}
              onWriteReview={() => setIsModalOpen(true)}
              onDelete={(clubId) => handleDeleteClick(clubId)}
            />
          </div>
        ))
      )}
    </div>
  );
}
