import Card from '@/components/card/Card';
import { NO_LIST_MESSAGE } from '../../constants/meassage';
import { useRouter } from 'next/navigation';
import { User } from '../../types';
import { formatDateWithTime } from '@/lib/utils/dateUtils';
import { mockJoinedBookClubList } from '../../constants/temp';

interface HostedClubListProps {
  user: User | null;
  sortBy: string | undefined;
}

export default function HostedClubList({ user, sortBy }: HostedClubListProps) {
  console.log(user);
  console.log(sortBy);

  // const bookClubList: BookClub[] = [];
  const bookClubList = mockJoinedBookClubList;

  const router = useRouter();

  const handleCancelClick = (clubId: number) => {
    alert(`${clubId}취소하기`);
    //TODO: 취소 확인 팝업 표시, API작업 필요
  };

  return (
    <div className="flex w-full flex-col items-center justify-center gap-y-[26px]">
      {bookClubList.length === 0 ? (
        <div className="flex h-full pt-[255px] text-center text-gray-normal-03">
          <span className="whitespace-pre-wrap">
            {NO_LIST_MESSAGE['HOSTED']}
          </span>
        </div>
      ) : (
        bookClubList.map((bookClub, index) => (
          <div key={index} className="md:w-full">
            {/* TODO: isCanceled, imageUrl. isPast, status 수정 */}
            <Card
              variant="hostedClub"
              clubId={bookClub.clubId}
              imageUrl={bookClub.imageUrl || '/images/defaultBookClub.jpg'}
              title={bookClub.title}
              location={bookClub.town}
              datetime={formatDateWithTime(bookClub.targetDate)}
              meetingType={bookClub.meetingType}
              bookClubType={bookClub.bookClubType}
              isPast={bookClub.isPast}
              clubStatus={bookClub.clubStatus}
              reviewScore={bookClub.reviewScore}
              onClick={(clubId) => router.push(`/bookclub/${clubId}`)}
              onCancel={(clubId) => handleCancelClick(clubId)}
            />
          </div>
        ))
      )}
    </div>
  );
}
