'use client';

import Card from '@/components/card/Card';
import { formatDateForUI, isPastDate } from '@/lib/utils/formatDateForUI';
import { useRouter } from 'next/navigation';
import { useEffect, useMemo } from 'react';
import EmptyState from '@/components/common-layout/EmptyState';
import { clubStatus } from '@/lib/utils/clubUtils';
import { BookClub, BookClubParams } from '@/types/bookclubs';
import { useLikeClub, useLikeWithAuthCheck, useUnLikeClub } from '@/lib/hooks';
import { useAuthStore } from '@/store/authStore';
import PopUp from '@/components/pop-up/PopUp';
import { queryClient } from '@/lib/utils/reactQueryProvider';
import { useLikeContext } from '@/lib/contexts/LikeContext';

interface ClubListSectionProps {
  bookClubs: BookClub[];
  filter: BookClubParams;
}

function ClubListSection({ bookClubs = [], filter }: ClubListSectionProps) {
  const router = useRouter();
  const {
    isLikePopUpOpen,
    likePopUpLabel,
    onShowAuthPopUp,
    onCloseCheckAuthPopup,
  } = useLikeWithAuthCheck();
  const { onConfirmUnLike } = useUnLikeClub(filter);
  const { onConfirmLike } = useLikeClub(filter);
  const { isLoggedIn, checkLoginStatus, user } = useAuthStore();
  const { likedClubs, toggleLike } = useLikeContext();

  useEffect(() => {
    checkLoginStatus();
  }, [checkLoginStatus]);

  const today = useMemo(() => new Date(), []);

  // console.log('🔍 ClubListSection 데이터:', bookClubs);

  // ✅ `useState` 사용 대신 `useMemo`를 사용하여 SSR과 CSR의 `isLiked` 상태를 동기화
  const clientBookClubs = useMemo(() => {
    // ✅ Hydration 오류 방지: `likedClubs`가 `undefined`일 경우 빈 배열 반환
    if (likedClubs === undefined) return [];
    return bookClubs.map((club) => ({
      ...club,
      isLiked: likedClubs.has(club.id) ? true : club.isLiked,
    }));
  }, [bookClubs, likedClubs]);

  const handleLikeClub = (isLiked: boolean, id: number) => {
    if (!isLoggedIn) {
      onShowAuthPopUp();
      return;
    }

    toggleLike(id, !isLiked); // ✅ 전역 상태 업데이트

    if (isLiked) {
      onConfirmUnLike(id);
    } else {
      onConfirmLike(id);
    }

    queryClient.setQueryData(['bookClubs', 'list', filter], (oldData: any) =>
      oldData.map((club: BookClub) =>
        club.id === id ? { ...club, isLiked: !isLiked } : club,
      ),
    );
  };

  const handleLikePopUpConfirm = () => {
    router.push('/login');
  };

  return (
    <main className="flex w-full min-w-[336px] flex-1 flex-col items-center gap-y-[26px] bg-gray-light-01 px-[20px] pt-[18px] md:px-[24px] lg:px-[102px]">
      {clientBookClubs?.length > 0 ? (
        clientBookClubs.map((club) => (
          <Card
            key={club.id}
            clubId={club.id}
            imageUrl={club.imageUrl || '/images/defaultBookClub.jpg'}
            imageAlt={club.title}
            title={club.title}
            location={club.town || ''}
            datetime={formatDateForUI(club.targetDate, 'KOREAN')}
            isLiked={club.isLiked}
            current={club.memberCount}
            max={club.memberLimit}
            isPast={isPastDate(club.targetDate, today)} // 지난 모임 여부
            isCanceled={club.isInactive} // 모임 취소 여부
            bookClubType={club.bookClubType}
            meetingType={club.meetingType}
            clubStatus={clubStatus(
              club.memberCount,
              club.memberLimit,
              club.endDate,
              today,
            )}
            isHost={club.hostId === user?.id}
            onLikeClick={() => handleLikeClub(club.isLiked, club.id)}
            onClick={() => router.push(`/bookclub/${club.id}`)}
          />
        ))
      ) : (
        <EmptyState
          title="아직 책 모임이 없어요."
          subtitle="지금 바로 책 모임을 만들어보세요."
        />
      )}
      <PopUp
        isOpen={isLikePopUpOpen}
        isLarge={true}
        isTwoButton={true}
        label={likePopUpLabel}
        handlePopUpClose={onCloseCheckAuthPopup}
        handlePopUpConfirm={handleLikePopUpConfirm}
      />
    </main>
  );
}

export default ClubListSection;
