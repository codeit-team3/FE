import Card from '@/components/card/Card';
import { NO_LIST_MESSAGE } from '../../constants/meassage';
import { formatDateWithTime } from '@/lib/utils/dateUtils';
import { orderType, User, BookClub } from '../../types';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { WriteReviewModal } from '../clubs';
// import useFetchMyJoinedList from '../../hooks/useFetchMyJoinedList';

interface JoinedClubListProps {
  user: User | null;
  order: orderType;
}

export default function JoinedClubList({ user, order }: JoinedClubListProps) {
  console.log(user, order);

  const router = useRouter();

  const [isModalOpen, setIsModalOpen] = useState(false);
  // const { myJoinedList, isLoading, error } = useFetchMyJoinedList(order);

  // console.log(isLoading);
  // console.error(error);

  // const bookClubList = myJoinedList;

  // console.log(bookClubList);
  const bookClubList: BookClub[] = [];
  // const bookClubList = mockJoinedBookClubList;

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
      {bookClubList?.length === 0 ? (
        <div className="flex h-full pt-[255px] text-center text-gray-normal-03">
          <span className="whitespace-pre-wrap">
            {NO_LIST_MESSAGE['JOINED']}
          </span>
        </div>
      ) : (
        bookClubList?.map((bookClub, index) => (
          <div key={index} className="md:w-full">
            {/* TODO: isCanceled, imageUrl. isPast, status 수정 */}
            <Card
              variant="participatedClub"
              clubId={bookClub.clubId}
              isCanceled={bookClub.isCanceled}
              imageUrl={bookClub.imageUrl || '/images/defaultBookClub.jpg'}
              title={bookClub.title}
              location={bookClub.town}
              datetime={formatDateWithTime(bookClub.targetDate)}
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
