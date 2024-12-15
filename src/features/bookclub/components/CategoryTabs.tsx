import Tab from '@/components/tab/Tab';
import { Filters } from '../types';

interface CategoryTabsProps {
  filters: Filters;
  onFilterChange: (newFilters: Partial<Filters>) => void;
}

function CategoryTabs({ filters, onFilterChange }: CategoryTabsProps) {
  return (
    <div>
      <Tab
        items={['전체', '자유책', '지정책'] as const}
        activeTab={filters.bookClubType || '전체'}
        onTabChange={(item: '전체' | '자유책' | '지정책') =>
          onFilterChange({ bookClubType: item })
        }
        tabType="MAIN_TAB"
      />
      <hr className="-mx-[20px] border-t border-gray-normal-01 md:-mx-[24px] lg:-mx-[102px]" />
    </div>
  );
}
export default CategoryTabs;
