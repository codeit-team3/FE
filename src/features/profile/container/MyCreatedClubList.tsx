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
import Loading from '@/components/loading/Loading';

export default function MyCreatedClubList({ order }: ClubListProps) {
  const router = useRouter();
  const defaultClubImage = '/images/defaultBookClub.jpg';

  const { popUpState, onCancel, onConfirmCancel, onClosePopUp } =
    useCancelClub();

  const { data, isLoading, error } = useQuery(
    bookClubs.my()._ctx.created({ order, page: 1, size: 100 }),
  );

  const myCreatedList: BookClub[] = data?.bookClubs || [];

  const today = new Date();

  return (
    <div className="flex w-full flex-col items-center justify-center gap-y-[26px]">
      {error && <p>Error: {error.message}</p>}
      {isLoading ? (
        <Loading fullHeight={false} />
      ) : myCreatedList?.length === 0 ? (
        <div className="flex h-full pt-[255px] text-center text-gray-normal-03">
          <span className="whitespace-pre-wrap">
            {NO_LIST_MESSAGE['CREATED']}
          </span>
        </div>
      ) : (
        myCreatedList
          ?.filter((bookClub) => !bookClub.isInactive)
          ?.map((bookClub) => (
            <div key={bookClub.id} className="md:w-full">
              {/* TODO: isCanceled, imageUrl. isPast, status 수정 */}
              <Card
                variant="hostedClub"
                clubId={bookClub.id}
                imageUrl={bookClub.imageUrl || defaultClubImage}
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
                reviewScore={bookClub.averageScore}
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
