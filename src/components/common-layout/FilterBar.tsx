import {
  CategoryTabs,
  SearchSection,
  FilterSection,
} from '@/components/common-layout';
import { BookClub, BookClubParams } from '@/types/bookclubs';
import { Dispatch, SetStateAction } from 'react';

interface FilterBarProps {
  filters: BookClubParams;
  handleFilterChange: (newFilter: Partial<BookClubParams>) => void;
  bookClubs: BookClub[];
  initialBookClubs: BookClub[];
  setBookClubs: Dispatch<SetStateAction<BookClub[]>>;
}

function FilterBar({
  filters,
  handleFilterChange,
  bookClubs,
  initialBookClubs,
  setBookClubs,
}: FilterBarProps) {
  return (
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
        initialBookClubs={initialBookClubs}
        setBookClubs={setBookClubs}
        onFilterChange={handleFilterChange}
      />
    </section>
  );
}
export default FilterBar;
