import { CategoryTabs, FilterSection } from '@/components/common-layout';
import { BookClubParams } from '@/types/bookclubs';
import SearchInput from '@/components/input/search-input/SearchInput';
interface FilterBarProps {
  filters: BookClubParams;
  handleFilterChange: (newFilter: Partial<BookClubParams>) => void;
}

function FilterBar({ filters, handleFilterChange }: FilterBarProps) {
  return (
    <section className="flex w-full flex-col gap-y-3 px-[20px] pt-[20px] md:px-[24px] lg:px-[102px]">
      <CategoryTabs filters={filters} onFilterChange={handleFilterChange} />
      <SearchInput
        value={filters?.searchKeyword || ''}
        onChange={(e) => handleFilterChange({ searchKeyword: e.target.value })}
        aria-label="책 검색"
      />
      <FilterSection onFilterChange={handleFilterChange} />
    </section>
  );
}
export default FilterBar;
