import Tab from '@/components/tab/Tab';
import { Filters } from '../types/bookclubs';
import { mapToApiBookClubType, mapToUiBookClubType } from '../utils/filters';

interface CategoryTabsProps {
  filters: Filters;
  onFilterChange: (newFilters: Partial<Filters>) => void;
}

function CategoryTabs({ filters, onFilterChange }: CategoryTabsProps) {
  const uiBookClubType = filters?.bookClubType
    ? mapToUiBookClubType(filters.bookClubType)
    : '전체';

  return (
    <div>
      <Tab
        items={['전체', '자유책', '지정책'] as const}
        activeTab={uiBookClubType}
        onTabChange={(item) =>
          onFilterChange({ bookClubType: mapToApiBookClubType(item) })
        }
        tabType="MAIN_TAB"
      />
      <hr className="-mx-[20px] border-t border-gray-normal-01 md:-mx-[24px] lg:-mx-[102px]" />
    </div>
  );
}
export default CategoryTabs;
