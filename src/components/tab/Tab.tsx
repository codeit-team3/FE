import { TabType } from '@/constants/tabs';
import Button from '@/components/button/Button';

interface TabProps<T extends string> {
  items: readonly T[];
  activeTab: T;
  onTabChange: (tab: T) => void;
  tabType: TabType;
}

const getTabStyles = {
  main: {
    base: 'text-xl border-b-4 rounded-none py-2 font-semibold transition-all',
    active: 'border-green-dark-01 text-green-dark-01',
    inactive: 'border-transparent text-gray-dark-02 hover:text-green-dark-01',
  },
  container: {
    MAIN_TAB: 'flex gap-4',
    SUB_TAB: 'flex gap-2',
  },
};

function Tab<T extends string>({
  items,
  activeTab,
  onTabChange,
  tabType,
}: TabProps<T>) {
  const renderMainTab = (item: T) => (
    <button
      key={item}
      onClick={() => onTabChange(item)}
      className={`${getTabStyles.main.base} ${
        activeTab === item
          ? getTabStyles.main.active
          : getTabStyles.main.inactive
      }`}
    >
      {item}
    </button>
  );

  const renderSubTab = (item: T) => (
    <Button
      key={item}
      text={item}
      size="custom"
      fillType="outline"
      themeColor={activeTab === item ? 'green-normal-01' : 'gray-dark-02'}
      onClick={() => onTabChange(item)}
      className={`flex h-[40px] items-center px-3.5 py-2.5 font-medium ${activeTab === item ? 'border-green-normal-01' : 'border-gray-normal-02'}`}
    />
  );

  return (
    <div className={getTabStyles.container[tabType]}>
      {items.map((item) =>
        tabType === 'SUB_TAB' ? renderSubTab(item) : renderMainTab(item),
      )}
    </div>
  );
}

export default Tab;
