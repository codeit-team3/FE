import {
  CategoryTabs,
  SearchSection,
  FilterSection,
} from '@/components/common-layout';
import { BookClubParams } from '@/types/bookclubs';

interface FilterBarProps {
  filters: BookClubParams;
  handleFilterChange: (newFilter: Partial<BookClubParams>) => void;
}

function FilterBar({ filters, handleFilterChange }: FilterBarProps) {
  return (
    <section className="flex w-full flex-col gap-y-3 px-[20px] pt-[20px] md:px-[24px] lg:px-[102px]">
      <CategoryTabs filters={filters} onFilterChange={handleFilterChange} />
      <SearchSection
        searchValue={filters?.searchKeyword || ''}
        onSearchChange={(value: string) =>
          handleFilterChange({ searchKeyword: value })
        }
      />
      <FilterSection onFilterChange={handleFilterChange} />
    </section>
  );
}
export default FilterBar;
