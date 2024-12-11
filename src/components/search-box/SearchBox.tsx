import React, { ChangeEvent } from 'react';
import SearchIcon from '../../../public/icons/SearchIcon';

interface SearchBoxProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

const SearchBox = ({
  value,
  onChange,
  placeholder = '검색어를 입력해주세요',
}: SearchBoxProps) => {
  return (
    <div className="flex items-center gap-1 rounded-lg border border-gray-200 px-3 py-2">
      <div className="flex h-6 w-6 items-center justify-center text-gray-400">
        <SearchIcon />
      </div>
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full text-sm text-gray-darker placeholder:text-gray-normal-03"
      />
    </div>
  );
};

export default SearchBox;
