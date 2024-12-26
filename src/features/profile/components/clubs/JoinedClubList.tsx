import Card from '@/components/card/Card';
import { NO_LIST_MESSAGE } from '../../constants/meassage';
import { BookClub, orderType } from '../../types';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { WriteReviewModal } from '../clubs';
import { formatDateForUI, isPastDate } from '@/lib/utils/formatDateForUI';
import { useQuery } from '@tanstack/react-query';
import {
  bookClubs,
  useLeaveBookClub,
  useWriteReview,
} from '@/api/react-query/book-club';
import PopUp from '@/components/pop-up/PopUp';
import { clubStatus } from '@/lib/utils/clubUtils';
import { showToast } from '@/components/toast/toast';

interface JoinedClubListProps {
  order: orderType;
}

export default function JoinedClubList({ order }: JoinedClubListProps) {
  const router = useRouter();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);
  const [label, setLabel] = useState('');
  const [selectedClubId, setSelectedClubId] = useState<number | null>(null);
  const today = new Date();

  const { queryKey, queryFn } = bookClubs.myJoined({ order: order });
  const { data, isLoading, error } = useQuery({
    queryKey,
    queryFn,
  });
  const { mutate: leaveClub } = useLeaveBookClub();
  const { mutate: writeReview } = useWriteReview();

  const myJoinedList: BookClub[] = data?.data?.bookClubs || [];

  // 카드 클릭 이벤트
  const onClick = (clubId: number) => {
    router.push(`/bookclub/${clubId}`);
  };

  //모임 참가하기 취소 클릭 이벤트
  const onCancel = async (clubId: number) => {
    setLabel('정말 모임 참여를 취소하시겠어요?');
    setIsPopUpOpen(true);
    setSelectedClubId(clubId);
  };

  //모임 삭제하기 클릭 이벤트
  const onDelete = (clubId: number) => {
    leaveClub(clubId);
    showToast({ message: '취소된 모임을 삭제하였습니다.', type: 'success' });
  };

  //리뷰 작성하기 클릭 이벤트
  const onWriteReview = (clubId: number) => {
    setIsModalOpen(true);
    setSelectedClubId(clubId);
  };

  const onConfirmReview = (rating: number, content: string) => {
    //TODO: 토스트 메시지가 뜨더라도 모달이 열린 상태로 유지되도록 수정
    if (!rating || !content) {
      showToast({
        message: '점수와 리뷰 내용을 모두 입력해주세요',
        type: 'error',
      });
      return;
    }

    if (selectedClubId) {
      writeReview({ bookClubId: selectedClubId, rating, content });
      setIsModalOpen(false);
      setSelectedClubId(null);
    }
  };

  const onConfirmPopUp = async () => {
    if (selectedClubId) {
      try {
        await leaveClub(selectedClubId);
        // showToast({ message: '모임 참여가 취소되었습니다.', type: 'success' });
        setIsPopUpOpen(false);
        setSelectedClubId(null);
      } catch (err) {
        // showToast({
        //   message: '모임 참여 취소에 실패하였습니다',
        //   type: 'error',
        // });
        console.error(err);
      }
    }
  };

  return (
    <div className="flex w-full flex-col items-center justify-center gap-y-[26px]">
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
              isCanceled={bookClub.isCanceled} //TODO: api 응답값에 따라 수정가능
              imageUrl={bookClub.imageUrl || '/images/defaultBookClub.jpg'}
              title={bookClub.title}
              location={bookClub.town}
              datetime={formatDateForUI(bookClub.targetDate, 'KOREAN')}
              meetingType={bookClub.meetingType}
              bookClubType={bookClub.bookClubType}
              isPast={isPastDate(bookClub.targetDate, today)}
              clubStatus={clubStatus(
                bookClub.memberCount,
                bookClub.memberLimit,
                bookClub.endDate,
                today,
              )}
              onClick={(clubId) => onClick(clubId)}
              onCancel={(clubId) => onCancel(clubId)}
              onWriteReview={(clubId) => onWriteReview(clubId)}
              onDelete={(clubId) => onDelete(clubId)}
            />
          </div>
        ))
      )}
      <WriteReviewModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={(rating, content) => onConfirmReview(rating, content)}
      />
      <PopUp
        isOpen={isPopUpOpen}
        isLarge={true}
        isTwoButton={true}
        label={label}
        handlePopUpClose={() => setIsPopUpOpen(false)}
        handlePopUpConfirm={onConfirmPopUp}
      />
    </div>
  );
}
