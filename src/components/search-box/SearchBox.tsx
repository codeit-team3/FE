import React, { ChangeEvent } from 'react';
import SearchIcon from '../../../public/icons/SearchIcon';
import { twMerge } from 'tailwind-merge';

interface SearchBoxProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  icon?: React.ReactNode;
  className?: string;
}

const SearchBox = ({
  value,
  onChange,
  placeholder = '검색어를 입력해주세요',
  icon = <SearchIcon />,
  className,
}: SearchBoxProps) => {
  return (
    <div
      className={twMerge(
        'flex items-center gap-1 rounded-lg border border-gray-200 px-3 py-2',
        className,
      )}
    >
      <div className="flex h-6 w-6 items-center justify-center text-gray-400">
        {icon}
      </div>
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full bg-transparent text-sm text-gray-darker placeholder:text-gray-normal-03"
      />
    </div>
  );
};

export default SearchBox;
