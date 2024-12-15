// import DropDown from '@/components/drop-down/DropDown';
// import FilterCheckbox from '@/components/filter-checkbox/FilterCheckbox';
import SearchBox from '@/components/search-box/SearchBox';
// import SortingButton from '@/components/sorting-button/SortingButton';
import Tab from '@/components/tab/Tab';

interface FilterSectionProps {
  searchValue: string;
  setSearchValue: (value: string) => void;
  selectedTab: string;
  setSelectedTab: (value: string) => void;
  // setSelectedOnOff: (value: string | undefined) => void;
  // setSelectedMemberCount: (value: string | undefined) => void;
  // selectedChecking: boolean;
  // setSelectedChecking: (value: boolean) => void;
  // setSelectedSorting: (value: string | undefined) => void;
}

function FilterSection({
  searchValue,
  setSearchValue,
  selectedTab,
  setSelectedTab,
  // setSelectedOnOff,
  // setSelectedMemberCount,
  // selectedChecking,
  // setSelectedChecking,
  // setSelectedSorting,
}: FilterSectionProps) {
  return (
    <section className="flex w-full flex-col gap-y-[10px] px-[20px] pt-[20px] md:px-[24px] lg:px-[102px]">
      <div>
        <Tab
          items={['전체', '자유책', '지정책']}
          activeTab={selectedTab}
          onTabChange={(item) => setSelectedTab(item)}
          tabType="MAIN_TAB"
        />
        <hr className="-mx-[20px] border-t border-gray-normal-01 md:-mx-[24px] lg:-mx-[102px]" />
      </div>
      <div className="bg-white">
        <SearchBox
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          aria-label="책 검색"
        />
      </div>
      {/* <div className="flex w-full gap-x-2 overflow-x-auto whitespace-nowrap sm:justify-between [&::-webkit-scrollbar]:hidden">
        <div className="flex items-center gap-x-2">
          <DropDown
            variant="onOff"
            onChangeSelection={setSelectedOnOff}
            aria-label="온라인/오프라인 선택"
          />
          <DropDown
            variant="memberCount"
            onChangeSelection={setSelectedMemberCount}
            aria-label="인원 수 선택"
          />
          <FilterCheckbox
            label="신청가능"
            checked={selectedChecking}
            onChange={(e) => setSelectedChecking(e.target.checked)}
            aria-label="신청가능 필터"
          />
        </div>
        <SortingButton
          variant="byDeadline"
          onClickSorting={setSelectedSorting}
          aria-label="마감임박 정렬"
        />
      </div> */}
    </section>
  );
}

export default FilterSection;
