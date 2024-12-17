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
    base: 'text-xl border-b-2 rounded-none px-4 py-2  transition-all',
    active: 'border-green-dark-01 text-green-dark-01',
    inactive: 'border-transparent text-gray-dark-02 hover:text-green-dark-01',
  },
  container: 'flex gap-2',
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
      size="modal"
      fillType="outline"
      themeColor={activeTab === item ? 'green-normal-01' : 'gray-normal-02'}
      onClick={() => onTabChange(item)}
    />
  );

  return (
    <div className={getTabStyles.container}>
      {items.map((item) =>
        tabType === 'SUB_TAB' ? renderSubTab(item) : renderMainTab(item),
      )}
    </div>
  );
}

export default Tab;
