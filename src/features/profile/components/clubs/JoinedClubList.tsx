import Card from '@/components/card/Card';
import { NO_LIST_MESSAGE } from '../../constants/meassage';
import { BookClub, orderType } from '../../types';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { WriteReviewModal } from '../clubs';
import { formatDateForUI } from '@/lib/utils/formatDateForUI';
import { useQuery } from '@tanstack/react-query';
import { bookClubs, useLeaveBookClub } from '@/features/react-query/book-club';
import PopUp from '@/components/pop-up/PopUp';

interface JoinedClubListProps {
  order: orderType;
}

export default function JoinedClubList({ order }: JoinedClubListProps) {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);
  const [label, setLabel] = useState('');
  const [selectedClubId, setSelectedClubId] = useState<number | null>(null);

  const { queryKey, queryFn } = bookClubs.myJoined({ order: order });
  const { data, isLoading, error } = useQuery({
    queryKey,
    queryFn,
  });
  const { mutate: leaveClub } = useLeaveBookClub();

  const myJoinedList: BookClub[] = data?.data?.bookClubs || [];

  // 카드 클릭 이벤트
  const handleCardClick = (clubId: number) => {
    router.push(`/bookclub/${clubId}`);
  };

  //모임 참가하기 취소 클릭 이벤트
  const handleCancelClick = async (clubId: number) => {
    setLabel('정말 모임 참여를 취소하시겠어요?');
    setIsPopUpOpen(true);
    setSelectedClubId(clubId);
  };

  const handleDeleteClick = (clubId: number) => {
    leaveClub(clubId);
    alert(`${clubId} 삭제하기`);
  };

  //TODO: 리뷰 작성하기 API 연결
  const onSubmitReview = (rating: number, review: string) => {
    alert(`점수: ${rating} 리뷰: ${review}`);
    setIsModalOpen(false);
  };

  const handlePopUpConfirm = () => {
    if (selectedClubId) {
      leaveClub(selectedClubId); // 모임 탈퇴
      setIsPopUpOpen(false); // 팝업 닫기
      setSelectedClubId(null); // 선택된 clubId 초기화
    }
  };

  return (
    <div className="flex w-full flex-col items-center justify-center gap-y-[26px]">
      <WriteReviewModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={(rating, review) => onSubmitReview(rating, review)}
      />
      <PopUp
        isOpen={isPopUpOpen}
        isLarge={true}
        isTwoButton={true}
        label={label}
        handlePopUpClose={() => setIsPopUpOpen(false)}
        handlePopUpConfirm={handlePopUpConfirm}
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
