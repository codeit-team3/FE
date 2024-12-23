'use client';

import {
  HeaderSection,
  FilterSection,
  ClubListSection,
  SearchSection,
} from '@/features/bookclub/components';
import CategoryTabs from './CategoryTabs';
import useBookClubList from '../hooks/useFetchBookClubList';

function BookClubMainPage() {
  // 커스텀 훅에서 상태와 핸들러 가져오기
  const { bookClubs, setBookClubs, filters, updateFilters } = useBookClubList();

  const handleFilterChange = (newFilter: Partial<typeof filters>) => {
    updateFilters(newFilter);
  };

  return (
    <>
      <HeaderSection />
      <section className="flex w-full flex-col gap-y-3 px-[20px] pt-[20px] md:px-[24px] lg:px-[102px]">
        <CategoryTabs filters={filters} onFilterChange={handleFilterChange} />
        <SearchSection
          searchValue={filters?.searchKeyword || ''}
          onSearchChange={(value: string) =>
            handleFilterChange({ searchKeyword: value })
          }
        />
        <FilterSection
          bookClubs={bookClubs}
          setBookClubs={setBookClubs}
          onFilterChange={handleFilterChange}
        />
      </section>
      <ClubListSection bookClubs={bookClubs} />
    </>
  );
}

export default BookClubMainPage;
