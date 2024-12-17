import Tab from '@/components/tab/Tab';
import { Filters } from '../types/bookclubs';

interface CategoryTabsProps {
  filters: Filters;
  onFilterChange: (newFilters: Partial<Filters>) => void;
}

function CategoryTabs({ filters, onFilterChange }: CategoryTabsProps) {
  return (
    <div>
      <Tab
        items={['ALL', 'FREE', 'FIXED'] as const}
        activeTab={filters.bookClubType || 'ALL'}
        onTabChange={(item) => onFilterChange({ bookClubType: item })}
        tabType="MAIN_TAB"
      />
      <hr className="-mx-[20px] border-t border-gray-normal-01 md:-mx-[24px] lg:-mx-[102px]" />
    </div>
  );
}
export default CategoryTabs;
