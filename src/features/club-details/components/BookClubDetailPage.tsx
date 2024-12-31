'use client';
import { useParams } from 'next/navigation';
import {
  DescriptionSection,
  HeaderSection,
  ReviewSection,
} from '@/features/club-details/components';

function BookClubDetailPage() {
  const { id } = useParams();
  const idAsString = Array.isArray(id) ? id[0] : id || '';
  const idAsNumber = Number(idAsString);
  return (
    <div className="w-full min-w-[336px] px-[20px] md:px-[24px] lg:px-[102px]">
      <HeaderSection idAsNumber={idAsNumber} />
      <main className="flex flex-col gap-y-6">
        <DescriptionSection />
        <ReviewSection idAsNumber={idAsNumber} />
      </main>
    </div>
  );
}
export default BookClubDetailPage;
