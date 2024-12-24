import Card from '@/components/card/Card';
import { NO_LIST_MESSAGE } from '../../constants/meassage';
import { BookClub, orderType } from '../../types';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { WriteReviewModal } from '../clubs';
import { formatDateForUI } from '@/lib/utils/formatDateForUI';
import { useQuery } from '@tanstack/react-query';
import { bookClubs } from '@/features/react-query/book-club';

interface JoinedClubListProps {
  order: orderType;
}

export default function JoinedClubList({ order }: JoinedClubListProps) {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { queryKey, queryFn } = bookClubs.myJoined({ order: order });
  const { data, isLoading, error } = useQuery({
    queryKey,
    queryFn,
  });

  const myJoinedList: BookClub[] = data?.data?.bookClubs || [];

  // 카드 클릭 이벤트
  const handleCardClick = (clubId: number) => {
    router.push(`/bookclub/${clubId}`);
  };

  const handleCancelClick = (clubId: number) => {
    alert(`${clubId} 취소하기`);
  };

  const handleDeleteClick = (clubId: number) => {
    alert(`${clubId} 삭제하기`);
  };

  const onSubmitReview = (rating: number, review: string) => {
    alert(`점수: ${rating} 리뷰: ${review}`);
    setIsModalOpen(false);
  };

  return (
    <div className="flex w-full flex-col items-center justify-center gap-y-[26px]">
      <WriteReviewModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={(rating, review) => onSubmitReview(rating, review)}
      />
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {myJoinedList?.length === 0 ? (
        <div className="flex h-full pt-[255px] text-center text-gray-normal-03">
          <span className="whitespace-pre-wrap">
            {NO_LIST_MESSAGE['JOINED']}
          </span>
        </div>
      ) : (
        myJoinedList?.map((bookClub, index) => (
          <div key={index} className="md:w-full">
            <Card
              variant="participatedClub"
              clubId={bookClub.id}
              isCanceled={bookClub.isCanceled}
              imageUrl={bookClub.imageUrl || '/images/defaultBookClub.jpg'}
              title={bookClub.title}
              location={bookClub.town}
              datetime={formatDateForUI(bookClub.targetDate, 'KOREAN')}
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
