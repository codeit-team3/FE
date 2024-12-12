import Button from '@/components/button/Button';
// import DropDown from '@/components/drop-down/DropDown';
// import FilterCheckbox from '@/components/filter-checkbox/FilterCheckbox';
import SearchBox from '@/components/search-box/SearchBox';
// import SortingButton from '@/components/sorting-button/SortingButton';
import Tab from '@/components/tab/Tab';

interface HeaderProps {
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

function Header({
  searchValue,
  setSearchValue,
  selectedTab,
  setSelectedTab,
  // setSelectedOnOff,
  // setSelectedMemberCount,
  // selectedChecking,
  // setSelectedChecking,
  // setSelectedSorting,
}: HeaderProps) {
  return (
    <header>
      <div className="flex h-[120px] w-full min-w-[336px] items-center justify-between bg-green-light-01 px-[20px] md:px-[24px] lg:px-[102px]">
        <h1
          className="text-2xl font-bold text-black"
          aria-labelledby="header-title"
        >
          반가워요, <span className="text-green-normal-01">북코</span>님!
          <br />책 모임에 참여해 보세요
        </h1>
        <Button
          text="모임 만들기"
          size="small"
          fillType="solid"
          themeColor="green-normal-01"
        />
      </div>
      <section className="flex w-full flex-col gap-y-[10px] px-[20px] pt-[20px] md:px-[24px] lg:px-[102px]">
        <Tab
          items={['전체', '자유책', '지정책']}
          activeTab={selectedTab}
          onTabChange={(item) => {
            setSelectedTab(item);
          }}
          tabType="SUB_TAB"
        />
        <div className="bg-white">
          <SearchBox
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            aria-label="책 검색"
          />
        </div>

        {/* <div className="flex justify-between">
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
    </header>
  );
}
export default Header;
