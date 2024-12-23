import Tab from '@/components/tab/Tab';
import { BookClubParams } from '../../types/bookclubs';

interface CategoryTabsProps {
  filters: BookClubParams;
  onFilterChange: (newFilters: Partial<BookClubParams>) => void;
}

const TAB_LABELS = {
  ALL: '전체',
  FREE: '자유책',
  FIXED: '지정책',
} as const;

function CategoryTabs({ filters, onFilterChange }: CategoryTabsProps) {
  const activeTabKey = filters?.bookClubType || 'ALL';
  const activeTabLabel = TAB_LABELS[activeTabKey as keyof typeof TAB_LABELS];

  const handleTabChange = (selectedLabel: string) => {
    const selectedKey = (
      Object.keys(TAB_LABELS) as (keyof typeof TAB_LABELS)[]
    ).find((key) => TAB_LABELS[key] === selectedLabel);
    if (selectedKey) {
      onFilterChange({ bookClubType: selectedKey });
    }
  };

  return (
    <div>
      <Tab
        items={Object.values(TAB_LABELS)}
        activeTab={activeTabLabel}
        onTabChange={(item) => handleTabChange(item)}
        tabType="MAIN_TAB"
      />
      <hr className="-mx-[20px] border-t border-gray-normal-01 md:-mx-[24px] lg:-mx-[102px]" />
    </div>
  );
}
export default CategoryTabs;
