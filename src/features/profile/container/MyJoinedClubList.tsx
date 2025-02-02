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
import { TOAST_MESSAGES } from '@/constants/messages/toast';
import { BookClub } from '@/types/bookclubs';
import Loading from '@/components/loading/Loading';
import { useAuthStore } from '@/store/authStore';

export default function MyJoinedClubList({ order }: ClubListProps) {
  const router = useRouter();

  const { user } = useAuthStore();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);
  const [label, setLabel] = useState('');
  const [selectedClubId, setSelectedClubId] = useState<number | null>(null);

  const today = new Date();
  const defaultClubImage = '/images/defaultBookClub.jpg';
  const { data, isLoading, error } = useQuery(
    bookClubs.my()._ctx.joined({ order, page: 1, size: 100 }),
  );

  const { mutateAsync: leaveClub } = useLeaveBookClub();
  const { mutate: writeReview } = useWriteReview();

  const myJoinedList: BookClub[] = data?.bookClubs || [];

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
      if (res) {
        showToast({
          message: TOAST_MESSAGES.SUCCESS.CLUB_DELETE,
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
      showToast({
        message: TOAST_MESSAGES.ERROR.REVIEW_VALIDATION,
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
    try {
      if (selectedClubId) {
        const res = await leaveClub(selectedClubId);
        if (res) {
          showToast({
            message: TOAST_MESSAGES.SUCCESS.CLUB_LEAVE,
            type: 'success',
          });
        }
      }
    } catch (error) {
      showToast({
        message: TOAST_MESSAGES.ERROR.CLUB_LEAVE_FAILED,
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
      {error && <p>Error: {error.message}</p>}
      {isLoading ? (
        <Loading fullHeight={false} />
      ) : myJoinedList?.length === 0 ? (
        <div className="flex h-full pt-[255px] text-center text-gray-normal-03">
          <span className="whitespace-pre-wrap">
            {NO_LIST_MESSAGE['JOINED']}
          </span>
        </div>
      ) : (
        myJoinedList
          ?.filter(
            (bookClub) =>
              bookClub.hostId !== user?.id && bookClub.isJoined === true,
          )
          ?.map((bookClub) => (
            <div key={bookClub.id} className="md:w-full">
              <Card
                variant="participatedClub"
                clubId={bookClub.id}
                isCanceled={bookClub.isInactive}
                imageUrl={bookClub.imageUrl || defaultClubImage}
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
