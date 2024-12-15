'use client';

import {
  HeaderSection,
  FilterSection,
  ClubListSection,
} from '@/features/bookclub/components';
import CategoryTabs from './CategoryTabs';

function BookClubMainPage() {
  return (
    <>
      <HeaderSection />
      <section className="flex w-full flex-col gap-y-3 px-[20px] pt-[20px] md:px-[24px] lg:px-[102px]">
        <CategoryTabs />
        <FilterSection />
      </section>
      <ClubListSection />
    </>
  );
}

export default BookClubMainPage;
