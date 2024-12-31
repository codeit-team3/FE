'use client';

import Card from '@/components/card/Card';
import { NO_LIST_MESSAGE } from '../constants/meassage';
import { useRouter } from 'next/navigation';
import { ClubListProps } from '../types';
// import { bookClubs } from '@/api/book-club/react-query';
// import { useQuery } from '@tanstack/react-query';
// import PopUp from '@/components/pop-up/PopUp';
import { formatDateForUI, isPastDate } from '@/lib/utils/formatDateForUI';
import { clubStatus } from '@/lib/utils/clubUtils';
// import { useCancelClub } from '@/lib/hooks/useCancelClub';
import { mockBookClubs } from '../../../mocks/mockDatas';
import { BookClub } from '@/types/bookclubs';

export default function CreatedClubList({ user, order }: ClubListProps) {
  const router = useRouter();

  const today = new Date();

  console.log(user, order);

  // const { queryKey, queryFn } = bookClubs.myCreated({ order: order });

  // const { data, isLoading, error } = useQuery({ queryKey, queryFn });

  // const myCreatedList: BookClub[] = data?.data?.bookClubs || [];
  const myCreatedList: BookClub[] = mockBookClubs;

  // 카드 클릭 이벤트
  const onClick = (clubId: number) => {
    alert(clubId);
    router.push(`/bookclub/${clubId}`);
  };

  const onLikeClick = (clubId: number) => {
    alert(clubId);
  };

  return (
    <div className="flex w-full flex-col items-center justify-center gap-y-[26px]">
      {/* {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>} */}
      {myCreatedList?.length === 0 ? (
        <div className="flex h-full pt-[255px] text-center text-gray-normal-03">
          <span className="whitespace-pre-wrap">
            {NO_LIST_MESSAGE['CREATED']}
          </span>
        </div>
      ) : (
        myCreatedList?.map((bookClub) => (
          <div key={bookClub.id} className="md:w-full">
            {/* TODO: imageUrl. isPast, status 수정 */}
            {!bookClub.isInactive && (
              <Card
                variant="defaultClub"
                clubId={bookClub.id}
                imageUrl={bookClub.imageUrl || '/images/defaultBookClub.jpg'}
                imageAlt="club_image"
                title={bookClub.title}
                location={bookClub.town}
                datetime={formatDateForUI(bookClub.targetDate, 'KOREAN')}
                isLiked={bookClub.isLiked}
                current={bookClub.memberCount}
                max={bookClub.memberLimit}
                isPast={isPastDate(bookClub.targetDate, today)}
                isCanceled={bookClub.isInactive}
                meetingType={bookClub.meetingType}
                bookClubType={bookClub.bookClubType}
                clubStatus={clubStatus(
                  bookClub.memberCount,
                  bookClub.memberLimit,
                  bookClub.endDate,
                  today,
                )}
                isMyPage={false}
                onClick={() => onClick(bookClub.id)}
                onLikeClick={() => onLikeClick(bookClub.id)}
              />
            )}
          </div>
        ))
      )}
      {/* <PopUp
        isOpen={popUpState.isOpen}
        isLarge={true}
        isTwoButton={true}
        label={popUpState.label}
        handlePopUpClose={onClosePopUp}
        handlePopUpConfirm={onConfirmCancel}
      /> */}
    </div>
  );
}
