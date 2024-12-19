import Tab from '@/components/tab/Tab';
import { Filters } from '../types/bookclubs';

interface CategoryTabsProps {
  filters: Filters;
  onFilterChange: (newFilters: Partial<Filters>) => void;
}

const TAB_LABELS = {
  ALL: '전체',
  FREE: '자유책',
  FIXED: '지정책',
} as const;

function CategoryTabs({ filters, onFilterChange }: CategoryTabsProps) {
  const activeTab = filters?.bookClubType || 'ALL';

  return (
    <div>
      <Tab
        items={Object.keys(TAB_LABELS) as (keyof typeof TAB_LABELS)[]}
        activeTab={activeTab}
        onTabChange={(item) => onFilterChange({ bookClubType: item })}
        tabType="MAIN_TAB"
      />
      <hr className="-mx-[20px] border-t border-gray-normal-01 md:-mx-[24px] lg:-mx-[102px]" />
    </div>
  );
}
export default CategoryTabs;
