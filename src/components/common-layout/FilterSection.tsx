'use client';

import DropDown from '@/components/drop-down/DropDown';
import FilterCheckbox from '@/components/filter-checkbox/FilterCheckbox';
import { ChangeEvent, Dispatch, SetStateAction, useState } from 'react';
import SortingButton from '@/components/sorting-button/SortingButton';
import { BookClub, BookClubParams } from '../../types/bookclubs';
import { getMeetingType, getMemberLimit } from '@/lib/utils/filterUtils';
import { clubStatus } from '@/lib/utils/clubUtils';

interface CategoryTabsProps {
  bookClubs: BookClub[];
  initialBookClubs: BookClub[];
  setBookClubs: Dispatch<SetStateAction<BookClub[]>>;
  onFilterChange: (newFilters: Partial<BookClubParams>) => void;
}

function FilterSection({
  bookClubs,
  initialBookClubs,
  setBookClubs,
  onFilterChange,
}: CategoryTabsProps) {
  const [showAvailableOnly, setShowAvailableOnly] = useState(false); // 신청가능

  const toggleAvailableOnly = (e: ChangeEvent<HTMLInputElement>) => {
    const isChecked = e.target.checked;
    setShowAvailableOnly(isChecked);

    const filteredBookClubs = isChecked
      ? bookClubs.filter(
          (club) =>
            club.memberCount < club.memberLimit &&
            clubStatus(
              club.memberCount,
              club.memberLimit,
              club.endDate,
              new Date(),
            ) !== 'closed',
        )
      : initialBookClubs;

    setBookClubs(filteredBookClubs);
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
