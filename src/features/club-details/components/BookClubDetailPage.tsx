'use client';

import {
  DescriptionSection,
  HeaderSection,
  ReviewListSection,
  ReviewSummarySection,
} from '@/features/club-details/components';
import { useParams } from 'next/navigation';

function BookClubDetailPage() {
  const { id } = useParams();
  const idAsString = Array.isArray(id) ? id[0] : id || '';
  const idAsNumber = Number(idAsString);
  return (
    <div className="w-full min-w-[336px] px-[20px] md:px-[24px] lg:px-[102px]">
      <HeaderSection idAsNumber={idAsNumber} />
      <main className="flex flex-col gap-y-6">
        <DescriptionSection />
        <ReviewSummarySection idAsNumber={idAsNumber} />
        <ReviewListSection />
      </main>
    </div>
  );
}
export default BookClubDetailPage;
