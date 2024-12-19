'use client';

import DropDown from '@/components/drop-down/DropDown';
import FilterCheckbox from '@/components/filter-checkbox/FilterCheckbox';
import { ChangeEvent, Dispatch, SetStateAction, useState } from 'react';
import SortingButton from '@/components/sorting-button/SortingButton';
import { BookClub, BookClubParams } from '../types/bookclubs';

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

  const filterCheckboxHandelr = (e: ChangeEvent<HTMLInputElement>) => {
    const isChecked = e.target.checked;
    setShowAvailableOnly(isChecked);
    // onFilterChange(showAvailableOnly); // 백엔드에서 처리하는 로직 필요?
    if (isChecked) {
      const filteredBookClubs = bookClubs.filter(
        (club) => club.memberCount < club.memberLimit,
      );
      setBookClubs(filteredBookClubs);
    }
  };

  const handleMemberLimitChange = (selectedValue: string | undefined) => {
    let memberLimit = undefined;

    switch (selectedValue) {
      case 'TWO_FOUR':
        memberLimit = 4;
        break;
      case 'FIVE_SEVEN':
        memberLimit = 7;
        break;
      case 'EIGHT_TEN':
        memberLimit = 10;
        break;
      case 'OVER_ELEVEN':
        memberLimit = 11;
        break;
      default:
        memberLimit = undefined;
    }

    onFilterChange({ memberLimit: memberLimit });
  };

  const onChangeOnOffSelection = (selectedLabel: string | undefined) => {
    const validValues: BookClubParams['meetingType'][] = [
      'ALL',
      'ONLINE',
      'OFFLINE',
    ];

    if (
      selectedLabel &&
      validValues.includes(selectedLabel as BookClubParams['meetingType'])
    ) {
      onFilterChange({
        meetingType: selectedLabel as BookClubParams['meetingType'],
      });
    } else {
      onFilterChange({ meetingType: undefined });
    }
  };

  const onChangeOrderSelection = (order: string) => {
    onFilterChange({ order: order as BookClubParams['order'] });
  };

  return (
    // <div className="flex w-full gap-x-2 overflow-x-auto whitespace-nowrap sm:justify-between [&::-webkit-scrollbar]:hidden">
    <div className="flex w-full gap-x-2 whitespace-nowrap sm:justify-between [&::-webkit-scrollbar]:hidden">
      <div className="flex items-center gap-x-2">
        <DropDown
          variant="onOff"
          onChangeSelection={onChangeOnOffSelection}
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
          onChange={filterCheckboxHandelr}
          aria-label="신청가능 필터"
        />
      </div>
      <SortingButton
        variant="byDeadline"
        onClickSorting={onChangeOrderSelection}
        aria-label="마감임박 정렬"
      />
    </div>
  );
}

export default FilterSection;
