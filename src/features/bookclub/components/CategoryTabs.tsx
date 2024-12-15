import Tab from '@/components/tab/Tab';
import { useState } from 'react';

function CategoryTabs() {
  const [selectedTab, setSelectedTab] = useState('전체');
  return (
    <div>
      <Tab
        items={['전체', '자유책', '지정책']}
        activeTab={selectedTab}
        onTabChange={(item) => setSelectedTab(item)}
        tabType="MAIN_TAB"
      />
      <hr className="-mx-[20px] border-t border-gray-normal-01 md:-mx-[24px] lg:-mx-[102px]" />
    </div>
  );
}
export default CategoryTabs;
