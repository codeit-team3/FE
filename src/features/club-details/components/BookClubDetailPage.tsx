import {
  DescriptionSection,
  HeaderSection,
  ReviewListSection,
  ReviewSummarySection,
} from '@/features/club-details/components';

function BookClubDetailPage() {
  return (
    <div className="w-full min-w-[336px] px-[20px] md:px-[24px] lg:px-[102px]">
      <HeaderSection />
      <main className="flex flex-col gap-y-6">
        <DescriptionSection />
        <ReviewSummarySection />
        <ReviewListSection />
      </main>
    </div>
  );
}
export default BookClubDetailPage;
