'use client';

import DropDown from '@/components/drop-down/DropDown';
import FilterCheckbox from '@/components/filter-checkbox/FilterCheckbox';
import SearchBox from '@/components/search-box/SearchBox';
import { useState } from 'react';
import SortingButton from '@/components/sorting-button/SortingButton';

function FilterSection() {
  const [showAvailableOnly, setShowAvailableOnly] = useState(false); // 신청가능
  const [searchValue, setSearchValue] = useState(''); // 검색

  return (
    <>
      <div className="bg-white">
        <SearchBox
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          aria-label="책 검색"
        />
      </div>
      <div className="flex w-full gap-x-2 overflow-x-auto whitespace-nowrap sm:justify-between [&::-webkit-scrollbar]:hidden">
        <div className="flex items-center gap-x-2">
          <DropDown
            variant="onOff"
            onChangeSelection={() => {}}
            aria-label="온라인/오프라인 선택"
          />
          <DropDown
            variant="memberCount"
            onChangeSelection={() => {}}
            aria-label="인원 수 선택"
          />
          <FilterCheckbox
            label="신청가능"
            checked={showAvailableOnly}
            onChange={(e) => setShowAvailableOnly(e.target.checked)}
            aria-label="신청가능 필터"
          />
        </div>
        <SortingButton
          variant="byDeadline"
          onClickSorting={() => {}}
          aria-label="마감임박 정렬"
        />
      </div>
    </>
  );
}

export default FilterSection;
