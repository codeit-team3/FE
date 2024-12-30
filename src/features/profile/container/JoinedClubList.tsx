'use client';

import Card from '@/components/card/Card';
import { NO_LIST_MESSAGE } from '../constants/meassage';
import { ClubListProps } from '../types';
import { useRouter } from 'next/navigation';
// import { useState } from 'react';
// import { WriteReviewModal } from '../components/clubs';
import { formatDateForUI, isPastDate } from '@/lib/utils/formatDateForUI';
// import { useQuery } from '@tanstack/react-query';
// import PopUp from '@/components/pop-up/PopUp';
import { clubStatus } from '@/lib/utils/clubUtils';
import { BookClub } from '@/types/bookclubs';
import { mockBookClubs } from '../constants/mock';

export default function JoinedClubList({ user, order }: ClubListProps) {
  const router = useRouter();

  console.log(user, order);
  const today = new Date();

  // const { queryKey, queryFn } = bookClubs.myJoined({ order: order });
  // const { data, isLoading, error } = useQuery({
  //   queryKey,
  //   queryFn,
  // });

  // const myJoinedList: BookClub[] = data?.data?.bookClubs || [];
  const myJoinedList: BookClub[] = mockBookClubs;

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
      {myJoinedList?.length === 0 ? (
        <div className="flex h-full pt-[255px] text-center text-gray-normal-03">
          <span className="whitespace-pre-wrap">
            {NO_LIST_MESSAGE['JOINED']}
          </span>
        </div>
      ) : (
        myJoinedList?.map((bookClub) => (
          <div key={bookClub.id} className="md:w-full">
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
      {/* <WriteReviewModal
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
      /> */}
    </div>
  );
}
