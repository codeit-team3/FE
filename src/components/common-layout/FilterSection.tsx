'use client';

import DropDown from '@/components/drop-down/DropDown';
import FilterCheckbox from '@/components/filter-checkbox/FilterCheckbox';
import { ChangeEvent, Dispatch, SetStateAction, useState } from 'react';
import SortingButton from '@/components/sorting-button/SortingButton';
import { BookClub, BookClubParams } from '../../types/bookclubs';
import { getMeetingType, getMemberLimit } from '@/lib/utils/filterUtils';

interface CategoryTabsProps {
  bookClubs: BookClub[];
  setBookClubs: Dispatch<SetStateAction<BookClub[]>>;
  onFilterChange: (newFilters: Partial<BookClubParams>) => void;
}

function FilterSection({
  bookClubs,
  setBookClubs,
  onFilterChange,
}: CategoryTabsProps) {
  const [showAvailableOnly, setShowAvailableOnly] = useState(false); // 신청가능

  const toggleAvailableOnly = (e: ChangeEvent<HTMLInputElement>) => {
    const isChecked = e.target.checked;
    setShowAvailableOnly(isChecked);
    if (isChecked) {
      const filteredBookClubs = bookClubs.filter(
        (club) => club.memberCount < club.memberLimit,
      );
      setBookClubs(filteredBookClubs);
    }
  };

  const handleMemberLimitChange = (selectedValue: string | undefined) => {
    const memberLimit = getMemberLimit(selectedValue);
    onFilterChange({ memberLimit });
  };

  const handleMeetingTypeChange = (selectedLabel: string | undefined) => {
    const meetingType = getMeetingType(selectedLabel);
    onFilterChange({ meetingType });
  };

  const setSortingOrder = (order: string) => {
    onFilterChange({ order: order as BookClubParams['order'] });
  };

  return (
    // <div className="flex w-full gap-x-2 overflow-x-auto whitespace-nowrap sm:justify-between [&::-webkit-scrollbar]:hidden">
    <div className="flex w-full gap-x-2 whitespace-nowrap sm:justify-between [&::-webkit-scrollbar]:hidden">
      <div className="flex items-center gap-x-2">
        <DropDown
          variant="onOff"
          onChangeSelection={handleMeetingTypeChange}
          aria-label="온라인/오프라인 선택"
        />
        <DropDown
          variant="memberCount"
          onChangeSelection={handleMemberLimitChange}
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
