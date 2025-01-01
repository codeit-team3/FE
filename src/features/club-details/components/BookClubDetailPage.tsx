'use client';
import { useParams } from 'next/navigation';
import {
  DescriptionSection,
  HeaderSection,
  ReviewSection,
} from '@/features/club-details/components';
import { useClubDetails } from '../hooks/useClubDetails';
import Loading from '@/components/loading/Loading';

function BookClubDetailPage() {
  const { id } = useParams();
  const idAsString = Array.isArray(id) ? id[0] : id || '';
  const idAsNumber = Number(idAsString);

  const {
    clubInfo,
    isLoading,
    error,
    popUpState,
    onCancel,
    onConfirmCancel,
    onClosePopUp,
  } = useClubDetails(idAsNumber);

  if (error) {
    return <p>Error: {error.message}</p>; // 에러 처리 로직 추가 가능
  }

  return (
    <>
      {isLoading ? (
        <div className="flex h-[400px] justify-center">
          <Loading />
        </div>
      ) : (
        <div className="w-full min-w-[336px] px-[20px] pb-[46px] md:px-[24px] md:pb-[38px] lg:px-[102px]">
          <HeaderSection
            clubInfo={clubInfo}
            popUpState={popUpState}
            onCancel={onCancel}
            onConfirmCancel={onConfirmCancel}
            onClosePopUp={onClosePopUp}
            idAsNumber={idAsNumber}
          />
          <main className="flex flex-col gap-y-6">
            <DescriptionSection clubInfo={clubInfo} />
            <ReviewSection idAsNumber={idAsNumber} />
          </main>
        </div>
      )}
    </>
  );
}
export default BookClubDetailPage;
