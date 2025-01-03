'use client';

import Card from '@/components/card/Card';
import { NO_LIST_MESSAGE } from '../constants/meassage';
import { ClubListProps } from '../types';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { WriteReviewModal } from '../components/clubs';
import { formatDateForUI, isPastDate } from '@/lib/utils/formatDateForUI';
import { useQuery } from '@tanstack/react-query';
import PopUp from '@/components/pop-up/PopUp';
import { clubStatus } from '@/lib/utils/clubUtils';
import {
  bookClubs,
  useLeaveBookClub,
  useWriteReview,
} from '@/api/book-club/react-query';
import { showToast } from '@/components/toast/toast';
import { BookClub } from '@/types/bookclubs';

export default function MyJoinedClubList({ order }: ClubListProps) {
  const router = useRouter();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);
  const [label, setLabel] = useState('');
  const [selectedClubId, setSelectedClubId] = useState<number | null>(null);

  const today = new Date();

  const { queryKey, queryFn } = bookClubs.my()._ctx.joined({
    order: order,
  });
  const { data, isLoading, error } = useQuery({
    queryKey,
    queryFn,
  });
  const { mutateAsync: leaveClub } = useLeaveBookClub();
  const { mutate: writeReview } = useWriteReview();

  // useEffect(() => {
  //   if (!user) {
  //     showToast({
  //       message: '유효한 사용자 정보가 없습니다.',
  //       type: 'error',
  //     });
  //   }
  // }, [user]);

  // if (!user) return null;

  const myJoinedList: BookClub[] = data?.data?.bookClubs || [];

  // 카드 클릭 이벤트
  const onClick = (clubId: number) => {
    router.push(`/bookclub/${clubId}`);
  };

  //모임 참가하기 취소 클릭 이벤트
  const onCancel = (clubId: number) => {
    setLabel('정말 모임 참여를 취소하시겠어요?');
    setIsPopUpOpen(true);
    setSelectedClubId(clubId);
  };

  //모임 삭제하기 클릭 이벤트
  const onDelete = async (clubId: number) => {
    try {
      const res = await leaveClub(clubId);
      console.log(res);
      if (res) {
        showToast({
          message: '취소된 모임을 삭제하였습니다.',
          type: 'success',
        });
      }
    } catch (error) {
      showToast({
        message: '모임삭제를 실패하였습니다.',
        type: 'error',
      });
      console.error(error);
    }
  };

  //리뷰 작성하기 클릭 이벤트
  const onWriteReview = (clubId: number) => {
    setIsModalOpen(true);
    setSelectedClubId(clubId);
  };

  const onConfirmReview = (rating: number, content: string) => {
    //TODO: 토스트 메시지가 뜨더라도 모달이 열린 상태로 유지되도록 수정
    if (!rating || !content) {
      showToast({ message: '점수와 리뷰 내용을 입력해주세요', type: 'error' });
      return;
    }

    if (selectedClubId) {
      writeReview({ bookClubId: selectedClubId, rating, content });
      setIsModalOpen(false);
      setSelectedClubId(null);
    }
  };

  const onConfirmPopUp = async () => {
    try {
      if (selectedClubId) {
        const res = await leaveClub(selectedClubId);
        if (res) {
          showToast({
            message: '모임 참여를 취소하였습니다.',
            type: 'success',
          });
        }
      }
    } catch (error) {
      showToast({
        message: '모임 참여를 취소를 실패하였습니다.',
        type: 'error',
      });
      console.error(error);
    } finally {
      setIsPopUpOpen(false);
      setSelectedClubId(null);
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
        myJoinedList?.map((bookClub) => (
          <div key={bookClub.id} className="md:w-full">
            <Card
              variant="participatedClub"
              clubId={bookClub.id}
              isCanceled={bookClub.isInactive} //TODO: api 응답값에 따라 수정가능
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
