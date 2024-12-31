'use client';

import Card from '@/components/card/Card';
import { NO_LIST_MESSAGE } from '../constants/meassage';
import { useRouter } from 'next/navigation';
import { ClubListProps } from '../types';
import { bookClubs } from '@/api/book-club/react-query';
import { useQuery } from '@tanstack/react-query';
import PopUp from '@/components/pop-up/PopUp';
import { formatDateForUI, isPastDate } from '@/lib/utils/formatDateForUI';
import { clubStatus } from '@/lib/utils/clubUtils';
import { useCancelClub } from '@/lib/hooks/useCancelClub';
import { BookClub } from '@/types/bookclubs';

export default function MyCreatedClubList({ order }: ClubListProps) {
  const router = useRouter();

  const today = new Date();

  const { queryKey, queryFn } = bookClubs.myCreated({ order: order });

  const { data, isLoading, error } = useQuery({ queryKey, queryFn });

  const myCreatedList: BookClub[] = data?.data?.bookClubs || [];

  const { popUpState, onCancel, onConfirmCancel, onClosePopUp } =
    useCancelClub();

  return (
    <div className="flex w-full flex-col items-center justify-center gap-y-[26px]">
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {myCreatedList?.length === 0 ? (
        <div className="flex h-full pt-[255px] text-center text-gray-normal-03">
          <span className="whitespace-pre-wrap">
            {NO_LIST_MESSAGE['CREATED']}
          </span>
        </div>
      ) : (
        myCreatedList?.map((bookClub) => (
          <div key={bookClub.id} className="md:w-full">
            {/* TODO: isCanceled, imageUrl. isPast, status 수정 */}
            <Card
              variant="hostedClub"
              clubId={bookClub.id}
              imageUrl={bookClub.imageUrl || '/images/defaultBookClub.jpg'}
              title={bookClub.title}
              location={bookClub.town}
              datetime={formatDateForUI(bookClub.targetDate, 'KOREAN')}
              meetingType={bookClub.meetingType}
              bookClubType={bookClub.bookClubType}
              isPast={isPastDate(bookClub.targetDate, today)} //TODO: api 응답값에 따라 수정가능
              clubStatus={clubStatus(
                //TODO: api 응답값에 따라 수정가능
                bookClub.memberCount,
                bookClub.memberLimit,
                bookClub.endDate,
                today,
              )}
              reviewScore={bookClub.reviewScore}
              onClick={(clubId) => router.push(`/bookclub/${clubId}`)}
              onCancel={(clubId) => onCancel(clubId)}
            />
          </div>
        ))
      )}
      <PopUp
        isOpen={popUpState.isOpen}
        isLarge={true}
        isTwoButton={true}
        label={popUpState.label}
        handlePopUpClose={onClosePopUp}
        handlePopUpConfirm={onConfirmCancel}
      />
    </div>
  );
}
