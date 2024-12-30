import Card from '@/components/card/Card';
import { NO_LIST_MESSAGE } from '../../constants/meassage';
import { useRouter } from 'next/navigation';
import { BookClub } from '../../types';
import { bookClubs, useCancelBookClub } from '@/api/book-club/react-query';
import { orderType } from '@/types/bookclubs';
import { useQuery } from '@tanstack/react-query';
import PopUp from '@/components/pop-up/PopUp';
import { useState } from 'react';
import { showToast } from '@/components/toast/toast';
import { formatDateForUI, isPastDate } from '@/lib/utils/formatDateForUI';
import { clubStatus } from '@/lib/utils/clubUtils';

interface HostedClubListProps {
  order: orderType;
}

export default function HostedClubList({ order }: HostedClubListProps) {
  const router = useRouter();

  const [isPopUpOpen, setIsPopUpOpen] = useState(false);
  const [label, setLabel] = useState('');
  const [selectedClubId, setSelectedClubId] = useState<number | null>(null);
  const today = new Date();

  const { queryKey, queryFn } = bookClubs.myCreated({ order: order });

  const { data, isLoading, error } = useQuery({ queryKey, queryFn });
  const { mutateAsync: cancelClub } = useCancelBookClub();

  const myHostedList: BookClub[] = data?.data?.bookClubs || [];

  const onCancel = (clubId: number) => {
    setLabel('정말 모임을 취소하시겠어요?');
    setIsPopUpOpen(true);
    setSelectedClubId(clubId);
  };

  const onConfirmPopUp = async () => {
    try {
      if (selectedClubId) {
        const res = await cancelClub(selectedClubId);
        if (res) {
          showToast({
            message: '모임을 취소하였습니다.',
            type: 'success',
          });
        }
      }
    } catch (error) {
      showToast({
        message: '모임 취소를 실패하였습니다.',
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
      {myHostedList?.length === 0 ? (
        <div className="flex h-full pt-[255px] text-center text-gray-normal-03">
          <span className="whitespace-pre-wrap">
            {NO_LIST_MESSAGE['HOSTED']}
          </span>
        </div>
      ) : (
        myHostedList?.map((bookClub, index) => (
          <div key={index} className="md:w-full">
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
