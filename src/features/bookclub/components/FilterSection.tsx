'use client';

import DropDown from '@/components/drop-down/DropDown';
import FilterCheckbox from '@/components/filter-checkbox/FilterCheckbox';
import { useState } from 'react';
import SortingButton from '@/components/sorting-button/SortingButton';
import { Filters } from '../types';

interface CategoryTabsProps {
  filters: Filters;
  onFilterChange: (newFilters: Partial<Filters>) => void;
}

function FilterSection({ filters, onFilterChange }: CategoryTabsProps) {
  const [showAvailableOnly, setShowAvailableOnly] = useState(false); // 신청가능
  console.log(filters, onFilterChange);

  return (
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
  );
}

export default FilterSection;
