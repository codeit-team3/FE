'use client';

import {
  HeaderSection,
  FilterSection,
  ClubListSection,
  SearchSection,
} from '@/features/bookclub/components';
import CategoryTabs from './CategoryTabs';
import { BookClub, Filters } from '../types/bookclubs';
import { Dispatch, SetStateAction } from 'react';

interface BookClubMainPageProps {
  bookClubs: BookClub[];
  setBookClubs: Dispatch<SetStateAction<BookClub[]>>;
  loading: boolean;
  filters: Filters;
  onFilterChange: (newFilters: Partial<Filters>) => void;
}

function BookClubMainPage({
  bookClubs,
  setBookClubs,
  // loading,
  filters,
  onFilterChange,
}: BookClubMainPageProps) {
  return (
    <>
      <HeaderSection />
      <section className="flex w-full flex-col gap-y-3 px-[20px] pt-[20px] md:px-[24px] lg:px-[102px]">
        <CategoryTabs filters={filters} onFilterChange={onFilterChange} />
        <SearchSection
          searchValue={filters?.searchKeyword || ''}
          onSearchChange={(value: string) =>
            onFilterChange({ searchKeyword: value })
          }
        />
        <FilterSection
          bookClubs={bookClubs}
          setBookClubs={setBookClubs}
          onFilterChange={onFilterChange}
        />
      </section>
      <ClubListSection bookClubs={bookClubs} />
    </>
  );
}

export default BookClubMainPage;
