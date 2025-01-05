'use client';

import DropDown from '@/components/drop-down/DropDown';
import FilterCheckbox from '@/components/filter-checkbox/FilterCheckbox';
import { ChangeEvent, useState } from 'react';
import SortingButton from '@/components/sorting-button/SortingButton';
import { BookClubParams } from '../../types/bookclubs';
import { getMeetingType, getMemberLimit } from '@/lib/utils/filterUtils';

interface CategoryTabsProps {
  onFilterChange: (newFilters: Partial<BookClubParams>) => void;
}

function FilterSection({ onFilterChange }: CategoryTabsProps) {
  const [showAvailableOnly, setShowAvailableOnly] = useState(false); // 신청가능

  const toggleAvailableOnly = (e: ChangeEvent<HTMLInputElement>) => {
    const isChecked = e.target.checked;
    setShowAvailableOnly(isChecked);

    onFilterChange({ isAvailable: isChecked });
  };

  const updateMemberLimitFilter = (selectedValue: string | undefined) => {
    const memberLimit = getMemberLimit(selectedValue);
    if (memberLimit) {
      onFilterChange({
        memberLimitMin: memberLimit.min,
        memberLimitMax: memberLimit.max,
      });
    }
  };

  const updateMeetingTypeFilter = (selectedLabel: string | undefined) => {
    const meetingType = getMeetingType(selectedLabel);
    if (selectedLabel !== undefined) {
      onFilterChange({ meetingType });
    }
  };

  const setSortingOrder = (order: string) => {
    const isValidOrder = (
      value: string | undefined,
    ): value is BookClubParams['order'] => {
      return value !== undefined && ['DESC', 'END'].includes(value);
    };

    if (isValidOrder(order)) {
      onFilterChange({ order });
    }
  };

  return (
    <div className="flex w-full gap-x-2 overflow-x-auto whitespace-nowrap sm:justify-between [&::-webkit-scrollbar]:hidden">
      <div className="flex items-center gap-x-2">
        <DropDown
          variant="onOff"
          onChangeSelection={updateMeetingTypeFilter}
          aria-label="온라인/오프라인 선택"
        />
        <DropDown
          variant="memberCount"
          onChangeSelection={updateMemberLimitFilter}
          aria-label="인원 수 선택"
        />
        <FilterCheckbox
          label="신청가능"
          checked={showAvailableOnly}
          onChange={toggleAvailableOnly}
          aria-label="신청가능 필터"
        />
      </div>
      <SortingButton
        variant="byDeadline"
        onClickSorting={setSortingOrder}
        aria-label="마감임박 정렬"
      />
    </div>
  );
}

export default FilterSection;
