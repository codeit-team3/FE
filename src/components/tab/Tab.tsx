import { TabType } from '@/constants/tabs';

interface TabProps<T extends string> {
  items: readonly T[];
  activeTab: T;
  onTabChange: (tab: T) => void;
  tabType: TabType;
}

function Tab<T extends string>({
  items,
  activeTab,
  onTabChange,
  tabType,
}: TabProps<T>) {
  const getTabStyle = () => {
    switch (tabType) {
      case 'MAIN_TAB':
        return 'text-xl';
      case 'SUB_TAB':
        return 'text-lg';
    }
  };

  return (
    <div className="flex border-b border-gray-dark-02">
      {items.map((item) => (
        <button
          key={item}
          onClick={() => onTabChange(item)}
          className={`${getTabStyle()} px-4 py-2 font-semibold hover:scale-105 ${
            activeTab === item
              ? 'border-b-2 border-green-dark-01 text-green-dark-01'
              : 'text-gray-dark-02'
          }`}
        >
          {item}
        </button>
      ))}
    </div>
  );
}

export default Tab;
